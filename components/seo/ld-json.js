// components/seo/JsonLd.js

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;

const LOGO_URL = `${SITE_URL}/images/logo/paradigm%20full%20logo.png`;


/* =========================================================
   COMPANY SERVICES
========================================================= */

const services = [
    {
        name: "Event Consultancy & Management",
        url: `${SITE_URL}/services/event-consultancy-management/`,
        description:
            "Event consultancy and management services including event concept creation, venue scouting, event setup, planning, registration, safety, security and post-event reporting.",
        highlights: [
            "Event Concept Creation",
            "Venue Scouting & Booking",
            "Event Setup, Decoration & Planning",
            "Event Timeline Planning",
            "Crowd Management & Registration",
            "Safety and Security Planning",
            "Covid-19 Protocols",
            "Post Event Reports",
        ],
    },

    {
        name: "Public Relations & VIP Management",
        url: `${SITE_URL}/services/public-relations-vip-management/`,
        description:
            "Public relations, VIP management and protocol coordination services for corporate, governmental and international events.",
        highlights: [
            "Permits & Governmental Clearance",
            "VIP Management & Protocol Coordination",
            "Public Relations",
            "Ushering",
        ],
    },

    {
        name: "Audio Visual Solutions",
        url: `${SITE_URL}/services/audio-visual-solutions/`,
        description:
            "Professional audio visual solutions including lighting, sound systems, video conferencing, LED screens, projection and live streaming systems.",
        highlights: [
            "Light Systems",
            "Beam Lights",
            "Up & Backlights",
            "Arm Lights",
            "Layered Lighting",
            "LED Color Wash",
            "Stage Lighting",
            "Spotlight and Moving Heads",
            "Laser Lighting",
            "Projection Mapping",
            "Sound Systems",
            "Column Speakers",
            "Line Array Speakers",
            "Low-Profile Stage Sound Monitors",
            "Digital Sound Mixers",
            "Digital Wireless Head",
            "Hand and Conference Mics",
            "IP-based Video Conferencing Systems",
            "LED Screen Modules & Control Processors",
            "Touch Registration & Info Monitors",
            "Projectors, Laptops & Foldable Projector Screens",
            "Wired and Wireless Live Streaming Solutions",
        ],
    },

    {
        name: "Interpretation & Translation Services",
        url: `${SITE_URL}/services/interpretation-translation-services/`,
        description:
            "Professional interpretation and translation services including simultaneous interpretation, consecutive interpretation, remote simultaneous interpretation and document translation.",
        highlights: [
            "Interpretation Booths (Single & Multiple)",
            "IR Transmission Interpretation Systems",
            "Multichannel IR Headsets",
            "Simultaneous Interpretation Solutions",
            "Consecutive Interpretation Solutions",
            "Remote Simultaneous Interpretation (RSI)",
            "Wireless Digital Tour Guide System",
            "Certified Multilingual Interpreters",
            "Documents Translation Services",
        ],
    },

    {
        name: "Technical Support",
        url: `${SITE_URL}/services/technical-support/`,
        description:
            "Technical support solutions for virtual and hybrid events, live streaming, internet connectivity, IT systems and event registration.",
        highlights: [
            "Virtual & Hybrid Solutions",
            "Live Streaming & Live Feed Solutions",
            "Internet Solutions",
            "IT Solutions",
            "Registration & Information Systems",
        ],
    },

    {
        name: "Documentation & Media Production",
        url: `${SITE_URL}/services/documentation-media-production/`,
        description:
            "Professional event documentation and media production including photography, videography, editing, post-production and mobile studio setup.",
        highlights: [
            "Videography & Photography",
            "Editing and Post-Production",
            "Interview & Mobile Studio Setup",
        ],
    },

    {
        name: "Travel, Transportation & Accommodation",
        url: `${SITE_URL}/services/travel-transportation-accommodation/`,
        description:
            "Integrated travel, transportation and accommodation services for corporate, governmental and international events.",
        highlights: [
            "Domestic & International Flight Booking",
            "Airport Pick-up, Meet & Greet",
            "Visa Services & Logistics Support",
            "COVID-19 Certified Testing",
            "Transportation & Chauffeur Services",
            "Limousine, Minibuses, Coach & Shuttle Buses",
            "Accommodation & Hotel Reservations",
            "Sightseeing & Tour Guides Services",
        ],
    },

    {
        name: "Graphic Design",
        url: `${SITE_URL}/services/graphic-design/`,
        description:
            "Creative graphic design and event visual identity services including venue and stage setup, visibility materials, brochures, printing and event branding.",
        highlights: [
            "Venue & Stage Setup",
            "Visibility Material",
            "Brochures & Printing",
            "Event Branding",
        ],
    },

    {
        name: "Branding, Production & Printing",
        url: `${SITE_URL}/services/branding-production-printing/`,
        description:
            "Event branding, production and printing services covering backdrops, exhibition booths, stage branding, publications, giveaways, mockups and roadshows.",
        highlights: [
            "Backdrops, Roll-ups & Banners",
            "Exhibition Booths",
            "Stage & LED Screen Branding",
            "Event Publications & Agenda",
            "Swag Bags & Giveaway",
            "2D & 3D Mockups",
            "Mobile Tours & Roadshows",
            "Temporary Partitions & Separator",
        ],
    },

    {
        name: "Catering",
        url: `${SITE_URL}/services/catering/`,
        description:
            "Professional catering services for corporate, social, indoor and outdoor events.",
        highlights: [
            "Indoor & Outdoor Catering",
            "Restaurant & Hotel Catering",
            "Corporate & Social Events Catering",
            "Buffet, Set Menu & Pass Around Catering",
        ],
    },

    {
        name: "Equipment",
        url: `${SITE_URL}/services/equipment`,
        description:
            "Professional event equipment including microphones, speakers, mixers, conference systems, stage equipment and audio distribution systems.",
        highlights: [
            "Digital Wireless Microphone - DUAL RECEIVER",
            "Digital Wireless Microphone - HAND Wireless Microphone",
            "Antenna Power Distribution",
            "BP TRANSMITTER",
            "DUAL DOCKING CHARGER",
            "Wireless Microphone - Hand",
            "Wireless Microphone - Head",
            "MIC DINAMIC",
            "Microphone Podium",
            "Digital Wireless Microphone - Head Set",
            "ACTIVE DIRECTIONAL ANTENNA",
            "Earset Headworn Microphone",
            "Conference Microphone",
            "Monitor Speakers",
            "Column Loudspeaker",
            "Line Array",
            "Digital Discussion System",
            "Discussion Device with Touchscreen",
            "Wireless Conference Microphone",
            "Analog Mixer Sound",
            "Digital Mixer Sound",
            "Stage Box",
            "Audio Distribution Splitter",
            "Sound Mixer",
            "Headphone Amplifiers",
            "Sound Card",
            "DI Boxes",
            "Digital Stagebox Mixers",
            "Stage Monitor Speakers",
            "Digital Mixer",
            "Speaker Stand",
            "Sound Recording",
        ],
    },
];


