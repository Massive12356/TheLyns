import { initializeDonation } from '../../server/paystack.js';

type ApiRequest = {
  method?: string;
  body?: unknown;
  headers: Record<string, string | string[] | undefined>;
};

type ApiResponse = {
  status: (code: number) => { json: (body: unknown) => void };
};

function readBody(body: unknown) {
  if (!body) return {};
  if (typeof body === 'string') {
    try {
      return JSON.parse(body) as Record<string, unknown>;
    } catch {
      return {};
    }
  }
  if (typeof body === 'object') return body as Record<string, unknown>;
  return {};
}

function headerValue(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] : value;
}

export default async function handler(req: ApiRequest, res: ApiResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ ok: false, message: 'Method not allowed' });
    return;
  }

  try {
    const body = readBody(req.body);
    const origin = headerValue(req.headers.origin) || headerValue(req.headers.referer);
    const result = await initializeDonation({
      email: body.email,
      amount: body.amount,
      name: body.name,
      origin,
    });

    const { status, ...payload } = result;
    res.status(status).json(payload);
  } catch {
    res.status(502).json({ ok: false, message: 'Could not reach Paystack. Try again in a moment.' });
  }
}
