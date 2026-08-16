import TeamMemberSection from '@/components/sections/teamMemberSection'
import { SEO } from '@/data/SEO';
import { teamData } from '@/data/team';
import React from 'react'


export async function generateMetadata({ params }) {
    const { requestTitle } = await params;
    const teamSeo = SEO.team(teamData[requestTitle].name,teamData[requestTitle].bio,teamData[requestTitle].photo,requestTitle);

    // const serviceTitle = decodeURIComponent(title);

    return {
      title: teamSeo.title,
      
      description:teamSeo.description,

      keywords: teamSeo.keywords,

      authors: [
          {
              name: teamSeo.fullTitle,
          },
      ],

      creator: teamSeo.fullTitle,

      applicationName: teamSeo.fullTitle,

      icons: {
          icon: teamSeo.icon,
      },

      openGraph: {
          title: teamSeo.title + " - " + teamSeo.fullTitle,
          description: teamSeo.description,

          url: teamSeo.siteUrl,

          siteName: teamSeo.fullTitle,

          images: [
              {
                  url: teamSeo.image,
                  width: 230,
                  height: 80,
                  alt: teamSeo.fullTitle,
              },
          ],

          locale: teamSeo.locale,
          type: teamSeo.type,
      },

      twitter: {
          card: "summary_large_image",
          title: teamSeo.title + " - " + teamSeo.fullTitle,
          description:teamSeo.description,

          images: [teamSeo.image],

          label1: "Written by",
          data1: "admin",
          label2: "Time to read",
          data2: "4 minute",

          creator: "@Paradigm",//need real paradigm twitter account
      },

      alternates: {
          canonical: teamSeo.siteUrl,
          // languages: {
          //     en: "/en",
          //     ar: "/ar",
          // },
      },
  }
}



async function TeamMember({ params }){
  const { requestTitle } = await params;
  return (
    <main className="relative w-full overflow-hidden">
        <TeamMemberSection TeamRequestTitle={requestTitle}/>
    </main>
  )
}

export default TeamMember