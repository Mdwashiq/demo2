import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ArrowUpRight, 
  MessageCircle, 
  ChevronRight, 
  Sparkles, 
  SlidersHorizontal,
  Layers,
  Award,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { PROJECTS } from '../data/projects';
import { TESTIMONIALS, STATS } from '../data/testimonials';

export default function Home({ onOpenConsultation }) {
  // Curated hero showcase items
  const heroShowcaseProjects = PROJECTS.slice(0, 4);
  const [activeHeroIdx, setActiveHeroIdx] = useState(0);
  const currentHero = heroShowcaseProjects[activeHeroIdx] || PROJECTS[0];

  // Portfolio preview projects
  const previewProjects = PROJECTS.slice(0, 6);

  return (
    <div className="bg-[#FBFBF9] text-[#181816] overflow-x-hidden pt-20 sm:pt-24">
      {/* ==================================================
          SECTION 1 — SPLIT-STUDIO HERO (Inspo Archetype)
          Strictly engineered for the first viewport (~100svh)
          ================================================== */}
      <section className="relative border-b border-[#181816]/10 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[calc(100vh-5.5rem)]">
          {/* Left Studio Column — Typography, Dateline & Action */}
          <div className="lg:col-span-6 bg-[#FBFBF9] px-6 sm:px-12 lg:px-16 py-12 lg:py-16 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#181816]/10">
            {/* Monograph Top Stamp */}
            <div className="flex items-center space-x-3 text-meta text-[#736E66]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B37D4E]"></span>
              <span>VOL. 01 // ARCHITECTURAL REPOSITORY</span>
              <span className="hidden sm:inline text-stone-400">· COIMBATORE</span>
            </div>

            {/* Core Headline & Editorial Statement */}
            <div className="my-auto py-8 space-y-6 max-w-xl">
              <h1 
                className="font-serif font-light text-[#181816] leading-[1.04] tracking-tight"
                style={{ fontSize: 'clamp(2.75rem, 5.2vw, 4.75rem)' }}
              >
                Spaces curated with stillness,{' '}
                <em className="italic font-normal text-[#B37D4E]">the other is feel.</em>
              </h1>

              <p className="text-sm sm:text-base text-[#736E66] font-light leading-relaxed max-w-lg">
                Verra is an architectural interior studio crafting quiet, tactile residential sanctuaries and design-led commercial spaces across South India.
              </p>

              {/* Dual Precision CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <Link
                  to="/projects"
                  className="px-7 py-3.5 bg-[#181816] hover:bg-[#B37D4E] text-white text-[11px] font-mono uppercase tracking-[0.2em] transition-colors duration-300 flex items-center justify-center space-x-2 text-center"
                >
                  <span>Explore Residences</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <button
                  onClick={onOpenConsultation}
                  className="px-7 py-3.5 border border-[#181816] text-[#181816] hover:bg-[#181816] hover:text-white text-[11px] font-mono uppercase tracking-[0.2em] transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Start A Project</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Bottom Marginalia */}
            <div className="pt-6 border-t border-[#181816]/8 flex items-center justify-between text-[11px] font-mono text-[#736E66]">
              <div className="flex items-center space-x-6">
                <span>EST. 2018</span>
                <span className="text-stone-300">/</span>
                <span>TURNKEY ARCHITECTURE</span>
              </div>
              <span className="text-[#B37D4E] font-medium hidden sm:inline">TAMIL NADU • KARNATAKA</span>
            </div>
          </div>

          {/* Right Showcase Column — Architectural Interactive Frame */}
          <div className="lg:col-span-6 relative bg-[#EFECE5] min-h-[420px] lg:min-h-0 flex flex-col justify-between overflow-hidden">
            {/* Background Photographic Plane with smooth cross-fade feel */}
            <div className="absolute inset-0">
              <img
                key={currentHero.id}
                src={currentHero.heroImage}
                alt={currentHero.title}
                className="w-full h-full object-cover transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#151412]/80 via-[#151412]/20 to-transparent" />
            </div>

            {/* Top Frame Tag */}
            <div className="relative z-10 p-6 sm:p-8 flex items-center justify-between text-white">
              <div className="bg-[#151412]/80 backdrop-blur-md px-3 py-1.5 border border-white/10 text-meta">
                <span>ARCHITECTURAL CASE {currentHero.number}</span>
              </div>
              <div className="text-[11px] font-mono text-white/80 bg-black/40 backdrop-blur-xs px-2.5 py-1">
                {currentHero.city}
              </div>
            </div>

            {/* Bottom Metadata & Interactive Project Switcher */}
            <div className="relative z-10 p-6 sm:p-10 space-y-5 text-white">
              <div className="max-w-md">
                <span className="text-meta text-[#D6C7B2] block mb-1">
                  {currentHero.categoryLabel} • {currentHero.area}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-light text-white mb-2">
                  <Link to={`/projects/${currentHero.slug}`} className="hover:underline">
                    {currentHero.title}
                  </Link>
                </h3>
                <p className="text-xs sm:text-sm text-stone-200 line-clamp-2 font-light">
                  {currentHero.overview}
                </p>
              </div>

              {/* Interactive Thumbnail Carousel Strip */}
              <div className="flex items-center space-x-2 pt-2 border-t border-white/15">
                {heroShowcaseProjects.map((proj, idx) => (
                  <button
                    key={proj.id}
                    onClick={() => setActiveHeroIdx(idx)}
                    className={`group relative flex-1 text-left py-2 px-2.5 transition-all border ${
                      activeHeroIdx === idx
                        ? 'border-white bg-white/20 backdrop-blur-sm'
                        : 'border-white/20 bg-black/40 hover:bg-black/60'
                    }`}
                  >
                    <div className="flex items-center justify-between text-[10px] font-mono text-stone-300">
                      <span>0{idx + 1}</span>
                      <ChevronRight className={`w-3 h-3 transition-transform ${activeHeroIdx === idx ? 'text-[#D6C7B2]' : 'text-stone-500'}`} />
                    </div>
                    <div className="text-[11px] font-serif truncate text-white mt-0.5">
                      {proj.title}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION 2 — STUDIO MANIFESTO (HUMAHOME exemplar)
          Warm terracotta & linen editorial layout
          ================================================== */}
      <section className="py-24 sm:py-32 bg-[#F4F1EB] border-b border-[#181816]/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column — Philosophy Statement */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-meta text-[#B37D4E] block">
                01 // DESIGN MANIFESTO
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#181816] leading-tight">
                "Architecture is not applied decoration; it is the physical framework of peace."
              </h2>

              <p className="text-sm sm:text-base text-[#736E66] font-light leading-relaxed max-w-xl">
                Founded in Coimbatore, Verra rejects formulaic, catalog-driven interiors. We engineer spaces around natural light rhythms, acoustic softness, and honest materials that age with grace.
              </p>

              {/* Three Studio Tenets */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-[#181816]/10">
                <div className="space-y-1.5">
                  <span className="text-meta text-[#181816] font-semibold block">01 / ARCHITECTURAL RIGOR</span>
                  <p className="text-xs text-[#736E66] leading-relaxed">
                    Custom space planning, civil modifications, and structural alignment.
                  </p>
                </div>
                <div className="space-y-1.5">
                  <span className="text-meta text-[#181816] font-semibold block">02 / HONEST MATERIALS</span>
                  <p className="text-xs text-[#736E66] leading-relaxed">
                    Raw travertine, smoked oak, tactile linens, and hand-troweled lime wash.
                  </p>
                </div>
                <div className="space-y-1.5">
                  <span className="text-meta text-[#181816] font-semibold block">03 / TURNKEY CERTAINTY</span>
                  <p className="text-xs text-[#736E66] leading-relaxed">
                    Dedicated engineering site supervisor and white-glove handover.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column — Editorial Image Composition with Material Stamp */}
            <div className="lg:col-span-5 relative">
              <div className="aspect-4/5 overflow-hidden bg-stone-300 border border-[#181816]/10 shadow-[0_16px_36px_rgba(0,0,0,0.06)]">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
                  alt="Verra Design Language - Travertine and Smoked Oak"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-103"
                />
              </div>

              {/* Material DNA Stamp Floating Callout */}
              <div className="absolute -bottom-6 -left-6 bg-[#181816] text-white p-5 max-w-[260px] border border-white/10 shadow-xl hidden sm:block">
                <span className="text-meta text-[#B37D4E] block mb-1">MATERIAL DNA</span>
                <p className="font-serif italic text-sm text-stone-200">
                  "Honed Roman Travertine paired with Smoked European White Oak."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION 3 — CURATED PORTFOLIO (Editorial Grid)
          ================================================== */}
      <section className="py-24 sm:py-32 bg-[#FBFBF9] border-b border-[#181816]/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 pb-6 border-b border-[#181816]/10 gap-4">
            <div>
              <span className="text-meta text-[#B37D4E] block mb-2">
                02 // SELECTED ARCHITECTURAL WORKS
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#181816]">
                Recent Commissions
              </h2>
            </div>
            <Link
              to="/projects"
              className="text-meta text-[#181816] hover:text-[#B37D4E] transition-colors flex items-center space-x-1.5"
            >
              <span>VIEW COMPLETE ARCHIVE (12)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Asymmetrical Magazine Editorial Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {previewProjects.map((project, idx) => {
              // Create editorial visual rhythm by alternating aspect ratios
              const aspectClass =
                idx === 0
                  ? 'aspect-4/5'
                  : idx === 1
                  ? 'aspect-1/1'
                  : idx === 2
                  ? 'aspect-4/5'
                  : idx === 3
                  ? 'aspect-16/11'
                  : 'aspect-4/5';

              return (
                <div key={project.id} className="group flex flex-col justify-between">
                  <div>
                    {/* Image Container with subtle hover lift */}
                    <Link
                      to={`/projects/${project.slug}`}
                      className={`relative overflow-hidden bg-stone-200 block ${aspectClass} mb-4 border border-[#181816]/5`}
                    >
                      <img
                        src={project.heroImage}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-104"
                      />
                      <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors" />

                      {/* Number Stamp */}
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-xs text-[#181816] text-meta px-2 py-1 border border-stone-200/60">
                        {project.number}
                      </div>

                      {/* Corner Action Arrow */}
                      <div className="absolute bottom-4 right-4 bg-[#181816] text-white p-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </Link>

                    {/* Metadata strip */}
                    <div className="flex items-center justify-between text-[11px] font-mono text-[#736E66] mb-1">
                      <span>{project.categoryLabel}</span>
                      <span>{project.area}</span>
                    </div>

                    <h3 className="font-serif text-2xl font-light text-[#181816] group-hover:text-[#B37D4E] transition-colors">
                      <Link to={`/projects/${project.slug}`}>
                        {project.title}
                      </Link>
                    </h3>
                  </div>

                  <div className="pt-2 text-[11px] font-mono text-stone-500 uppercase tracking-wider">
                    {project.location}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION 4 — DISCIPLINES & EXPERTISE (Editorial Index)
          Clean table-of-disciplines pattern
          ================================================== */}
      <section className="py-24 sm:py-32 bg-[#F4F1EB] border-b border-[#181816]/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 pb-6 border-b border-[#181816]/10 gap-4">
            <div>
              <span className="text-meta text-[#B37D4E] block mb-2">
                03 // CORE CAPABILITIES
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#181816]">
                Architectural Disciplines
              </h2>
            </div>
            <Link
              to="/services"
              className="text-meta text-[#181816] hover:text-[#B37D4E] transition-colors flex items-center space-x-1.5"
            >
              <span>EXPLORE ALL DISCIPLINES</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Numbered Row Index */}
          <div className="divide-y divide-[#181816]/10">
            {[
              {
                num: "01",
                name: "Residential Interior Architecture",
                desc: "Full spatial restructuring, partition layouts, architectural lighting design, and bespoke joinery for luxury villas and penthouses.",
                scope: "Villas & Penthouses"
              },
              {
                num: "02",
                name: "Commercial & Boutique Workplaces",
                desc: "Character-driven corporate offices, boutique retail flagships, and client experience studios tailored to brand culture.",
                scope: "Offices & Flagships"
              },
              {
                num: "03",
                name: "Custom Furniture & Joinery Craft",
                desc: "Precision factory-manufactured veneer paneling, fluted timber millwork, monolithic stone kitchen islands, and bespoke fittings.",
                scope: "Bespoke Millwork"
              },
              {
                num: "04",
                name: "Turnkey Project Execution",
                desc: "Single-point custody covering civil modifications, HVAC integration, electrical schematics, quality audits, and handover.",
                scope: "White-Glove Delivery"
              }
            ].map((discipline) => (
              <div
                key={discipline.num}
                className="group py-8 sm:py-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center hover:bg-white/60 transition-colors px-4 -mx-4"
              >
                <div className="md:col-span-1 text-meta text-[#B37D4E] font-medium">
                  {discipline.num}
                </div>
                <div className="md:col-span-4">
                  <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#181816] group-hover:text-[#B37D4E] transition-colors">
                    {discipline.name}
                  </h3>
                </div>
                <div className="md:col-span-5 text-xs sm:text-sm text-[#736E66] font-light leading-relaxed">
                  {discipline.desc}
                </div>
                <div className="md:col-span-2 flex items-center justify-between md:justify-end space-x-3 text-meta text-stone-500">
                  <span>{discipline.scope}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#181816] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION 5 — STATS & ACCREDITATION (Minimalist Rule)
          ================================================== */}
      <section className="py-20 sm:py-24 bg-[#151412] text-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {STATS.map((stat, i) => (
              <div
                key={i}
                className="border-l border-white/20 pl-6 sm:pl-8 space-y-2"
              >
                <div className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white">
                  {stat.number}
                </div>
                <div className="text-meta text-[#B37D4E]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION 6 — METHODOLOGY (4-Stage Protocol)
          ================================================== */}
      <section className="py-24 sm:py-32 bg-[#FBFBF9] border-b border-[#181816]/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-xl mb-16">
            <span className="text-meta text-[#B37D4E] block mb-2">
              04 // STUDIO METHODOLOGY
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#181816]">
              Our Architectural Protocol
            </h2>
            <p className="text-sm text-[#736E66] mt-4 leading-relaxed font-light">
              Every commission proceeds through four structured milestones, giving our patrons complete cost transparency and design precision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "PHASE 01",
                name: "Discovery & Spatial Audit",
                text: "Deep analysis of lifestyle, site orientation, daylight angles, and material preferences."
              },
              {
                step: "PHASE 02",
                name: "Concept & 3D Schematics",
                text: "Photorealistic volumetric renders, mood boards, joinery plans, and material sampling."
              },
              {
                step: "PHASE 03",
                name: "Detailing & Engineering",
                text: "Comprehensive MEP drawings, procurement schedules, timber specs, and civil approvals."
              },
              {
                step: "PHASE 04",
                name: "Turnkey Site Delivery",
                text: "Daily project management, rigorous tolerances check, deep cleaning, and white-glove handover."
              }
            ].map((phase, idx) => (
              <div
                key={phase.step}
                className="p-8 bg-white border border-[#181816]/10 hover:border-[#B37D4E] transition-colors flex flex-col justify-between min-h-[260px]"
              >
                <div>
                  <div className="text-meta text-[#B37D4E] mb-6">
                    {phase.step}
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl font-light text-[#181816] mb-3">
                    {phase.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#736E66] font-light leading-relaxed">
                    {phase.text}
                  </p>
                </div>

                <div className="pt-6 border-t border-[#181816]/8 mt-6 flex items-center space-x-2 text-[10px] font-mono text-stone-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B37D4E]" />
                  <span>PHASE MILESTONE</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION 7 — PATRON REFLECTIONS (Editorial Testimonials)
          ================================================== */}
      <section className="py-24 sm:py-32 bg-[#F4F1EB] border-b border-[#181816]/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 pb-6 border-b border-[#181816]/10 gap-4">
            <div>
              <span className="text-meta text-[#B37D4E] block mb-2">
                05 // PATRON REFLECTIONS
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#181816]">
                Words From Our Clients
              </h2>
            </div>
            <span className="text-meta text-stone-400">
              VERIFIED RESIDENCES
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((item) => (
              <div
                key={item.id}
                className="p-8 sm:p-10 bg-white border border-[#181816]/10 flex flex-col justify-between min-h-[290px] shadow-[0_4px_20px_rgba(0,0,0,0.02)]"
              >
                <div className="space-y-4">
                  <div className="text-[#B37D4E] font-serif text-4xl leading-none">“</div>
                  <p className="font-serif text-lg sm:text-xl text-stone-800 font-light italic leading-relaxed">
                    {item.quote}
                  </p>
                </div>

                <div className="pt-6 border-t border-[#181816]/10 mt-6">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#181816]">
                    — {item.author}
                  </h4>
                  <p className="text-[11px] text-[#736E66] font-mono mt-0.5">
                    {item.role} • {item.project}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION 8 — ATELIER CONSULTATION (Closing Split Panel)
          ================================================== */}
      <section className="py-24 sm:py-36 bg-[#151412] text-white relative overflow-hidden">
        {/* Ambient subtle light wash */}
        <div 
          className="absolute inset-0 opacity-40 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at 80% 20%, rgba(179, 125, 78, 0.25), transparent 60%)'
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 text-center space-y-8">
          <span className="text-meta text-[#B37D4E] block">
            06 // INITIATE COMMISSION
          </span>

          <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light text-white leading-tight">
            Let's design a space{' '}
            <span className="italic font-normal text-[#D6C7B2]">worth coming home to.</span>
          </h2>

          <p className="text-sm sm:text-base text-stone-300 font-light max-w-xl mx-auto leading-relaxed">
            Whether building an architectural villa or redesigning a luxury apartment in South India, our studio welcomes in-person consultations by appointment.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={onOpenConsultation}
              className="w-full sm:w-auto px-9 py-4 bg-[#B37D4E] hover:bg-white hover:text-[#181816] text-white text-meta transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Schedule Atelier Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="https://wa.me/919000000000?text=Hi%20Verra%20Interiors%2C%20I'd%20like%20to%20discuss%20an%20interior%20design%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 border border-white/30 hover:border-emerald-400 text-white hover:text-emerald-300 text-meta transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Direct WhatsApp Inquiry</span>
            </a>
          </div>

          <div className="pt-8 text-meta text-stone-500">
            COIMBATORE ATELIER • CHENNAI • BANGALORE • ON-SITE CONSULTATIONS
          </div>
        </div>
      </section>
    </div>
  );
}
