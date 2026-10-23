const SITE_URL = 'https://www.thelysfoundation.org';

export type PaystackFailure = {
  ok: false;
  status: number;
  message: string;
};

export type InitializeSuccess = {
  ok: true;
  status: 200;
  authorizationUrl: string;
  reference: string;
};

export type VerifySuccess = {
  ok: true;
  status: 200;
  message: string;
  reference: string;
  amount: number;
  currency: string;
  paidAt: string;
  email: string;
  donorName: string;
  channel: string;
  receiptNumber: string;
};

export function paystackSecret() {
  return process.env.PAYSTACK_SECRET_KEY || process.env.LiveSecretKey || '';
}

export function donationCallbackUrl(origin: string | undefined) {
  if (origin) {
    try {
      const url = new URL(origin);
      const local = url.hostname === 'localhost' || url.hostname === '127.0.0.1';
      const production = url.hostname === 'www.thelysfoundation.org' || url.hostname === 'thelysfoundation.org';
      if (local || production) {
        return `${url.origin}/donate`;
      }
    } catch {
      // Ignore a malformed origin and fall back to the public site.
    }
  }
  return `${SITE_URL}/donate`;
}

type PaystackEnvelope = {
  status?: boolean;
  message?: string;
  data?: {
    authorization_url?: string;
    reference?: string;
    status?: string;
    amount?: number;
    currency?: string;
    paid_at?: string;
    channel?: string;
    receipt_number?: string;
    customer?: { email?: string };
    metadata?: { donor_name?: string };
  };
};

function failure(status: number, message: string): PaystackFailure {
  return { ok: false, status, message };
}

async function readPaystack(response: Response): Promise<PaystackEnvelope> {
  const data = await response.json().catch(() => ({}));
  if (!data || typeof data !== 'object') return {};
  return data as PaystackEnvelope;
}

export async function initializeDonation(input: {
  email: unknown;
  amount: unknown;
  name?: unknown;
  origin?: string;
}): Promise<InitializeSuccess | PaystackFailure> {
  const secret = paystackSecret();
  if (!secret) {
    return failure(500, 'Paystack is not configured on the server yet.');
  }

  const email = String(input.email || '').trim().toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 120) {
    return failure(400, 'Enter a valid email address.');
  }

  const amountGhs = Number(input.amount);
  if (!Number.isFinite(amountGhs) || amountGhs < 1 || amountGhs > 50000) {
    return failure(400, 'Enter an amount between GHS 1 and GHS 50,000.');
  }

  const donorName = String(input.name || 'Anonymous').trim().slice(0, 120) || 'Anonymous';
  const response = await fetch('https://api.paystack.co/transaction/initialize', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${secret}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      amount: Math.round(amountGhs * 100),
      currency: 'GHS',
      callback_url: donationCallbackUrl(input.origin),
      metadata: {
        donor_name: donorName,
        custom_fields: [
          {
            display_name: 'Donor name',
            variable_name: 'donor_name',
            value: donorName,
          },
        ],
      },
    }),
  });

  const data = await readPaystack(response);
  if (!response.ok || !data.status || !data.data?.authorization_url || !data.data.reference) {
    return failure(400, data.message || 'Paystack could not start this payment.');
  }

  return {
    ok: true,
    status: 200,
    authorizationUrl: data.data.authorization_url,
    reference: data.data.reference,
  };
}

export async function verifyDonation(referenceInput: unknown): Promise<VerifySuccess | PaystackFailure> {
  const secret = paystackSecret();
  if (!secret) {
    return failure(500, 'Paystack is not configured on the server yet.');
  }

  const reference = String(referenceInput || '').trim();
  if (!/^[\w.-]{6,100}$/.test(reference)) {
    return failure(400, 'Invalid payment reference.');
  }

  const response = await fetch(`https://api.paystack.co/transaction/verify/${encodeURIComponent(reference)}`, {
    headers: { Authorization: `Bearer ${secret}` },
  });
  const data = await readPaystack(response);
  if (!response.ok || !data.status || !data.data) {
    return failure(400, data.message || 'Could not verify this payment.');
  }

  if (data.data.status !== 'success') {
    return failure(400, 'This payment was not completed.');
  }

  const amount = Number(data.data.amount || 0) / 100;
  const currency = data.data.currency || 'GHS';
  return {
    ok: true,
    status: 200,
    message: `Thank you. We received your donation of ${currency} ${amount}.`,
    reference: data.data.reference || reference,
    amount,
    currency,
    paidAt: data.data.paid_at || '',
    email: data.data.customer?.email || '',
    donorName: data.data.metadata?.donor_name || '',
    channel: data.data.channel || '',
    receiptNumber: data.data.receipt_number || '',
  };
}
