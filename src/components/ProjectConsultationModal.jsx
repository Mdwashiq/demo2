import React, { useState } from 'react';
import { X, CheckCircle, ArrowRight, MessageCircle } from 'lucide-react';

export default function ProjectConsultationModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'Apartment',
    location: '',
    budget: '₹30L - ₹50L',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm transition-all duration-300">
      <div
        className="relative w-full max-w-2xl bg-[#FBFBF9] text-[#181816] shadow-2xl border border-[#181816]/10 p-6 sm:p-10 max-h-[92vh] overflow-y-auto no-scrollbar"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleReset}
          className="absolute top-6 right-6 p-2 text-stone-500 hover:text-black transition-colors"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="mb-6">
              <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-[#7A766F] block mb-1">
                Studio Commission
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl font-light text-[#181816]">
                Start Your Project
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mt-2 leading-relaxed">
                Share your architectural vision with our Coimbatore studio. We schedule private design consultations within 24 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-mono text-stone-600 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Radhika Menon"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#F5F3EF] border border-stone-200 px-3.5 py-2.5 text-xs text-[#181816] focus:border-[#181816] focus:outline-hidden"
                  />
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-mono text-stone-600 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. radhika@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#F5F3EF] border border-stone-200 px-3.5 py-2.5 text-xs text-[#181816] focus:border-[#181816] focus:outline-hidden"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-mono text-stone-600 mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#F5F3EF] border border-stone-200 px-3.5 py-2.5 text-xs text-[#181816] focus:border-[#181816] focus:outline-hidden"
                  />
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-mono text-stone-600 mb-1">
                    Project Location
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Coimbatore, Chennai, Bangalore..."
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full bg-[#F5F3EF] border border-stone-200 px-3.5 py-2.5 text-xs text-[#181816] focus:border-[#181816] focus:outline-hidden"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-mono text-stone-600 mb-1">
                    Project Type
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full bg-[#F5F3EF] border border-stone-200 px-3.5 py-2.5 text-xs text-[#181816] focus:border-[#181816] focus:outline-hidden"
                  >
                    <option value="Apartment">Luxury Apartment</option>
                    <option value="Villa">Contemporary Villa</option>
                    <option value="Office">Commercial Office</option>
                    <option value="Restaurant">Restaurant / Cafe</option>
                    <option value="Retail">Retail Boutique</option>
                    <option value="Other">Other Architectural Commission</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-mono text-stone-600 mb-1">
                    Approximate Budget
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full bg-[#F5F3EF] border border-stone-200 px-3.5 py-2.5 text-xs text-[#181816] focus:border-[#181816] focus:outline-hidden"
                  >
                    <option value="₹15L - ₹30L">₹15 Lakhs - ₹30 Lakhs</option>
                    <option value="₹30L - ₹50L">₹30 Lakhs - ₹50 Lakhs</option>
                    <option value="₹50L - ₹1Cr">₹50 Lakhs - ₹1 Crore</option>
                    <option value="₹1Cr+">₹1 Crore +</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider font-mono text-stone-600 mb-1">
                  Project Notes & Timeline
                </label>
                <textarea
                  rows="3"
                  placeholder="Tell us about the property dimensions, architectural style preferences, and target move-in dates..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-[#F5F3EF] border border-stone-200 px-3.5 py-2.5 text-xs text-[#181816] focus:border-[#181816] focus:outline-hidden"
                ></textarea>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  disabled={submitting}
                  className="flex-1 py-3.5 bg-[#181816] hover:bg-black text-white text-xs uppercase tracking-[0.2em] font-medium flex items-center justify-center space-x-2 transition-colors disabled:opacity-50"
                >
                  <span>{submitting ? 'Submitting...' : 'Send Studio Enquiry'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href={`https://wa.me/919000000000?text=${encodeURIComponent(
                    `Hi Verra Interiors, I am interested in discussing a ${formData.projectType} project in ${formData.location || 'Coimbatore'}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3.5 border border-stone-300 hover:border-emerald-600 text-stone-700 hover:text-emerald-700 text-xs uppercase tracking-[0.16em] flex items-center justify-center space-x-2 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>WhatsApp Instead</span>
                </a>
              </div>
            </form>
          </div>
        ) : (
          <div className="py-10 text-center space-y-4">
            <CheckCircle className="w-12 h-12 text-[#181816] mx-auto stroke-[1.5]" />
            <h3 className="font-serif text-3xl font-light text-[#181816]">
              Enquiry Received
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto leading-relaxed">
              Thank you, {formData.name || 'valued client'}. Our principal design team will review your {formData.projectType.toLowerCase()} brief and contact you within 24 hours.
            </p>
            <div className="pt-4">
              <button
                onClick={handleReset}
                className="px-6 py-2.5 bg-[#181816] text-white text-xs uppercase tracking-[0.2em]"
              >
                Close Window
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