/* =========================================================
   CONTACT INFORMATION
========================================================= */

const contactPoints = [
    {
        "@type": "ContactPoint",
        telephone: "+20 2 37489149",
        email: "info@paradigm-eg.com",
        contactType: "customer service",
        areaServed: "Egypt",
        availableLanguage: ["English", "Arabic"],
    },

    {
        "@type": "ContactPoint",
        telephone: [
            "+971 588966041",
            "+971 589404624",
        ],
        email: "info@paradigm-ae.com",
        contactType: "customer service",
        areaServed: "United Arab Emirates",
        availableLanguage: ["English", "Arabic"],
    },

    {
        "@type": "ContactPoint",
        telephone: "+966 509974859",
        email: "info@paradigm-sa.com",
        contactType: "customer service",
        areaServed: "Saudi Arabia",
        availableLanguage: ["English", "Arabic"],
    },
];


/* =========================================================
   COMPANY LOCATIONS
========================================================= */

const locations = [
    {
        "@type": "Place",
        "@id": `${SITE_URL}/#egypt-office`,
        name: "Paradigm Capital Group - Egypt",
        address: {
            "@type": "PostalAddress",
            addressLocality: "Giza",
            addressCountry: "EG",
        },
    },

    {
        "@type": "Place",
        "@id": `${SITE_URL}/#uae-office`,
        name: "Paradigm Capital Group - UAE",
        address: {
            "@type": "PostalAddress",
            addressLocality: "Dubai",
            addressCountry: "AE",
        },
    },

    {
        "@type": "Place",
        "@id": `${SITE_URL}/#saudi-office`,
        name: "Paradigm Capital Group - Saudi Arabia",
        address: {
            "@type": "PostalAddress",
            addressLocality: "Riyadh",
            addressCountry: "SA",
        },
    },
];


/* =========================================================
   COMPANY STATISTICS
========================================================= */

const statistics = [
    {
        name: "Events",
        value: 2600,
        description: "2600+ events delivered",
    },

    {
        name: "Clients",
        value: 130,
        description: "130+ clients served",
    },

    {
        name: "Years",
        value: 14,
        description: "14 years of experience",
    },

    {
        name: "Mega Events",
        value: 160,
        description: "160 mega events delivered",
    },
];


