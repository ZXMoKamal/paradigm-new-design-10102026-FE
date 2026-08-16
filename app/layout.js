import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";
import WhatsAppButton from "@/components/shared/whatsAppButton";
import { SEO } from "@/data/SEO";
import JsonLd from "@/components/seo/ld-json";
import Aos from "aos";
import AosInit from "@/components/animation/AOS";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
    metadataBase: new URL(
        process.env.NEXT_PUBLIC_SITE_URL
    ),

     robots: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-video-preview": -1,
      "max-image-preview": "large",
    },

    title: {
        default: SEO.home.title,
        template: "%s-"+SEO.home.title
    },

    description:SEO.home.description,

    keywords: SEO.home.keywords,

    authors: [
        {
            name: SEO.home.fullTitle,
        },
    ],

    creator: SEO.home.fullTitle,

    applicationName: "Paradigm Company Portfolio",

    icons: {
        icon: SEO.home.icon,
    },

    openGraph: {
        title: SEO.home.fullTitle,
        description: SEO.home.description,

        url: SEO.home.siteUrl,

        siteName: "Paradigm Company Portfolio",

        images: [
            {
                url: SEO.home.image,
                width: 230,
                height: 80,
                alt: SEO.home.fullTitle,
            },
        ],

        locale: SEO.home.locale,
        type: SEO.home.type,
    },

    twitter: {
        card: "summary_large_image",
        title: SEO.home.fullTitle,
        description:SEO.home.description,

        images: [SEO.home.image],

        label1: "Written by",
        data1: "admin",
        label2: "Time to read",
        data2: "1 minute",

        creator: "@Paradigm",//need real paradigm twitter account
    },

    alternates: {
        canonical: SEO.home.siteUrl,
        // languages: {
        //     en: "/en",
        //     ar: "/ar",
        // },
    },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <JsonLd />
        <Navbar/>
      <AosInit/>
        {children}
        <WhatsAppButton phone="+201020799277"/>
        <Footer/>
        </body>
    </html>
  );
}
