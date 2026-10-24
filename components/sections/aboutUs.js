// "use client"
import Image from "next/image";
import Link from "next/link";
import AboutStatsSlider from "@/components/sections/aboutStatsSlider";
import NumberCounter from "../animation/counter";
import ArrowRight from "../icons/arrowRight";

const aboutStats = [
  {
    id: "experience",
    number: "32",
    label: "Years Experience",
  },
  {
    id: "awards",
    number: "64",
    label: "Award Winner",
  },
];

export default function AboutCompany() {

  const stats = [
    {
      number: "32",
      sufix: "K",
      label: "Project Completed",
      animation:"fade-right",
      animationDuration:"5000"

    },
    {
      number: "28",
      sufix: "+",
      label: "Winning Awards",
      animation:"fade-right",
      animationDuration:"2500"

    },
    {
      number: "30",
      sufix: "K",
      label: "Years Experience",
      animation:"fade-left",
      animationDuration:"2500"
 
    },
    {
      number: "89",
      sufix: "+",
      label: "Expert Members",
      animation:"fade-left",
      animationDuration:"5000"
   
    },
  ];

  return (
    <section id="#about" className="bg-bg-1 pt-[20px] pb-[20px] md:pt-[28px] md:pb-[28px] xl:pt-[100px] xl:pb-[75px]">
      <div className="container-content">
        <div className="grid grid-cols-1 items-center gap-12 md:gap-14 lg:grid-cols-12 lg:gap-10">
          {/* Left: Company information */}
          <div className="lg:col-span-7 max-lg:order-1">
            <div className="lg:pr-5">
              <div
                className="mb-10 md:mb-[60px]"
                data-aos="fade-right"
                data-aos-duration="900"
              >
                <h4 className="mb-5 text-sm font-semibold uppercase tracking-[0.12em] text-primary">
                  About Company
                </h4>

                <h2 className="max-w-[680px] text-h2 font-bold leading-[1.12] tracking-[-0.04em] text-text-primary">
                  Design That Defines
                  <br />
                  Brands and
                  <span className="text-primary">
                    {" "}
                    Inspires
                    <br />
                    Audiences
                  </span>
                </h2>
              </div>

              {/* Statistics and description */}
              <div
                className="flex flex-col items-start border-t border-border-1 pt-8 sm:pt-10 md:flex-row md:items-end md:gap-8 lg:gap-10"
                data-aos="fade-up"
                data-aos-duration="900"
                // data-aos-delay="100"
              >
                {/* Reusable statistics slider */}
                <AboutStatsSlider
                  slides={aboutStats}
                  className="mb-10 w-full md:mb-0 md:w-[260px] md:shrink-0 md:border-r md:border-border-1 md:pr-8 lg:pr-10"
                  slideClassName="min-h-[180px] pt-4"
                />

                {/* Original template copy */}
                <div
                  className="w-full max-w-[430px]"
                  data-aos="fade-up"
                  data-aos-duration="900"
                  // data-aos-delay="200"
                >
                  <p className="mb-8 text-lg leading-[1.6] text-text-body lg:mb-10 lg:text-xl">
                    businesses to make impactful, forward-looking decisions.
                    Whether you’re expanding into new
                  </p>

                  <Link
                    href="/about/"
                    className="group inline-flex items-center gap-4 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-bg-1 transition-all duration-300 hover:bg-primary-dark hover:shadow-brand"
                  >
                    <span>Discover More</span>

                    <ArrowRight className="w-4 h-4 fill-bg-1 transition-all duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right: About image */}
          <div className="lg:col-span-5 max-lg:order-0">
            <div
              className="relative  h-[420px] w-full max-w-full overflow-hidden bg-bg-2 sm:h-[480px] md:h-[280px] lg:ml-auto lg:h-[590px]"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <Image
                src="/images/home/about/About us.jpeg"
                alt="about"
                fill
                preload
                sizes="(max-width: 767px) 100vw, (max-width: 1023px) 80vw, 38vw"
                className="object-cover max-lg:w-full "
              />
            </div>
          </div>
        </div>


<section className="mt-30 bg-bg-1 relative overflow-hidden pt-12 border-t border-border-1" >
     
        <div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center"
         
        >
          {stats.map((stat, index) => (
            <div
            data-aos={stat.animation} data-aos-duration={stat.animationDuration}
              key={index}
              className="flex-col w-50 h-50 p-8 flex justify-center items-center hover:border-primary transition-all duration-800 group border-dashed rounded-full border border-border-1"
            >
              {/* Icon Placeholder */}
              {/* <div className="w-16 h-16 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-2xl group-hover:bg-primary group-hover:text-bg-1 transition-colors flex-shrink-0">
                <span className="icon-placeholder">{stat.icon}</span>
              </div> */}

              {/* Number and Label */}
              
                <NumberCounter sufix={stat.sufix} value={stat.number} tag="h3" className="text-3xl lg:text-4xl font-heading font-bold text-text-primary mb-1"/>
                <p className="text-sm text-text-muted font-heading font-medium">
                  {stat.label}
                </p>
              
            </div>
          ))}
        </div>
     
    </section>



      </div>


    </section>

  );
}