/* =========================================================
   PORTFOLIO / PREVIOUS WORK
========================================================= */

const portfolio = [
    {
        name: "Egypt’s Narrative for Economic Development",
        url: `${SITE_URL}/portfolio/egypts-narrative-for-economic-development/`,
        date: "2025-09-07",
        location: "St Regis, New Capital",
        description:
            "As part of Egypt’s commitment to sustainable economic growth and strategic development, this initiative gathered leaders to align vision with execution and discuss key national priorities. Paradigm Capital Group proudly executed the full event setup, providing a seamless environment for presentations, panels, and stakeholder engagement. The event convened government officials, international partners, and business leaders to highlight actionable strategies and collaborative solutions that advance Egypt’s economic development on a global scale.",
    },

    {
        name: "Egypt – Spain Business Forum",
        url: `${SITE_URL}/portfolio/egypt-spain-business-forum/`,
        date: "2025-09-18",
        location: "St Regis, Cairo",
        description:
            "The Egypt–Spain Business Forum brought together ministers, business leaders, investors, and key international stakeholders to explore opportunities across trade, investment, innovation, and economic cooperation between Egypt and Spain. Paradigm Capital Group delivered the full event setup and management, creating a seamless environment for official sessions, panel discussions, meetings, and networking.",
    },

    {
        name: "Egypt–Türkiye Business Forum",
        url: `${SITE_URL}/portfolio/egypt-turkiye-business-forum/`,
        date: "2026-02-04",
        location: "Al Masa Hotel Nasr City",
        description:
            "The Egypt–Türkiye Business Forum brought together senior government officials, ministers, business leaders, investors, and key stakeholders from both countries to explore opportunities for trade, investment, and bilateral economic cooperation. Paradigm Capital Group delivered the complete event setup.",
    },

    {
        name: "Egypt – France Business Forum",
        url: `${SITE_URL}/portfolio/egypt-france-business-forum/`,
        date: "2025-04-07",
        location: "Al Masa Hotel Nasr City",
        description:
            "The Egypt–France Business Forum brought together senior government officials, business leaders, investors, and key stakeholders from Egypt and France to strengthen bilateral economic relations and explore opportunities for trade, investment, and strategic cooperation. Paradigm Capital Group delivered the full event setup.",
    },

    {
        name: "Egypt-France Business Forum: Economic – Opportunities for Strategic Partnership",
        url: `${SITE_URL}/portfolio/egypt-france-business-forum-economic-opportunities-for-strategic-partnership/`,
        date: "2025-04-07",
        location: "Al Masa Hotel Nasr City, Cairo",
        description:
            "Held at Almasa Hotel in the presence of senior Egyptian and French officials, the Egypt–France Business Forum brought together government officials, international business leaders, and key stakeholders to explore economic cooperation. Paradigm Capital Group led the complete production of the event, managing staging, audiovisual systems, transportation logistics, and media coverage.",
    },

    {
        name: "The National Initiative for Smart Green Projects",
        url: `${SITE_URL}/portfolio/the-national-initiative-for-smart-green-projects/`,
        date: "2025-03-23",
        location: "The St. Regis New Capital, Cairo",
        description:
            "An initiative showcasing pioneering projects that integrate green innovation with smart technologies. Paradigm Capital Group executed the full event setup, providing a seamless environment for presentations, exhibitions, and stakeholder engagement.",
    },

    {
        name: "2nd Ministerial Conference Khartoum Process",
        url: `${SITE_URL}/portfolio/2nd-ministerial-conference-khartoum-process/`,
        date: "2025-04-09",
        location: "ALMASA Capital, New Administrative Capital",
        description:
            "A high-level ministerial conference bringing together African and European representatives to strengthen dialogue and cooperation on migration and mobility. Paradigm Capital Group delivered the full technical and logistical production.",
    },

    {
        name: "International Conference on Management and Innovation in Social Security",
        url: `${SITE_URL}/portfolio/international-conference-on-management-and-innovation-in-social-security/`,
        date: "2025-02-11",
        location: "Nile Ritz Carlton, Cairo",
        description:
            "A high-level conference bringing together experts in social security to discuss governance, sustainability, and innovation. Paradigm Capital Group led the full-scale production of the event.",
    },

    {
        name: "Annual Green Growth Conference (UNDP)",
        url: `${SITE_URL}/portfolio/annual-green-growth-conference-undp/`,
        date: "2025-02-02",
        location: "Four Seasons, Cairo",
        description:
            "The Annual Green Growth Conference served as a platform for discussing sustainable development, climate innovation, and economic resilience. Paradigm Capital Group delivered end-to-end event management.",
    },

    {
        name: "United Nations Interregional Crime and Research Institute - 1st Regional Workshop Transparency",
        url: `${SITE_URL}/portfolio/united-nations-interregional-crime-and-research-institute-1st-regional-workshop-transparency/`,
        date: "2025-02-11",
        location: "Steigenberger Nile Palace, Luxor",
        description:
            "A regional workshop focused on advancing transparency, accountability, and governance practices. Paradigm Capital Group provided full event setup, technical production, interpretation systems, and on-ground coordination.",
    },

    {
        name: "Raya Kick-Off 2025",
        url: `${SITE_URL}/portfolio/raya-kick-off-2025/`,
        date: "2025-02-27",
        location: "Nile Ritz Carlton, Cairo",
        description:
            "Raya Holding's silver anniversary event celebrating 25 years of growth, innovation, and impact. Paradigm Capital Group managed the event experience from concept to execution.",
    },

    {
        name: "Aswan Forum 2024",
        url: `${SITE_URL}/portfolio/aswan-forum-2024/`,
        date: "2024",
        location: "Egypt",
        client: "Aswan Forum",
    },

    {
        name: "Global Congress On Population, Health And Human Development 2024",
        url: `${SITE_URL}/portfolio/global-congress-on-population-health-and-human-development-2024/`,
        date: "2024",
        location: "Egypt",
        client: "United Nations",
    },

    {
        name: "Enhancing Cooperation between Al Ahly Sporting Club and UNICEF to Support Every Child and Youth in Egypt",
        url: `${SITE_URL}/portfolio/unicef-with-ahly-fc/`,
        date: "2024",
        location: "Egypt",
        client: "UNICEF",
    },

    {
        name: "King’s Birthday Celebration in the British Embassy",
        url: `${SITE_URL}/portfolio/british-embassy/`,
        date: "2024",
        location: "British Embassy, Egypt",
        client: "British Embassy",
    },

    {
        name: "The Inaugural Joint Steering Committee Meeting of the Arab Republic of Egypt & United Nations Sustainable Development Cooperation Framework 2023-2027",
        url: `${SITE_URL}/portfolio/united-nations-sustainable-developmentcooperation-frameworkarab-republic-of-egypt/`,
        date: "2024",
        location: "Egypt",
        client:
            "United Nations Sustainable Development Cooperation Framework Arab Republic of Egypt",
    },

    {
        name: "Ministry of International Cooperation",
        url: `${SITE_URL}/portfolio/ministry-of-international-cooperation/`,
        date: "2024",
        location: "Egypt",
        client: "Ministry of International Cooperation",
    },

    {
        name: "NDB Seminar in Egypt Navigating New Horizons",
        url: `${SITE_URL}/portfolio/ndb-seminar-in-egypt-navigating-new-horizons-2024/`,
        date: "2025",
        location: "Egypt",
        client: "NDB",
    },

    {
        name: "HFHI Mena Housing Forum, 2022",
        url: `${SITE_URL}/portfolio/hfhi-mena-housing-forum-2022/`,
        date: "2022",
        location: "Egypt",
        client: "HFHI",
    },

    {
        name: "UNDP Frankie the Dino Egypt Visit for COP 27",
        url: `${SITE_URL}/portfolio/undp-frankie-the-dino-egypt-visit-for-cop-27-2022/`,
        date: "2022",
        location: "Egypt",
        client: "UNDP",
    },

    {
        name: "UNICEF Art Gallery, 2022",
        url: `${SITE_URL}/portfolio/unicef-art-gallery-2022/`,
        date: "2022",
        location: "Egypt",
        client: "UNICEF",
    },

    {
        name: "Raya Info Systems Kickoff, 2023",
        url: `${SITE_URL}/portfolio/raya-info-systems-kickoff-2023/`,
        date: "2023",
        location: "Egypt",
        client: "Raya",
    },
];


