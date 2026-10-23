import type { IncomingMessage, ServerResponse } from 'node:http';
import { defineConfig, loadEnv, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import { seoPrerenderPlugin } from './vite-plugin-seo-prerender';
import { initializeDonation, verifyDonation } from './server/paystack';

function readRequestBody(req: IncomingMessage) {
  return new Promise<Record<string, unknown>>((resolve, reject) => {
    const chunks: Buffer[] = [];
    req.on('data', (chunk) => chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk)));
    req.on('end', () => {
      if (!chunks.length) {
        resolve({});
        return;
      }
      try {
        resolve(JSON.parse(Buffer.concat(chunks).toString('utf8')));
      } catch (error) {
        reject(error);
      }
    });
    req.on('error', reject);
  });
}

function sendJson(res: ServerResponse, status: number, body: unknown) {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(body));
}

function paystackDevApi(): Plugin {
  return {
    name: 'paystack-dev-api',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const url = new URL(req.url || '/', 'http://localhost');
        if (url.pathname !== '/api/paystack/initialize' && url.pathname !== '/api/paystack/verify') {
          next();
          return;
        }

        try {
          if (url.pathname === '/api/paystack/initialize') {
            if (req.method !== 'POST') {
              sendJson(res, 405, { ok: false, message: 'Method not allowed' });
              return;
            }
            const body = await readRequestBody(req);
            const origin = req.headers.origin || (req.headers.referer ? String(req.headers.referer) : undefined);
            const result = await initializeDonation({
              email: body.email,
              amount: body.amount,
              name: body.name,
              origin,
            });
            const { status, ...payload } = result;
            sendJson(res, status, payload);
            return;
          }

          if (req.method !== 'GET') {
            sendJson(res, 405, { ok: false, message: 'Method not allowed' });
            return;
          }
          const result = await verifyDonation(url.searchParams.get('reference'));
          const { status, ...payload } = result;
          sendJson(res, status, payload);
        } catch {
          sendJson(res, 400, { ok: false, message: 'Could not read the payment request.' });
        }
      });
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  process.env.PAYSTACK_SECRET_KEY = process.env.PAYSTACK_SECRET_KEY || env.PAYSTACK_SECRET_KEY || env.LiveSecretKey;
  process.env.LiveSecretKey = process.env.LiveSecretKey || env.LiveSecretKey;

  return {
    plugins: [react(), seoPrerenderPlugin(), paystackDevApi()],
    optimizeDeps: {
      exclude: ['lucide-react'],
    },
  };
});
