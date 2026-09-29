import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function LightboxModal({ images, activeIndex, isOpen, onClose, onNavigate }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onNavigate((activeIndex - 1 + images.length) % images.length);
      if (e.key === 'ArrowRight') onNavigate((activeIndex + 1) % images.length);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, activeIndex, images, onClose, onNavigate]);

  if (!isOpen || !images || images.length === 0) return null;

  const currentImage = images[activeIndex] || images[0];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 sm:p-8"
      onClick={onClose}
    >
      {/* Top Bar with counter & close */}
      <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-10 text-white">
        <span className="text-xs font-mono tracking-widest text-stone-400">
          {activeIndex + 1} / {images.length}
        </span>
        <button
          onClick={onClose}
          className="p-2 text-stone-400 hover:text-white transition-colors"
          aria-label="Close Lightbox"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Nav Controls */}
      {images.length > 1 && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNavigate((activeIndex - 1 + images.length) % images.length);
            }}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 text-stone-400 hover:text-white bg-black/40 hover:bg-black/80 rounded-full transition-all"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNavigate((activeIndex + 1) % images.length);
            }}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 text-stone-400 hover:text-white bg-black/40 hover:bg-black/80 rounded-full transition-all"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      {/* Image Container */}
      <div
        className="max-w-6xl max-h-[85vh] flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={currentImage}
          alt={`Architectural view ${activeIndex + 1}`}
          className="max-w-full max-h-[85vh] object-contain shadow-2xl transition-transform duration-300"
        />
      </div>
    </div>
  );
}
