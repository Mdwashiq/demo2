import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight, SlidersHorizontal } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../data/projects';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const filterCategories = [
    { key: 'ALL', label: 'ALL' },
    { key: 'RESIDENTIAL', label: 'RESIDENTIAL' },
    { key: 'COMMERCIAL', label: 'COMMERCIAL' },
    { key: 'VILLA', label: 'VILLA' },
    { key: 'APARTMENT', label: 'APARTMENT' },
  ];

  const filteredProjects =
    activeFilter === 'ALL'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <div className="bg-[#FBFBF9] text-[#181816] pt-24 sm:pt-28">
      {/* ==================================================
          PROJECTS HERO
          ================================================== */}
      <section className="py-20 sm:py-28 border-b border-[#181816]/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-4xl space-y-6">
            <span className="text-xs font-mono uppercase tracking-[0.35em] text-[#7A766F] block">
              PORTFOLIO OF WORK
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light text-[#181816] leading-[1.1]">
              Selected Architectural &
              <br />
              <span className="italic">Interior Commissions.</span>
            </h1>
            <p className="text-base sm:text-xl text-stone-600 font-light max-w-2xl leading-relaxed pt-2">
              A curated collection of residences, villas, apartments, and commercial environments built across Coimbatore, Chennai, and Bangalore.
            </p>
          </div>
        </div>
      </section>

      {/* ==================================================
          FILTER BAR
          ================================================== */}
      <section className="sticky top-[73px] z-30 bg-[#FBFBF9]/95 backdrop-blur-md border-b border-[#181816]/10 py-4 transition-all">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between overflow-x-auto no-scrollbar">
          <div className="flex items-center space-x-2 sm:space-x-3">
            {filterCategories.map((cat) => {
              const isActive = activeFilter === cat.key;
              const count =
                cat.key === 'ALL'
                  ? PROJECTS.length
                  : PROJECTS.filter((p) => p.category === cat.key).length;

              return (
                <button
                  key={cat.key}
                  onClick={() => setActiveFilter(cat.key)}
                  className={`px-4 py-2 text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 relative shrink-0 ${
                    isActive
                      ? 'bg-[#181816] text-white shadow-xs'
                      : 'text-stone-600 hover:text-black bg-stone-100 hover:bg-stone-200/80'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className={`ml-2 text-[10px] font-mono ${isActive ? 'text-stone-300' : 'text-stone-400'}`}>
                    ({count})
                  </span>
                </button>
              );
            })}
          </div>

          <div className="hidden lg:flex items-center text-xs font-mono text-stone-400 uppercase tracking-widest">
            Showing {filteredProjects.length} Architectural Works
          </div>
        </div>
      </section>

      {/* ==================================================
          PROJECTS GRID WITH FRAMER MOTION ANIMATION
          ================================================== */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
          >
            <AnimatePresence>
              {filteredProjects.map((project, idx) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="group flex flex-col"
                >
                  {/* Image Card */}
                  <Link
                    to={`/projects/${project.slug}`}
                    className="relative aspect-4/5 overflow-hidden bg-stone-300 mb-5 block"
                  >
                    <img
                      src={project.heroImage}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-103"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />

                    {/* Top Badges */}
                    <div className="absolute top-4 left-4 flex items-center space-x-2">
                      <span className="bg-white/90 backdrop-blur-xs text-[#181816] text-[10px] font-mono px-2 py-1 uppercase tracking-widest">
                        {project.number}
                      </span>
                      <span className="bg-[#181816]/80 text-white text-[10px] font-mono px-2 py-1 uppercase tracking-widest">
                        {project.category}
                      </span>
                    </div>

                    {/* Hover Button */}
                    <div className="absolute bottom-4 right-4 bg-white text-[#181816] p-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </Link>

                  {/* Information Details */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs text-stone-500 font-mono">
                      <span>{project.location}</span>
                      <span>{project.year} • {project.area}</span>
                    </div>

                    <h3 className="font-serif text-2xl font-light text-[#181816] group-hover:opacity-75 transition-opacity">
                      <Link to={`/projects/${project.slug}`}>
                        {project.title}
                      </Link>
                    </h3>

                    <p className="text-xs text-stone-600 line-clamp-2 font-light leading-relaxed">
                      {project.overview}
                    </p>

                    <div className="pt-2">
                      <Link
                        to={`/projects/${project.slug}`}
                        className="inline-flex items-center space-x-1.5 text-xs uppercase tracking-wider text-[#181816] font-medium group-hover:translate-x-1 transition-transform"
                      >
                        <span>View Project Case Study</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
