import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(true);
  const phoneNumber = '919000000000';
  const message = encodeURIComponent("Hi Verra Interiors, I'd like to discuss an interior design project.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-end space-x-3">
      {/* Subtle dismissible greeting tooltip */}
      {showTooltip && (
        <div className="hidden sm:flex items-center space-x-2 bg-[#1C1B19] text-white text-xs px-3.5 py-2 shadow-xl border border-white/10 rounded-sm">
          <span>Discuss your space on WhatsApp</span>
          <button
            onClick={() => setShowTooltip(false)}
            aria-label="Dismiss tooltip"
            className="text-stone-400 hover:text-white ml-1"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating CTA button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group relative flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
      >
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border border-white"></span>
        </span>
        <MessageCircle className="w-7 h-7 fill-white/20 stroke-white stroke-[2.2]" />
      </a>
    </div>
  );
}
