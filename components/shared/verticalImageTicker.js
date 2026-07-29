import Image from "next/image";

export default function VerticalImageTicker({
  images,
  speed = 20
}) {
  const duplicatedImages = [...images, ...images];

  return (
    <div className="overflow-hidden w-[330px] h-[500px] md:h-[600px] relative">
      <div
        className="flex flex-col animate-verticalTicker"
        style={{
          animationDuration: `${speed}s`,
        }}
      >
        {duplicatedImages.map((img, index) => (
          <div key={index} className="">
            {/* Use either Image or img */}
            <Image
              src={img.src}
              alt={img.alt}
              width={300}
              height={200}
              className="w-full h-auto"
            />

            {/* OR */}
            {/* <img src={img.src} alt={img.alt} className="w-full" /> */}
          </div>
        ))}
      </div>
    </div>
  );
}