export const PROJECTS = [
  {
    id: "casa-verde",
    slug: "casa-verde",
    title: "Casa Verde",
    number: "01",
    category: "RESIDENTIAL",
    categoryLabel: "Luxury Residence",
    location: "Coimbatore, Tamil Nadu",
    city: "Coimbatore",
    year: "2026",
    area: "2,800 sq.ft.",
    status: "Completed",
    featured: true,
    aspect: "tall", // for editorial grid variation
    heroImage: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80",
    overview: "Casa Verde explores warm minimalism through natural materials, restrained tones and carefully considered lighting. Designed for a multigenerational family in Coimbatore, the residence balances private sanctuaries with interconnected living areas open to lush garden pockets.",
    concept: "The architectural philosophy centers on 'soft brutality'—juxtaposing raw fluted travertine walls with tactile smoked white oak and acoustic micro-cement ceilings. Morning sunlight is filtered through architectural louvers, crafting ever-shifting patterns throughout the day.",
    quote: "Verra created a serene sanctuary that feels deeply connected to our roots while elevating everyday living to an art form.",
    materials: [
      { name: "Fluted Roman Travertine", finish: "Honed Natural", hex: "#D6C7B2", desc: "Wall cladding in the central double-height atrium" },
      { name: "Smoked European White Oak", finish: "Matte Wax", hex: "#7E6A53", desc: "Bespoke millwork, hidden pivot doors and master panelling" },
      { name: "Brushed Champagne Brass", finish: "Satin Oxidized", hex: "#C8A978", desc: "Custom hardware, architectural trims and light fixtures" },
      { name: "Lime Wash Plaster", finish: "Textured Mineral", hex: "#EDE8DF", desc: "Breathable wall surfaces with subtle hand-troweled depth" },
    ],
    spaces: [
      { title: "Double-Height Great Room", desc: "A 22-foot soaring living pavilion framing courtyard greens, outfitted with low-slung Italian seating and an architectural fireplace." },
      { title: "Courtyard Dining Room", desc: "Anchored by a monolithic 10-seater quarter-cut oak table under a sculptural blown-glass chandelier." },
      { title: "Master Sanctuary & Spa Suite", desc: "A peaceful suite featuring slatted wood partitions, integrated ambient cove lighting, and a freestanding stone soaking tub." },
      { title: "Bespoke Chef's Kitchen", desc: "Concealed appliance banks behind pocketing fluted oak doors, centered around an engineered quartzite prep island." },
    ],
    specs: {
      client: "Private Family Residence",
      scope: "Full Interior Architecture, Bespoke Furniture & Turnkey Execution",
      duration: "14 Months",
      leadArchitect: "Anand Sundaram",
      lightingDesign: "Studio Lux South Asia"
    },
    gallery: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    id: "the-oak-house",
    slug: "the-oak-house",
    title: "The Oak House",
    number: "02",
    category: "VILLA",
    categoryLabel: "Contemporary Villa",
    location: "Chennai, Tamil Nadu",
    city: "Chennai",
    year: "2025",
    area: "4,600 sq.ft.",
    status: "Completed",
    featured: false,
    aspect: "wide",
    heroImage: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=80",
    overview: "A coastal villa in East Coast Road, Chennai that celebrates honest timber craft and boundless spatial flow. The Oak House harmonizes Japanese minimalism with South Indian coastal breezes.",
    concept: "We selected bleached oak, textured unpolished granite, and floor-to-ceiling glass to dissolve boundaries between indoor living and the reflection water pond outside.",
    quote: "The warmth of natural oak paired with coastal sunlight has completely altered how we rest and host.",
    materials: [
      { name: "Japanese White Oak", finish: "Ultra-Matte", hex: "#C7B299", desc: "Wall panelling, custom beds, and slatted room dividers" },
      { name: "Sadahalli Grey Granite", finish: "Flamed & Water-washed", hex: "#7D8082", desc: "Internal water-court pavers and hearth surrounds" },
      { name: "Woven Paper Cord & Cane", finish: "Hand-loomed", hex: "#DFD1B8", desc: "Accent cabinetry and bespoke lounge armchairs" },
      { name: "Microtopping Concrete", finish: "Seamless Silk", hex: "#DCD8CF", desc: "Continuous flooring across ground level public zones" },
    ],
    spaces: [
      { title: "Verandah Pavilion", desc: "Deep sheltered outdoor-indoor seating sheltered from tropical rains while capturing sea cross-ventilation." },
      { title: "Minimalist Library & Den", desc: "Floor-to-ceiling oak bookshelves with an integrated reading alcove overlooking the garden." },
      { title: "Open-Plan Living & Dining", desc: "Generous unified space framing a central courtyard with an ancient frangipani tree." },
    ],
    specs: {
      client: "Senior Technology Executive",
      scope: "Architectural Remodeling & Turnkey Interior Design",
      duration: "16 Months",
      leadArchitect: "Meera Krishnan",
      lightingDesign: "Lumino Collective"
    },
    gallery: [
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    id: "studio-47",
    slug: "studio-47",
    title: "Studio 47",
    number: "03",
    category: "APARTMENT",
    categoryLabel: "Modern Apartment",
    location: "Bangalore, Karnataka",
    city: "Bangalore",
    year: "2025",
    area: "1,950 sq.ft.",
    status: "Completed",
    featured: false,
    aspect: "square",
    heroImage: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80",
    overview: "A sky-residence tailored for an art curator. Studio 47 is an exercise in restrained luxury, maximizing city skyline views with gallery-like wall planes and hidden functional storage.",
    concept: "Every partition in this apartment serves dual purposes: display surfaces for contemporary art on one side, and concealed storage walls on the other.",
    quote: "Verra transformed our apartment into a space that feels both luxurious and completely ours.",
    materials: [
      { name: "Nero Marquina Marble", finish: "Honed Velvet", hex: "#222222", desc: "Bar counter and master bathroom vanity" },
      { name: "Warm Greige Lacquer", finish: "Satin Smooth", hex: "#CCC4BA", desc: "Seamless storage walls and flush entryway systems" },
      { name: "Bouclé & Raw Linen", finish: "Textured Natural", hex: "#ECE4DA", desc: "Custom upholstery and sound-absorbing headboards" },
    ],
    spaces: [
      { title: "Art Gallery Foyer", desc: "A dramatic dark-timber vestibule that opens into the illuminated living lounge." },
      { title: "Skyline Lounge & Bar", desc: "Framing sunset views of Bangalore with a sculptural stone bar counter." },
      { title: "Compact Executive Study", desc: "A sound-insulated creative sanctuary with acoustic fabric panelling and bespoke brass shelving." },
    ],
    specs: {
      client: "Art Collector & Gallerist",
      scope: "Complete Interior Design & Curated Furniture",
      duration: "9 Months",
      leadArchitect: "Anand Sundaram",
      lightingDesign: "Verra Atelier In-House"
    },
    gallery: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502005229762-ee1b2da97ee9?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    id: "terra-office",
    slug: "terra-office",
    title: "Terra Office",
    number: "04",
    category: "COMMERCIAL",
    categoryLabel: "Corporate Workspace",
    location: "Coimbatore, Tamil Nadu",
    city: "Coimbatore",
    year: "2025",
    area: "6,200 sq.ft.",
    status: "Completed",
    featured: false,
    aspect: "wide",
    heroImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80",
    overview: "Headquarters for an eco-conscious investment firm in Coimbatore. Terra Office redefines corporate workplace design by infusing biophilic courtyard elements, acoustic warmth, and quiet luxury.",
    concept: "Moving away from cold corporate monotony, the office employs earthen terracotta tones, cork walls, and curved fluted glass that encourage collaboration without sacrificing acoustic privacy.",
    quote: "The team understood our requirements from the first meeting and delivered a workspace that feels incredibly thoughtful.",
    materials: [
      { name: "Exposed Terracotta Brick", finish: "Handmade Wire-Cut", hex: "#B85C38", desc: "Internal acoustic feature baffles and accent arches" },
      { name: "Fluted Reeded Glass", finish: "Frosted Low-Iron", hex: "#D4DFE0", desc: "Meeting room demising walls ensuring daylight penetration" },
      { name: "Natural Birch Plywood", finish: "Matte Organic Poly", hex: "#E8D8C3", desc: "Hot-desking pods, tiered amphitheater seating and lockers" },
    ],
    spaces: [
      { title: "Central Town Hall & Garden", desc: "A skylit double-height gathering zone surrounded by endemic indoor tropical palms." },
      { title: "Executive Boardroom", desc: "State-of-the-art teleconferencing chamber wrapped in acoustic fluted felt and walnut panelling." },
      { title: "Focus Work Lounges", desc: "Ergonomic micro-zones providing noise isolation for intense solo thought." },
    ],
    specs: {
      client: "Sustainable Capital Partners",
      scope: "Commercial Spatial Strategy, MEP & Turnkey Execution",
      duration: "11 Months",
      leadArchitect: "Vikram Rangarajan",
      lightingDesign: "Erco Systems"
    },
    gallery: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    id: "the-ivory-kitchen",
    slug: "the-ivory-kitchen",
    title: "The Ivory Kitchen",
    number: "05",
    category: "RESIDENTIAL",
    categoryLabel: "Luxury Kitchen",
    location: "Chennai, Tamil Nadu",
    city: "Chennai",
    year: "2024",
    area: "850 sq.ft.",
    status: "Completed",
    featured: false,
    aspect: "square",
    heroImage: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1600&q=80",
    overview: "A culinary showcase created for an enthusiastic home chef. Seamless ivory quartzite, brushed nickel hardware, and concealed spice kitchens make this both an entertaining stage and a high-performance workspace.",
    concept: "We created a distinct duality: an immaculate, front-facing show kitchen featuring Taj Mahal quartzite, backed by a fully enclosed heavy-cooking pantry outfitted with commercial-grade ventilation.",
    quote: "Every detail was handled beautifully, from the material selection to the final installation.",
    materials: [
      { name: "Taj Mahal Quartzite", finish: "Leathered Suede", hex: "#DDD5C7", desc: "Waterfall island and book-matched splashback" },
      { name: "Warm Off-White Lacquer", finish: "Anti-Fingerprint Matte", hex: "#F3EFE9", desc: "Custom cabinetry with concealed touch-to-open servo systems" },
      { name: "Warm Walnut Accents", finish: "Oil Finished", hex: "#634832", desc: "Breakfast bar cantilever and open display niches" },
    ],
    spaces: [
      { title: "Center Island Stage", desc: "A 14-foot monolithic prep and breakfast counter equipped with flush induction cooking." },
      { title: "Concealed Scullery", desc: "Dedicated wet kitchen with heavy-duty induction hobs, deep sink basins, and pantry refrigeration." },
      { title: "Temperature-Controlled Wine Display", desc: "Custom frameless glass wine tower holding 240 curated bottles at dual climate zones." },
    ],
    specs: {
      client: "Private Gastronomy Enthusiast",
      scope: "Kitchen Architecture, Custom Cabinetry & Appliance Integration",
      duration: "6 Months",
      leadArchitect: "Meera Krishnan",
      lightingDesign: "Bega Architectural"
    },
    gallery: [
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    id: "atria-residence",
    slug: "atria-residence",
    title: "Atria Residence",
    number: "06",
    category: "APARTMENT",
    categoryLabel: "Modern Home",
    location: "Bangalore, Karnataka",
    city: "Bangalore",
    year: "2024",
    area: "3,400 sq.ft.",
    status: "Completed",
    featured: false,
    aspect: "tall",
    heroImage: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80",
    overview: "Located in central Bangalore, Atria Residence reflects an ethos of quiet sophistication. Sculptural lighting, bespoke furniture crafted from reclaimed teak, and floor-to-ceiling glass open out to mature eucalyptus canopies.",
    concept: "Light is treated as a physical material. Deep window reveals, recessed indirect linear coves, and textured plaster work sculpt soft shadows that transition as dusk approaches.",
    quote: "Verra's restraint is their superpower. They know what to leave out just as much as what to build in.",
    materials: [
      { name: "Reclaimed Chettinad Teak", finish: "Hand-Rubbed Linseed", hex: "#7A5230", desc: "Dining table, entryway console, and master bed frame" },
      { name: "Kota Stone Flooring", finish: "River-Washed Matte", hex: "#8A9488", desc: "Cool, tactile flagstones keeping the home naturally temperate" },
      { name: "Linen & Jute Fabrics", finish: "Raw Unbleached", hex: "#E3DAC9", desc: "Full-height motorized acoustic drapery" },
    ],
    spaces: [
      { title: "Light-Filled Living Room", desc: "Framed by continuous glass walls and anchored by an oversized linen sectional." },
      { title: "Meditation & Tea Pavilion", desc: "A quiet timber-clad corner overlooking rain trees, dedicated to morning reflection." },
      { title: "Private Guest Suite", desc: "Ensuite bedroom styled with regional South Indian handloom throws and muted stone vanities." },
    ],
    specs: {
      client: "Architect & Author Duo",
      scope: "Full Interior Architecture, Sourcing & Styling",
      duration: "12 Months",
      leadArchitect: "Anand Sundaram",
      lightingDesign: "Verra Studio"
    },
    gallery: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    id: "solarium-villa",
    slug: "solarium-villa",
    title: "The Solarium Villa",
    number: "07",
    category: "VILLA",
    categoryLabel: "Architectural Villa",
    location: "Coimbatore, Tamil Nadu",
    city: "Coimbatore",
    year: "2026",
    area: "5,100 sq.ft.",
    status: "Completed",
    featured: false,
    aspect: "wide",
    heroImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80",
    overview: "Set against the Nilgiri foothills on the outskirts of Coimbatore, this sprawling villa weaves panoramic glass walls with earthy limestone and tranquil water cascades.",
    concept: "An inward-looking courtyard typology modernized with cantilevered roofs, geothermal cooling integration, and organic earth plaster.",
    quote: "Living here feels like staying at an ultra-exclusive resort tailored specifically for our family.",
    materials: [
      { name: "Beige Limestone", finish: "Split-Face & Honed", hex: "#D9D0C1", desc: "Interior courtyard accent walls" },
      { name: "Smoked Elm Wood", finish: "Matte Lacquer", hex: "#614E3F", desc: "Custom architectural doors and cabinetry" },
    ],
    spaces: [
      { title: "Grand Atrium", desc: "Open sky court with floating stairs over an indoor water body." },
      { title: "Terrace Sunset Lounge", desc: "Outdoor living area framing Western Ghats sunsets." }
    ],
    specs: {
      client: "Industrialist Family",
      scope: "Turnkey Architecture & Interior Fit-out",
      duration: "18 Months",
      leadArchitect: "Vikram Rangarajan",
      lightingDesign: "Studio Lux South Asia"
    },
    gallery: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    id: "kanso-cafe",
    slug: "kanso-cafe",
    title: "Kanso Cafe & Roastery",
    number: "08",
    category: "COMMERCIAL",
    categoryLabel: "Boutique Hospitality",
    location: "Coimbatore, Tamil Nadu",
    city: "Coimbatore",
    year: "2025",
    area: "2,200 sq.ft.",
    status: "Completed",
    featured: false,
    aspect: "square",
    heroImage: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1600&q=80",
    overview: "An artisanal coffee roastery located in RS Puram, Coimbatore. Kanso blends brutalist poured concrete counters with warm clay tiles and natural woven cane seating.",
    concept: "Stripping away all superfluous ornamentation to celebrate the ritual of coffee making in an acoustically balanced, contemplative volume.",
    quote: "Verra understood how design directly impacts customer flow, dwell time, and our coffee brand narrative.",
    materials: [
      { name: "Cast In-Situ Concrete", finish: "Polished Terrazzo Edge", hex: "#9E9E9C", desc: "Continuous barista service counter" },
      { name: "Handmade Terracotta Tiles", finish: "Raw Unglazed", hex: "#B85C38", desc: "Perimeter banquet bases and planter beds" },
    ],
    spaces: [
      { title: "Central Pour-Over Bar", desc: "Low-height interaction island allowing direct conversation between barista and guest." },
      { title: "Sunlit Mezzanine", desc: "A cozy co-working and cupping zone bathed in north-facing diffuse light." }
    ],
    specs: {
      client: "Specialty Coffee Roasters",
      scope: "Brand Environment & Interior Execution",
      duration: "7 Months",
      leadArchitect: "Anand Sundaram",
      lightingDesign: "Lumino Collective"
    },
    gallery: [
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80"
    ]
  }
];
