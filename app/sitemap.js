const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL;

export default function sitemap() {
    return [
        // Main pages
        {
            url: `${BASE_URL}/`,
            lastModified: new Date(),
        },
        {
            url: `${BASE_URL}/our-story/`,
            lastModified: new Date(),
        },
        {
            url: `${BASE_URL}/our-services/`,
            lastModified: new Date(),
        },
        {
            url: `${BASE_URL}/past-events/`,
            lastModified: new Date(),
        },
        {
            url: `${BASE_URL}/csr/`,
            lastModified: new Date(),
        },
        {
            url: `${BASE_URL}/contacts/`,
            lastModified: new Date(),
        },
        {
            url: `${BASE_URL}/careers/`,
            lastModified: new Date(),
        },

        // Team
        {
            url: `${BASE_URL}/team/adham-badawi/`,
            lastModified: new Date(),
        },
        {
            url: `${BASE_URL}/team/mahmoud-amer/`,
            lastModified: new Date(),
        },

        // Services
        {
            url: `${BASE_URL}/services/event-consultancy-management/`,
            lastModified: new Date(),
        },
        {
            url: `${BASE_URL}/services/public-relations-vip-management/`,
            lastModified: new Date(),
        },
        {
            url: `${BASE_URL}/services/audio-visual-solutions/`,
            lastModified: new Date(),
        },
        {
            url: `${BASE_URL}/services/interpretation-translation-services/`,
            lastModified: new Date(),
        },
        {
            url: `${BASE_URL}/services/technical-support/`,
            lastModified: new Date(),
        },
        {
            url: `${BASE_URL}/services/documentation-media-production/`,
            lastModified: new Date(),
        },
        {
            url: `${BASE_URL}/services/travel-transportation-accommodation/`,
            lastModified: new Date(),
        },
        {
            url: `${BASE_URL}/services/graphic-design/`,
            lastModified: new Date(),
        },
        {
            url: `${BASE_URL}/services/branding-production-printing/`,
            lastModified: new Date(),
        },
        {
            url: `${BASE_URL}/services/catering/`,
            lastModified: new Date(),
        },
        {
            url: `${BASE_URL}/services/equipment/`,
            lastModified: new Date(),
        },

        // Portfolio
        {
            url: `${BASE_URL}/portfolio/egypt-france-business-forum/`,
            lastModified: new Date(),
        },
        {
            url: `${BASE_URL}/portfolio/egypt-turkiye-business-forum/`,
            lastModified: new Date(),
        },
        {
            url: `${BASE_URL}/portfolio/egypt-spain-business-forum/`,
            lastModified: new Date(),
        },
        {
            url: `${BASE_URL}/portfolio/egypts-narrative-for-economic-development/`,
            lastModified: new Date(),
        },
        {
            url: `${BASE_URL}/portfolio/international-conference-on-management-and-innovation-in-social-security/`,
            lastModified: new Date(),
        },
        {
            url: `${BASE_URL}/portfolio/2nd-ministerial-conference-khartoum-process/`,
            lastModified: new Date(),
        },
        {
            url: `${BASE_URL}/portfolio/the-national-initiative-for-smart-green-projects/`,
            lastModified: new Date(),
        },
        {
            url: `${BASE_URL}/portfolio/egypt-france-business-forum-economic-opportunities-for-strategic-partnership/`,
            lastModified: new Date(),
        },
        {
            url: `${BASE_URL}/portfolio/raya-kick-off-2025/`,
            lastModified: new Date(),
        },
        {
            url: `${BASE_URL}/portfolio/united-nations-interregional-crime-and-research-institute-1st-regional-workshop-transparency/`,
            lastModified: new Date(),
        },
        {
            url: `${BASE_URL}/portfolio/annual-green-growth-conference-undp/`,
            lastModified: new Date(),
        },
        {
            url: `${BASE_URL}/portfolio/british-embassy/`,
            lastModified: new Date(),
        },
        {
            url: `${BASE_URL}/portfolio/unicef-with-ahly-fc/`,
            lastModified: new Date(),
        },
        {
            url: `${BASE_URL}/portfolio/global-congress-on-population-health-and-human-development-2024/`,
            lastModified: new Date(),
        },
        {
            url: `${BASE_URL}/portfolio/aswan-forum-2024/`,
            lastModified: new Date(),
        },
        {
            url: `${BASE_URL}/portfolio/ndb-seminar-in-egypt-navigating-new-horizons-2024/`,
            lastModified: new Date(),
        },
        {
            url: `${BASE_URL}/portfolio/ministry-of-international-cooperation/`,
            lastModified: new Date(),
        },
        {
            url: `${BASE_URL}/portfolio/united-nations-sustainable-developmentcooperation-frameworkarab-republic-of-egypt/`,
            lastModified: new Date(),
        },
        {
            url: `${BASE_URL}/portfolio/raya-info-systems-kickoff-2023/`,
            lastModified: new Date(),
        },
        {
            url: `${BASE_URL}/portfolio/unicef-art-gallery-2022/`,
            lastModified: new Date(),
        },
    ];
}