import { imageSrcSet, optimizedImage } from '../utils/images';

type OptimizedImageProps = {
  src: string;
  alt: string;
  className?: string;
  sizes: string;
  widths: number[];
  priority?: boolean;
};

export function OptimizedImage({ src, alt, className, sizes, widths, priority = false }: OptimizedImageProps) {
  const largest = widths[widths.length - 1];

  return (
    <img
      src={optimizedImage(src, largest)}
      srcSet={imageSrcSet(src, widths)}
      sizes={sizes}
      alt={alt}
      width={largest}
      height={Math.round(largest * 0.67)}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      fetchPriority={priority ? 'high' : 'auto'}
      className={className}
    />
  );
}