/* =========================================================
   ORGANIZATION
========================================================= */

const organization = {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,

    name: "Paradigm Capital Group",
    alternateName: "Paradigm",

    url: SITE_URL,

    description:
        "Paradigm Capital Group is an event management company delivering event consultancy, public relations, audiovisual solutions, interpretation and translation, technical support, media production, travel, branding, catering, and event equipment services across Egypt and the MENA region.",

    logo: {
        "@type": "ImageObject",
        "@id": `${SITE_URL}/#logo`,
        url: LOGO_URL,
        contentUrl: LOGO_URL,
        caption: "Paradigm Capital Group",
        inLanguage: "en-US",
    },

    areaServed: [
        {
            "@type": "Country",
            name: "Egypt",
        },
        {
            "@type": "Country",
            name: "United Arab Emirates",
        },
        {
            "@type": "Country",
            name: "Saudi Arabia",
        },
        {
            "@type": "Place",
            name: "Middle East and North Africa",
        },
    ],

    location: locations,

    contactPoint: contactPoints,

    knowsAbout: services.map((service) => service.name),

    sameAs: [
        "https://www.linkedin.com/company/paradigm4events/",
        "https://www.instagram.com/paradigm_ltd_eg/",
        "https://www.facebook.com/Paradigm4events"
    ],
};


