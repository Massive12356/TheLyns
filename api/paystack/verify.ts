import { verifyDonation } from '../../server/paystack';

type ApiRequest = {
  method?: string;
  query?: Record<string, string | string[] | undefined>;
};

type ApiResponse = {
  status: (code: number) => { json: (body: unknown) => void };
};

export default async function handler(req: ApiRequest, res: ApiResponse) {
  if (req.method !== 'GET') {
    res.status(405).json({ ok: false, message: 'Method not allowed' });
    return;
  }

  const reference = req.query?.reference;
  const result = await verifyDonation(Array.isArray(reference) ? reference[0] : reference);
  const { status, ...payload } = result;
  res.status(status).json(payload);
}
