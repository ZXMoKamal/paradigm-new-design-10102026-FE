// components/ServicesGrid.js

import Link from "next/link";

export default function ImagesGrid({ items = [] }) {
  return (
      <section className="m-auto w-full xl:w-[1220px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-5">
        
        {items.map((item, index) => (
          <Link key={index} href={item.href}>
            <div className="group cursor-pointer overflow-hidden transition duration-300">
              
              {/* Image Container */}
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* Title */}
              <div className="p-4 text-center">
                <h2 className="text-lg font-primary-medium">
                  {item.title}
                </h2>
              </div>

            </div>
          </Link>
        ))}

      </section>
  );
}