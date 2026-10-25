import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { imageSrcSet, optimizedImage } from '../utils/images';

const FLYER_URL = 'https://res.cloudinary.com/cmpwim01/image/upload/v1792951762/flyer1.jpg';

const FlyerPopup = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setOpen(true), 700);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Open Day and Graduation, 19th December 2026"
          className="fixed inset-0 z-[80] flex items-center justify-center p-4 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
        >
          <button
            type="button"
            aria-label="Close announcement"
            className="absolute inset-0 bg-black/55 backdrop-blur-md"
            onClick={() => setOpen(false)}
          />

          <motion.div
            className="relative w-fit max-w-[92vw]"
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <button
              type="button"
              aria-label="Close announcement"
              onClick={() => setOpen(false)}
              className="absolute -top-3 -right-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-secondary shadow-lg ring-1 ring-black/5 transition hover:bg-primary hover:text-black"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="overflow-hidden rounded-[28px] bg-white shadow-[0_30px_80px_rgba(0,0,0,0.45)] ring-1 ring-white/40">
              <img
                src={optimizedImage(FLYER_URL, 800)}
                srcSet={imageSrcSet(FLYER_URL, [480, 800, 1000])}
                sizes="(min-width: 640px) 420px, 92vw"
                alt="Open Day and Graduation on 19th December 2026 at Lys Foundation, Camara Mamprobi, 10am"
                className="block h-auto max-h-[82vh] w-auto max-w-[min(420px,92vw)]"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default FlyerPopup;
