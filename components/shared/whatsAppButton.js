'use client';

import Image from 'next/image';

export default function WhatsAppButton({
  phone,
  message = 'Hello, I would like to inquire about your services.',
}) {
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed bottom-30 right-6 z-50
        w-14 h-14 rounded-full
        shadow-lg
        flex items-center justify-center
        bg-white
        hover:scale-110 transition-transform duration-300
        overflow-hidden
      "
    >
      <img
      fetchPriority='high'
        src="/images/global/whatsapp.png" // your icon
        alt="paradigm WhatsApp phone nummber"
        width={100}
        height={100}
        className="object-cover"
      />
    </a>
  );
}