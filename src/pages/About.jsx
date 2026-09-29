import React from 'react';
import { ArrowRight, ArrowUpRight, Compass, ShieldCheck, Layers, Feather } from 'lucide-react';
import { TEAM, DESIGN_VALUES } from '../data/team';

export default function About({ onOpenConsultation }) {
  return (
    <div className="bg-[#FBFBF9] text-[#181816] pt-24 sm:pt-28">
      {/* ==================================================
          ABOUT HERO
          ================================================== */}
      <section className="py-20 sm:py-28 border-b border-[#181816]/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-4xl space-y-6">
            <span className="text-xs font-mono uppercase tracking-[0.35em] text-[#7A766F] block">
              STUDIO PHILOSOPHY & STORY
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light text-[#181816] leading-[1.1]">
              Designing spaces with
              <br />
              <span className="italic">purpose and personality.</span>
            </h1>
            <p className="text-base sm:text-xl text-stone-600 font-light max-w-2xl leading-relaxed pt-2">
              Verra Interiors is an architecture and interior design studio founded in Coimbatore, dedicated to quiet luxury, structural honesty, and personal resonance.
            </p>
          </div>
        </div>
      </section>

      {/* ==================================================
          LARGE EDITORIAL IMAGE SPREAD
          ================================================== */}
      <section className="border-b border-[#181816]/10 bg-stone-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
          <div className="relative aspect-16/9 sm:aspect-21/9 overflow-hidden bg-stone-200">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2200&q=85"
              alt="Verra Studio Architectural Environment"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-6 right-6 bg-[#181816]/90 backdrop-blur-xs text-white px-4 py-2 text-[11px] font-mono tracking-widest uppercase">
              Verra Atelier • Coimbatore
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          STUDIO STORY & PHILOSOPHY (TWO-COLUMN EDITORIAL)
          ================================================== */}
      <section className="py-24 sm:py-32 border-b border-[#181816]/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#7A766F] block">
                OUR STORY
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-light text-[#181816] leading-tight">
                Born in Coimbatore,
                <br />
                <span className="italic">crafted for South India.</span>
              </h2>
              <div className="w-16 h-[1px] bg-[#181816]/20"></div>
            </div>

            <div className="lg:col-span-7 space-y-6 text-stone-700 leading-relaxed font-light text-base sm:text-lg">
              <p>
                Verra Interiors was established to challenge the prevailing trend of cookie-cutter, ostentatious interior decor. We believe luxury is not about gilt or decorative excess; it is the quality of light falling across a textured lime-washed wall, the weight of a solid brass handle, and the calm that descends when every functional object has its rightful place.
              </p>
              <p>
                From our flagship design atelier in Coimbatore, we work with discerning homeowners, villa developers, and boutique commercial entrepreneurs across Chennai, Bangalore, Kochi, and the Nilgiris. We treat every room as a three-dimensional composition that directly influences emotional well-being.
              </p>
              <p className="text-sm font-normal text-stone-500 pt-2 font-mono">
                "We don't merely decorate rooms; we organize life beautifully."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          DESIGN VALUES (FUNCTION, MATERIAL, DETAIL, TIMELESSNESS)
          ================================================== */}
      <section className="py-24 sm:py-32 bg-[#F5F3EF] border-b border-[#181816]/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-xl mb-16">
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#7A766F] block mb-2">
              FOUNDATIONAL PILLARS
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#181816]">
              Design Values
            </h2>
            <p className="text-sm text-stone-600 mt-3 font-light leading-relaxed">
              These four unyielding principles govern every decision on our drawing boards and on our construction sites.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {DESIGN_VALUES.map((val) => (
              <div
                key={val.number}
                className="p-8 sm:p-10 bg-white border border-stone-200/80 space-y-4 hover:border-[#181816] transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold tracking-widest text-[#7A766F]">
                    {val.number}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-stone-300"></span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#181816]">
                  {val.title}
                </h3>
                <h4 className="font-mono text-xs uppercase tracking-wider text-[#A27B4C] font-semibold">
                  "{val.subtitle}"
                </h4>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-light pt-2">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================
          OUR APPROACH (COLLABORATION & CRAFT)
          ================================================== */}
      <section className="py-24 sm:py-32 border-b border-[#181816]/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#7A766F] block">
                OUR APPROACH
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-light text-[#181816]">
                Architectural discipline meets artisanal craft.
              </h2>
              <div className="space-y-4 text-sm text-stone-600 font-light leading-relaxed">
                <p>
                  Most interior studios hand clients a 3D picture and leave the execution to subcontractors. At Verra, our architects, structural advisors, and master carpenters operate under one unified workflow.
                </p>
                <p>
                  We source our solid oaks directly from sustainable plantations, carve regional Sadahalli and Kota stones with waterjet precision, and calibrate layered lighting circuits so your home transitions seamlessly from productive day to restful dusk.
                </p>
              </div>

              <div className="pt-4 flex items-center space-x-6 text-xs font-mono uppercase tracking-wider text-stone-600">
                <div className="flex items-center space-x-2">
                  <Compass className="w-4 h-4 text-[#181816]" />
                  <span>Precision CAD & BIM</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Feather className="w-4 h-4 text-[#181816]" />
                  <span>Custom Handcraft</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="aspect-4/5 overflow-hidden bg-stone-200">
                <img
                  src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=800&q=80"
                  alt="Joinery Craft"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-4/5 overflow-hidden bg-stone-200 translate-y-6">
                <img
                  src="https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80"
                  alt="Textured Finishes"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          THE STUDIO TEAM
          ================================================== */}
      <section className="py-24 sm:py-32 bg-[#FBFBF9] border-b border-[#181816]/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-xl mb-16">
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#7A766F] block mb-2">
              LEADERSHIP
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#181816]">
              The Studio Team
            </h2>
            <p className="text-sm text-stone-600 mt-3 font-light leading-relaxed">
              Architects, interior designers, and master craftsmen united by a shared obsession with spatial refinement.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM.map((member) => (
              <div key={member.name} className="group space-y-4">
                <div className="aspect-3/4 overflow-hidden bg-stone-200">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-103"
                  />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-light text-[#181816]">
                    {member.name}
                  </h3>
                  <p className="text-[11px] font-mono uppercase tracking-wider text-[#A27B4C] mb-2">
                    {member.role}
                  </p>
                  <p className="text-xs text-stone-600 font-light leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================
          ABOUT CTA
          ================================================== */}
      <section className="py-20 sm:py-28 bg-[#181816] text-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center space-y-6">
          <h2 className="font-serif text-3xl sm:text-5xl font-light">
            Ready to design your private sanctuary?
          </h2>
          <p className="text-sm sm:text-base text-stone-400 font-light max-w-xl mx-auto">
            Schedule an introductory consultation at our Coimbatore studio or request an on-site architectural review.
          </p>
          <div className="pt-4">
            <button
              onClick={onOpenConsultation}
              className="px-8 py-3.5 bg-white text-[#181816] hover:bg-stone-200 text-xs uppercase tracking-[0.25em] font-medium transition-colors"
            >
              Start a Conversation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
