import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ArrowUpRight, Maximize2, Share2, CheckCircle2 } from 'lucide-react';
import { PROJECTS } from '../data/projects';
import LightboxModal from '../components/LightboxModal';

export default function ProjectDetail({ onOpenConsultation }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Find project by slug or id, default to Casa Verde if not found
  const project =
    PROJECTS.find((p) => p.slug === id || p.id === id) || PROJECTS[0];

  // Find currentIndex and next/prev projects
  const currentIndex = PROJECTS.findIndex((p) => p.id === project.id);
  const prevProject =
    PROJECTS[(currentIndex - 1 + PROJECTS.length) % PROJECTS.length];
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];

  // Related projects (same category or next two)
  const relatedProjects = PROJECTS.filter((p) => p.id !== project.id).slice(0, 3);

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="bg-[#FBFBF9] text-[#181816] pt-24 sm:pt-28">
      {/* Lightbox for gallery photos */}
      <LightboxModal
        images={project.gallery}
        activeIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={(newIdx) => setLightboxIndex(newIdx)}
      />

      {/* ==================================================
          BACK NAVIGATION & BREADCRUMBS
          ================================================== */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-6 flex items-center justify-between border-b border-[#181816]/10 text-xs font-mono uppercase tracking-widest text-stone-500">
        <Link
          to="/projects"
          className="flex items-center space-x-2 text-[#181816] hover:opacity-70 transition-opacity"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Projects</span>
        </Link>
        <span className="hidden sm:inline">
          {project.category} • {project.location}
        </span>
      </div>

      {/* ==================================================
          PROJECT HERO HEADER
          ================================================== */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center space-x-3 text-xs font-mono uppercase tracking-[0.25em] text-[#A27B4C]">
                <span>Project {project.number}</span>
                <span>•</span>
                <span>{project.categoryLabel}</span>
              </div>
              <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light text-[#181816] leading-tight">
                {project.title}
              </h1>
            </div>

            {/* Quick Specs Pill Box */}
            <div className="lg:col-span-4 grid grid-cols-2 gap-4 bg-[#F5F3EF] p-5 border border-stone-200 text-xs font-mono">
              <div>
                <span className="text-stone-400 block mb-0.5">LOCATION</span>
                <span className="font-medium text-[#181816]">{project.city}</span>
              </div>
              <div>
                <span className="text-stone-400 block mb-0.5">AREA</span>
                <span className="font-medium text-[#181816]">{project.area}</span>
              </div>
              <div>
                <span className="text-stone-400 block mb-0.5">YEAR</span>
                <span className="font-medium text-[#181816]">{project.year}</span>
              </div>
              <div>
                <span className="text-stone-400 block mb-0.5">STATUS</span>
                <span className="font-medium text-emerald-700">{project.status}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          HERO IMAGE FULL BLEED
          ================================================== */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-16">
        <div
          onClick={() => openLightbox(0)}
          className="relative aspect-16/9 md:aspect-21/10 overflow-hidden bg-stone-200 cursor-pointer group"
        >
          <img
            src={project.heroImage}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
          />
          <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-xs text-[#181816] px-3.5 py-2 text-xs font-mono flex items-center space-x-2 opacity-90 group-hover:opacity-100 transition-opacity">
            <Maximize2 className="w-3.5 h-3.5" />
            <span>Click to View Fullscreen</span>
          </div>
        </div>
      </section>

      {/* ==================================================
          OVERVIEW & ARCHITECTURAL CONCEPT
          ================================================== */}
      <section className="py-12 border-b border-[#181816]/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Overview Left */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#7A766F] block mb-2">
                  PROJECT NARRATIVE
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-light text-[#181816]">
                  Overview
                </h2>
              </div>

              <p className="font-serif text-xl sm:text-2xl text-stone-800 font-light leading-relaxed italic">
                "{project.overview}"
              </p>

              <div className="space-y-4 text-stone-600 font-light text-base leading-relaxed pt-2">
                <h3 className="font-mono text-xs uppercase tracking-wider text-[#181816] font-semibold">
                  Design Concept & Spatial Harmony
                </h3>
                <p>{project.concept}</p>
              </div>

              {/* Client Quote Card */}
              {project.quote && (
                <div className="p-6 bg-[#F5F3EF] border-l-2 border-[#181816] my-6">
                  <p className="font-serif italic text-base text-stone-800">
                    "{project.quote}"
                  </p>
                  <p className="text-[11px] font-mono uppercase tracking-widest text-stone-500 mt-2">
                    — Resident Review
                  </p>
                </div>
              )}
            </div>

            {/* Project Specifications Right */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white border border-stone-200 p-8 space-y-6">
                <h3 className="font-serif text-2xl font-light text-[#181816] border-b border-stone-200 pb-4">
                  Project Details
                </h3>

                <div className="space-y-4 text-xs font-mono">
                  <div className="flex justify-between pb-2 border-b border-stone-100">
                    <span className="text-stone-400">TYPE</span>
                    <span className="font-medium text-[#181816]">{project.categoryLabel}</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-stone-100">
                    <span className="text-stone-400">LOCATION</span>
                    <span className="font-medium text-[#181816]">{project.location}</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-stone-100">
                    <span className="text-stone-400">TOTAL BUILT AREA</span>
                    <span className="font-medium text-[#181816]">{project.area}</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-stone-100">
                    <span className="text-stone-400">COMPLETION</span>
                    <span className="font-medium text-[#181816]">{project.year}</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-stone-100">
                    <span className="text-stone-400">STATUS</span>
                    <span className="font-medium text-emerald-700">{project.status}</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-stone-100">
                    <span className="text-stone-400">LEAD ARCHITECT</span>
                    <span className="font-medium text-[#181816]">{project.specs.leadArchitect}</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-stone-100">
                    <span className="text-stone-400">DURATION</span>
                    <span className="font-medium text-[#181816]">{project.specs.duration}</span>
                  </div>
                  <div className="pt-2">
                    <span className="text-stone-400 block mb-1">COMMISSION SCOPE</span>
                    <span className="font-sans text-stone-700 font-normal leading-relaxed block">
                      {project.specs.scope}
                    </span>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    onClick={onOpenConsultation}
                    className="w-full py-3.5 bg-[#181816] hover:bg-black text-white text-xs uppercase tracking-[0.2em] font-medium transition-colors"
                  >
                    Inquire About Similar Design
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          MATERIALS & PALETTES
          ================================================== */}
      {project.materials && project.materials.length > 0 && (
        <section className="py-20 sm:py-28 bg-[#F5F3EF] border-b border-[#181816]/10">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="max-w-xl mb-12">
              <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#7A766F] block mb-2">
                MATERIAL INTEGRITY
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-light text-[#181816]">
                Tactile Material Palette
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 mt-2 font-light">
                Carefully curated finishes that age gracefully under natural South Indian illumination.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {project.materials.map((mat, i) => (
                <div
                  key={i}
                  className="p-6 bg-white border border-stone-200 space-y-4 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div
                      className="w-full h-16 border border-stone-200 shadow-inner"
                      style={{ backgroundColor: mat.hex }}
                    />
                    <div>
                      <h4 className="font-serif text-lg text-[#181816] font-medium">
                        {mat.name}
                      </h4>
                      <p className="text-[11px] font-mono uppercase tracking-wider text-[#A27B4C]">
                        {mat.finish}
                      </p>
                    </div>
                  </div>
                  <p className="text-xs text-stone-600 font-light leading-relaxed pt-2 border-t border-stone-100">
                    {mat.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ==================================================
          SPATIAL ZONES & PROGRAM
          ================================================== */}
      {project.spaces && project.spaces.length > 0 && (
        <section className="py-20 sm:py-28 border-b border-[#181816]/10">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="max-w-xl mb-12">
              <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#7A766F] block mb-2">
                SPATIAL DISTRIBUTION
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-light text-[#181816]">
                Program & Key Spaces
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.spaces.map((sp, idx) => (
                <div
                  key={idx}
                  className="p-8 bg-white border border-stone-200/80 space-y-3"
                >
                  <div className="flex items-center space-x-3">
                    <span className="font-mono text-xs font-semibold text-stone-400">
                      0{idx + 1}
                    </span>
                    <h4 className="font-serif text-xl sm:text-2xl text-[#181816]">
                      {sp.title}
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed pl-7">
                    {sp.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ==================================================
          LARGE IMAGE GALLERY WITH LIGHTBOX
          ================================================== */}
      <section className="py-20 sm:py-28 bg-[#181816] text-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 pb-6 border-b border-white/10 gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.3em] text-stone-400 block mb-2">
                PHOTOGRAPHIC DOCUMENTATION
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-light text-white">
                Visual Gallery
              </h2>
            </div>
            <span className="text-xs font-mono text-stone-400 uppercase tracking-widest">
              Click Any Image To Expand
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.gallery.map((imgUrl, idx) => (
              <div
                key={idx}
                onClick={() => openLightbox(idx)}
                className="group relative aspect-4/3 overflow-hidden bg-stone-900 cursor-pointer"
              >
                <img
                  src={imgUrl}
                  alt={`${project.title} gallery ${idx + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                <div className="absolute bottom-4 right-4 bg-white/90 text-[#181816] p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================
          NEXT / PREV PROJECT PAGINATION
          ================================================== */}
      <section className="py-16 border-b border-[#181816]/10 bg-[#F5F3EF]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Prev */}
            <Link
              to={`/projects/${prevProject.slug}`}
              className="group p-6 bg-white border border-stone-200 flex items-center space-x-6 hover:border-[#181816] transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-stone-400 group-hover:text-black group-hover:-translate-x-1 transition-transform" />
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-stone-400 block">
                  Previous Project
                </span>
                <span className="font-serif text-xl sm:text-2xl text-[#181816]">
                  {prevProject.title}
                </span>
              </div>
            </Link>

            {/* Next */}
            <Link
              to={`/projects/${nextProject.slug}`}
              className="group p-6 bg-white border border-stone-200 flex items-center justify-between hover:border-[#181816] transition-colors"
            >
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-stone-400 block">
                  Next Project
                </span>
                <span className="font-serif text-xl sm:text-2xl text-[#181816]">
                  {nextProject.title}
                </span>
              </div>
              <ArrowRight className="w-5 h-5 text-stone-400 group-hover:text-black group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ==================================================
          RELATED PROJECTS
          ================================================== */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between mb-12 pb-4 border-b border-[#181816]/10">
            <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#181816]">
              Other Selected Projects
            </h3>
            <Link
              to="/projects"
              className="text-xs uppercase font-mono tracking-widest text-stone-500 hover:text-black"
            >
              View Full Portfolio →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProjects.map((rel) => (
              <Link
                key={rel.id}
                to={`/projects/${rel.slug}`}
                className="group space-y-3"
              >
                <div className="aspect-4/3 overflow-hidden bg-stone-200">
                  <img
                    src={rel.heroImage}
                    alt={rel.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                  />
                </div>
                <div className="flex justify-between text-xs font-mono text-stone-400">
                  <span>{rel.categoryLabel}</span>
                  <span>{rel.city}</span>
                </div>
                <h4 className="font-serif text-xl font-light text-[#181816] group-hover:opacity-75 transition-opacity">
                  {rel.title}
                </h4>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
