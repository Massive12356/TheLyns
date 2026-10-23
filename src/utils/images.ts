export function optimizedImage(url: string, width: number) {
  if (!url.includes('res.cloudinary.com') || !url.includes('/upload/')) return url;
  if (url.includes('/upload/f_auto')) return url;
  return url.replace('/upload/', `/upload/f_auto,q_auto,c_limit,w_${width}/`);
}

export function imageSrcSet(url: string, widths: number[]) {
  if (!url.includes('res.cloudinary.com')) return undefined;
  return widths.map((width) => `${optimizedImage(url, width)} ${width}w`).join(', ');
}
