export type DonationReceipt = {
  reference: string;
  amount: number;
  currency: string;
  paidAt?: string;
  email?: string;
  donorName?: string;
  channel?: string;
  receiptNumber?: string;
};

const CHANNEL_LABELS: Record<string, string> = {
  mobile_money: 'Mobile money',
  card: 'Card',
  bank: 'Bank',
  bank_transfer: 'Bank transfer',
  ussd: 'USSD',
  qr: 'QR',
};

function pdfText(value: string) {
  return value
    .replace(/[^\x20-\x7E]/g, '')
    .replace(/\\/g, '\\\\')
    .replace(/\(/g, '\\(')
    .replace(/\)/g, '\\)');
}

function formatAmount(amount: number, currency: string) {
  const formatted = amount.toLocaleString('en-GH', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  return `${currency} ${formatted}`;
}

function formatPaidAt(paidAt?: string) {
  if (!paidAt) return 'Not available';
  const date = new Date(paidAt);
  if (Number.isNaN(date.getTime())) return paidAt;
  return new Intl.DateTimeFormat('en-GH', {
    dateStyle: 'long',
    timeStyle: 'short',
    timeZone: 'Africa/Accra',
  }).format(date);
}

function formatChannel(channel?: string) {
  if (!channel) return 'Paystack';
  return CHANNEL_LABELS[channel] || channel.replace(/_/g, ' ');
}

export function buildDonationReceiptPdf(receipt: DonationReceipt) {
  const rows: [string, string][] = [
    ['Receipt number', receipt.receiptNumber || 'Not available'],
    ['Payment reference', receipt.reference],
    ['Date', formatPaidAt(receipt.paidAt)],
    ['Donor', receipt.donorName && receipt.donorName !== 'Anonymous' ? receipt.donorName : 'Not provided'],
    ['Email', receipt.email || 'Not available'],
    ['Payment method', formatChannel(receipt.channel)],
    ['Amount', formatAmount(receipt.amount, receipt.currency || 'GHS')],
  ];

  const commands = [
    '0.102 0.153 0.267 rg',
    '0 760 595 82 re f',
    '0.969 0.580 0.114 rg',
    '0 756 595 4 re f',
    'BT',
    '/F2 22 Tf',
    '1 1 1 rg',
    '48 796 Td',
    `(${pdfText('The Lys Foundation')}) Tj`,
    '/F1 12 Tf',
    '0 -22 Td',
    `(${pdfText('Donation receipt')}) Tj`,
    'ET',
    'BT',
    '/F1 11 Tf',
    '0.2 0.24 0.33 rg',
    '48 720 Td',
    `(${pdfText('Accra, Ghana')}) Tj`,
    '0 -16 Td',
    `(${pdfText('info@lysfoundation.org')}) Tj`,
    '0 -16 Td',
    `(${pdfText('www.thelysfoundation.org')}) Tj`,
    'ET',
  ];

  rows.forEach((row, index) => {
    const y = 640 - index * 36;
    commands.push(
      '0.96 0.97 0.98 rg',
      `48 ${y - 10} 499 32 re f`,
      'BT',
      '/F1 9 Tf',
      '0.35 0.4 0.48 rg',
      `1 0 0 1 64 ${y + 8} Tm`,
      `(${pdfText(row[0].toUpperCase())}) Tj`,
      '/F2 12 Tf',
      '0.1 0.15 0.27 rg',
      `1 0 0 1 250 ${y + 6} Tm`,
      `(${pdfText(row[1])}) Tj`,
      'ET'
    );
  });

  commands.push(
    'BT',
    '/F1 10 Tf',
    '0.35 0.4 0.48 rg',
    '48 360 Td',
    `(${pdfText('This receipt confirms a donation to The Lys Foundation.')}) Tj`,
    '0 -16 Td',
    `(${pdfText('Paystack has also emailed a receipt to the donor.')}) Tj`,
    '0 -16 Td',
    `(${pdfText('Thank you for supporting Montessori education in Ghana.')}) Tj`,
    'ET'
  );

  const stream = commands.join('\n');
  const objects = [
    '<< /Type /Catalog /Pages 2 0 R >>',
    '<< /Type /Pages /Kids [3 0 R] /Count 1 >>',
    '<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Contents 4 0 R /Resources << /Font << /F1 5 0 R /F2 6 0 R >> >> >>',
    `<< /Length ${stream.length} >>\nstream\n${stream}\nendstream`,
    '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>',
    '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>',
  ];

  let body = '%PDF-1.4\n';
  const offsets = [0];
  objects.forEach((object, index) => {
    offsets.push(body.length);
    body += `${index + 1} 0 obj\n${object}\nendobj\n`;
  });

  const xrefAt = body.length;
  let xref = `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
  for (let index = 1; index < offsets.length; index += 1) {
    xref += `${String(offsets[index]).padStart(10, '0')} 00000 n \n`;
  }
  const file = `${body}${xref}trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefAt}\n%%EOF`;
  return new TextEncoder().encode(file);
}

export function downloadDonationReceipt(receipt: DonationReceipt) {
  const bytes = buildDonationReceiptPdf(receipt);
  const blob = new Blob([bytes], { type: 'application/pdf' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `Lys-Foundation-receipt-${receipt.reference}.pdf`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}
