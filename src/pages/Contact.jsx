import React, { useState } from 'react';
import { Mail, Phone, MapPin, MessageCircle, Clock, CheckCircle, ArrowRight } from 'lucide-react';
import { InstagramIcon, LinkedInIcon } from '../components/SocialIcons';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'Apartment',
    location: '',
    budget: '₹30L - ₹50L',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const projectTypes = [
    'Apartment',
    'Villa',
    'Office',
    'Restaurant',
    'Retail',
    'Other',
  ];

  const budgetOptions = [
    '₹15 Lakhs - ₹30 Lakhs',
    '₹30 Lakhs - ₹50 Lakhs',
    '₹50 Lakhs - ₹1 Crore',
    '₹1 Crore +',
  ];

  const faqs = [
    {
      q: 'How does the initial consultation work?',
      a: 'We begin with an in-depth 45-minute discovery session either at our Coimbatore studio or via video conference. We review your floor plans, lifestyle requirements, and aesthetic preferences before preparing a formal concept and scope proposal.'
    },
    {
      q: 'Do you take on projects outside Coimbatore?',
      a: 'Yes. While our headquarters and primary workshop are in Coimbatore, our architects and execution teams regularly deliver turnkey villas and luxury residences across Chennai, Bangalore, Kochi, Mysore, and the Nilgiris.'
    },
    {
      q: 'What is the typical timeline for a complete residential fit-out?',
      a: 'A luxury apartment typically spans 3 to 4 months from design approval to handover. Complete standalone villas usually range from 6 to 12 months depending on civil interventions and bespoke joinery complexity.'
    }
  ];

  return (
    <div className="bg-[#FBFBF9] text-[#181816] pt-24 sm:pt-28">
      {/* ==================================================
          CONTACT HERO
          ================================================== */}
      <section className="py-20 sm:py-28 border-b border-[#181816]/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-4xl space-y-6">
            <span className="text-xs font-mono uppercase tracking-[0.35em] text-[#7A766F] block">
              START A CONVERSATION
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light text-[#181816] leading-[1.1]">
              Have a space in mind?
            </h1>
            <p className="text-base sm:text-xl text-stone-600 font-light max-w-2xl leading-relaxed pt-2">
              Tell us a little about your project. We'd love to hear what you're imagining.
            </p>
          </div>
        </div>
      </section>

      {/* ==================================================
          FORM & CONTACT DETAILS GRID
          ================================================== */}
      <section className="py-20 sm:py-28 border-b border-[#181816]/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Form Column */}
            <div className="lg:col-span-7 bg-white p-8 sm:p-12 border border-stone-200 shadow-xs">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#181816] mb-2">
                      Project Information
                    </h3>
                    <p className="text-xs text-stone-500 font-mono uppercase tracking-wider">
                      Please fill out the details below. All inquiries receive a prompt reply.
                    </p>
                  </div>

                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                    <div>
                      <label className="block text-xs uppercase font-mono tracking-wider text-stone-600 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Karthik Sundar"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[#F5F3EF] border border-stone-200 px-4 py-3 text-sm text-[#181816] focus:border-[#181816] focus:outline-hidden transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase font-mono tracking-wider text-stone-600 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. karthik@domain.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#F5F3EF] border border-stone-200 px-4 py-3 text-sm text-[#181816] focus:border-[#181816] focus:outline-hidden transition-colors"
                      />
                    </div>
                  </div>

                  {/* Phone & Location */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs uppercase font-mono tracking-wider text-stone-600 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 90000 00000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#F5F3EF] border border-stone-200 px-4 py-3 text-sm text-[#181816] focus:border-[#181816] focus:outline-hidden transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase font-mono tracking-wider text-stone-600 mb-2">
                        Project Location
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Coimbatore, Chennai..."
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="w-full bg-[#F5F3EF] border border-stone-200 px-4 py-3 text-sm text-[#181816] focus:border-[#181816] focus:outline-hidden transition-colors"
                      />
                    </div>
                  </div>

                  {/* Project Type Selection */}
                  <div>
                    <label className="block text-xs uppercase font-mono tracking-wider text-stone-600 mb-3">
                      Project Type
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                      {projectTypes.map((type) => (
                        <button
                          type="button"
                          key={type}
                          onClick={() => setFormData({ ...formData, projectType: type })}
                          className={`py-2.5 px-3 text-xs uppercase font-mono tracking-wider transition-all text-center border ${
                            formData.projectType === type
                              ? 'bg-[#181816] text-white border-[#181816]'
                              : 'bg-[#F5F3EF] text-stone-600 border-stone-200 hover:border-stone-400'
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Approximate Budget */}
                  <div>
                    <label className="block text-xs uppercase font-mono tracking-wider text-stone-600 mb-2">
                      Approximate Budget
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full bg-[#F5F3EF] border border-stone-200 px-4 py-3 text-sm text-[#181816] focus:border-[#181816] focus:outline-hidden transition-colors"
                    >
                      {budgetOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs uppercase font-mono tracking-wider text-stone-600 mb-2">
                      Message / Project Details
                    </label>
                    <textarea
                      rows="4"
                      required
                      placeholder="Share details on your square footage, architectural preferences, current construction stage, and preferred start date..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#F5F3EF] border border-stone-200 px-4 py-3 text-sm text-[#181816] focus:border-[#181816] focus:outline-hidden transition-colors"
                    ></textarea>
                  </div>

                  {/* CTA Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full py-4 bg-[#181816] hover:bg-black text-white text-xs uppercase tracking-[0.25em] font-medium transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50"
                    >
                      <span>{submitting ? 'Submitting...' : 'Send Enquiry'}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              ) : (
                <div className="py-16 text-center space-y-5">
                  <CheckCircle className="w-14 h-14 text-[#181816] mx-auto stroke-[1.5]" />
                  <h3 className="font-serif text-3xl sm:text-4xl font-light text-[#181816]">
                    Thank You, {formData.name}.
                  </h3>
                  <p className="text-sm text-stone-600 max-w-md mx-auto leading-relaxed">
                    Your enquiry for a {formData.projectType.toLowerCase()} in {formData.location || 'South India'} has been logged with our Coimbatore studio. Our senior design team will reach out within 24 hours.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 bg-[#181816] text-white text-xs uppercase tracking-[0.2em]"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Contact Details & Direct Channels Column */}
            <div className="lg:col-span-5 space-y-8">
              {/* Studio Info Card */}
              <div className="bg-[#F5F3EF] border border-stone-200 p-8 space-y-6">
                <h3 className="font-serif text-2xl font-light text-[#181816] border-b border-stone-200 pb-3">
                  Studio Headquarters
                </h3>

                <div className="space-y-5 text-sm">
                  <div className="flex items-start space-x-3.5">
                    <MapPin className="w-5 h-5 text-[#181816] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-[#181816]">Verra Interiors Atelier</p>
                      <p className="text-stone-600 font-light text-xs mt-0.5 leading-relaxed">
                        Race Course Road, Gopalapuram,
                        <br />
                        Coimbatore, Tamil Nadu 641018, India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3.5">
                    <Phone className="w-5 h-5 text-[#181816] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-[#181816]">Telephone</p>
                      <a
                        href="tel:+919000000000"
                        className="text-stone-600 hover:text-black font-light text-xs mt-0.5 block transition-colors"
                      >
                        +91 90000 00000
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3.5">
                    <Mail className="w-5 h-5 text-[#181816] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-[#181816]">Email Inquiries</p>
                      <a
                        href="mailto:hello@verrainteriors.demo"
                        className="text-stone-600 hover:text-black font-light text-xs mt-0.5 block transition-colors"
                      >
                        hello@verrainteriors.demo
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3.5">
                    <Clock className="w-5 h-5 text-[#181816] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-[#181816]">Consultation Hours</p>
                      <p className="text-stone-600 font-light text-xs mt-0.5">
                        Monday – Saturday: 9:30 AM – 7:00 PM IST
                        <br />
                        (Private weekend appointments available upon request)
                      </p>
                    </div>
                  </div>
                </div>

                {/* WhatsApp Quick Action Button */}
                <div className="pt-4 border-t border-stone-200">
                  <a
                    href="https://wa.me/919000000000?text=Hi%20Verra%20Interiors%2C%20I'd%20like%20to%20discuss%20an%20interior%20design%20project."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs uppercase tracking-[0.2em] font-medium flex items-center justify-center space-x-2 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>WhatsApp Our Design Team</span>
                  </a>
                </div>
              </div>

              {/* Social Channels */}
              <div className="p-8 bg-white border border-stone-200 flex items-center justify-between">
                <div>
                  <h4 className="font-serif text-lg text-[#181816]">Follow Our Journal</h4>
                  <p className="text-xs text-stone-500 font-mono">Behind-the-scenes & material studies</p>
                </div>
                <div className="flex items-center space-x-3">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 border border-stone-200 hover:border-black text-stone-700 hover:text-black transition-colors"
                    aria-label="Instagram"
                  >
                    <InstagramIcon className="w-4 h-4" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 border border-stone-200 hover:border-black text-stone-700 hover:text-black transition-colors"
                    aria-label="LinkedIn"
                  >
                    <LinkedInIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          FREQUENTLY ASKED QUESTIONS (FAQ)
          ================================================== */}
      <section className="py-20 sm:py-28 bg-[#F5F3EF]">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#7A766F] block mb-2">
              CLIENT ADVISORY
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-light text-[#181816]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="p-6 sm:p-8 bg-white border border-stone-200 space-y-2">
                <h4 className="font-serif text-xl font-light text-[#181816]">
                  {faq.q}
                </h4>
                <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
