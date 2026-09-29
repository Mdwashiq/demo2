import React from 'react';
import { ArrowRight, CheckCircle2, Clock, Sparkles } from 'lucide-react';
import { SERVICES } from '../data/services';

export default function Services({ onOpenConsultation }) {
  return (
    <div className="bg-[#FBFBF9] text-[#181816] pt-24 sm:pt-28">
      {/* ==================================================
          SERVICES HERO
          ================================================== */}
      <section className="py-20 sm:py-28 border-b border-[#181816]/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-4xl space-y-6">
            <span className="text-xs font-mono uppercase tracking-[0.35em] text-[#7A766F] block">
              CAPABILITIES & COMMISSIONS
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light text-[#181816] leading-[1.1]">
              Architectural Interiors,
              <br />
              <span className="italic">Executed to Perfection.</span>
            </h1>
            <p className="text-base sm:text-xl text-stone-600 font-light max-w-2xl leading-relaxed pt-2">
              From bespoke private residences to forward-thinking commercial spaces, we provide end-to-end design, joinery fabrication, and turnkey execution.
            </p>
          </div>
        </div>
      </section>

      {/* ==================================================
          DETAILED SERVICE SECTIONS (ALL 8 SERVICES)
          ================================================== */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-24 sm:space-y-36">
          {SERVICES.map((service, index) => {
            const isReversed = index % 2 === 1;

            return (
              <div
                key={service.id}
                id={service.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center ${
                  isReversed ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Image Column */}
                <div
                  className={`lg:col-span-6 relative group overflow-hidden bg-stone-200 ${
                    isReversed ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div className="aspect-4/3 sm:aspect-16/11 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                    />
                  </div>
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-xs text-[#181816] px-3 py-1 font-mono text-xs uppercase tracking-widest">
                    Service {service.number}
                  </div>
                </div>

                {/* Content Column */}
                <div
                  className={`lg:col-span-6 space-y-6 ${
                    isReversed ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div>
                    <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#A27B4C] block mb-2">
                      0{index + 1} • {service.idealFor}
                    </span>
                    <h2 className="font-serif text-3xl sm:text-4xl font-light text-[#181816]">
                      {service.title}
                    </h2>
                  </div>

                  <p className="text-base text-stone-700 leading-relaxed font-light">
                    {service.description}
                  </p>

                  {/* What's Included */}
                  <div className="pt-2">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-stone-900 font-semibold mb-3">
                      What's Included:
                    </h4>
                    <ul className="space-y-2.5">
                      {service.included.map((item, idx) => (
                        <li key={idx} className="flex items-start space-x-3 text-xs sm:text-sm text-stone-600">
                          <CheckCircle2 className="w-4 h-4 text-[#181816] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Timeline Badge & CTA */}
                  <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-stone-200">
                    <div className="flex items-center space-x-2 text-xs font-mono text-stone-500">
                      <Clock className="w-3.5 h-3.5 text-[#181816]" />
                      <span>Typical Timeline: {service.timeline}</span>
                    </div>

                    <button
                      onClick={onOpenConsultation}
                      className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] font-medium bg-[#181816] text-white hover:bg-black px-6 py-3 transition-colors"
                    >
                      <span>Discuss Your Project</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ==================================================
          SERVICES BOTTOM CALL TO ACTION
          ================================================== */}
      <section className="py-24 sm:py-32 bg-[#F5F3EF] border-t border-[#181816]/10 mt-20">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center space-y-6">
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#7A766F] block">
            NEED A BESPOKE COMBINATION?
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#181816]">
            Every architectural journey begins with an honest conversation.
          </h2>
          <p className="text-sm sm:text-base text-stone-600 font-light max-w-xl mx-auto leading-relaxed">
            Whether you require single-room transformation or full multi-acre villa architecture, we tailor our service scope to your exact aspirations.
          </p>
          <div className="pt-4">
            <button
              onClick={onOpenConsultation}
              className="px-8 py-4 bg-[#181816] hover:bg-black text-white text-xs uppercase tracking-[0.25em] font-medium transition-colors"
            >
              Request Design Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
