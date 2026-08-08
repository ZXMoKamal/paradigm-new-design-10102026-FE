"use client"

import React from 'react'
import Facebook from "../icons/facebook";
import LinkIcon from "../icons/link";
import Mail from "../icons/mail";
import Twitter from "../icons/twitter";

function ShareButtons({title}) {


    const eventUrl =
        typeof window !== "undefined" ? window.location.href : "";
    
    
    const shareLinks = {
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${eventUrl}`,
        twitter: `https://twitter.com/intent/tweet?url=${eventUrl}`,
        mail: `mailto:?subject=${encodeURIComponent(
            title || "Event"
        )}&body=${encodeURIComponent(eventUrl)}`,
    };

    const copyLink = async () => {
        await navigator.clipboard.writeText(eventUrl);
        alert("Link copied!");
    };

  return (
      <section className="mt-6 flex flex-wrap gap-10">

          <a
              href={ shareLinks.facebook }
              target="_blank"
          >
              <Facebook className={ "w-8 h-8 fill-text-primary" } />
          </a>

          <a
              href={ shareLinks.twitter }
              target="_blank"
          >
              <Twitter className={ "w-8 h-8 fill-text-primary" } />
          </a>

          <a
              href={ shareLinks.mail }
          >
              <Mail className={ "w-8 h-8 fill-text-primary" } />
          </a>

          <button
              onClick={ copyLink }
          >
              <LinkIcon className={ "w-8 h-8 fill-text-primary" } />
          </button>
      </section>
  )
}

export default ShareButtons