/* =========================================================
   WEBSITE
========================================================= */

const website = {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,

    url: SITE_URL,

    name: "Paradigm Capital Group",

    alternateName: "Paradigm",

    publisher: {
        "@id": `${SITE_URL}/#organization`,
    },

    inLanguage: "en-US",
};


/* =========================================================
   WEB PAGE
========================================================= */

const webpage = {
    "@type": "WebPage",
    "@id": `${SITE_URL}/#webpage`,

    url: SITE_URL,

    name: "Paradigm Capital Group",

    description:
        "Paradigm Capital Group is an event management company delivering extraordinary events and integrated event solutions across Egypt and the MENA region.",

    isPartOf: {
        "@id": `${SITE_URL}/#website`,
    },

    about: {
        "@id": `${SITE_URL}/#organization`,
    },

    primaryImageOfPage: {
        "@id": `${SITE_URL}/#logo`,
    },

    inLanguage: "en-US",
};


/* =========================================================
   STATISTICS
========================================================= */

const statisticsSchema = {
    "@type": "ItemList",
    "@id": `${SITE_URL}/#statistics`,

    name: "Paradigm Capital Group Statistics",

    itemListElement: statistics.map((stat, index) => ({
        "@type": "ListItem",

        position: index + 1,

        name: stat.name,

        description: stat.description,

        item: {
            "@type": "QuantitativeValue",
            value: stat.value,
        },
    })),
};


/* =========================================================
   SERVICES
========================================================= */

const serviceSchemas = services.map((service) => ({
    "@type": "Service",

    "@id": `${service.url}#service`,

    name: service.name,

    url: service.url,

    description: service.description,

    provider: {
        "@id": `${SITE_URL}/#organization`,
    },

    areaServed: [
        {
            "@type": "Country",
            name: "Egypt",
        },
        {
            "@type": "Country",
            name: "United Arab Emirates",
        },
        {
            "@type": "Country",
            name: "Saudi Arabia",
        },
    ],

    hasOfferCatalog: {
        "@type": "OfferCatalog",

        name: `${service.name} Services`,

        itemListElement: service.highlights.map(
            (highlight, index) => ({
                "@type": "Offer",

                position: index + 1,

                itemOffered: {
                    "@type": "Service",
                    name: highlight,
                },
            })
        ),
    },
}));


/* =========================================================
   PORTFOLIO PROJECTS
========================================================= */

const portfolioSchemas = portfolio.map((project) => {
    const event = {
        "@type": "Event",

        "@id": `${project.url}#event`,

        name: project.name,

        startDate: project.date,

        location: {
            "@type": "Place",

            name: project.location,
        },

        eventStatus:
            "https://schema.org/EventScheduled",

        eventAttendanceMode:
            "https://schema.org/OfflineEventAttendanceMode",
    };

    return {
        "@type": "CreativeWork",

        "@id": `${project.url}#work`,

        name: project.name,

        url: project.url,

        description:
            project.description ||
            `${project.name} was delivered by Paradigm Capital Group as part of its event management and production portfolio.`,

        creator: {
            "@id": `${SITE_URL}/#organization`,
        },

        publisher: {
            "@id": `${SITE_URL}/#organization`,
        },

        about: event,

        ...(project.client
            ? {
                sponsor: {
                    "@type": "Organization",
                    name: project.client,
                },
            }
            : {}),
    };
});


/* =========================================================
   FINAL JSON-LD
========================================================= */

const jsonLd = {
    "@context": "https://schema.org",

    "@graph": [
        organization,

        website,

        webpage,

        statisticsSchema,

        ...serviceSchemas,

        ...portfolioSchemas,
    ],
};


/* =========================================================
   COMPONENT
========================================================= */

export default function JsonLd() {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={ {
                __html: JSON.stringify(jsonLd),
            } }
        />
    );
}