
import Image from "next/image";

function SectionLabel({ children }) {
  return (
    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-primary">
      {children}
    </p>
  );
}

function ServiceHighlight({ item, index }) {
  return (
    <article
      data-aos="fade-up"
      data-aos-delay={index * 100}
      className="group relative overflow-hidden rounded-2xl border border-border-1 bg-bg-2 p-6 transition-all duration-300 hover:border-primary/60 sm:p-8"
    >
      <span className="mb-6 flex size-12 items-center justify-center rounded-full bg-primary/10 text-lg font-semibold text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-bg-1">
        {String(index + 1).padStart(2, "0")}
      </span>

      <h3 className="mb-3 text-xl font-semibold text-text-primary sm:text-2xl">
        {item.point.split("#").map((word, i) => (
          <span key={i} className="block">
            {word}
          </span>
        ))}
      </h3>

      <p className="text-base leading-7 text-text-muted">
        {item.description}
      </p>
    </article>
  );
}

function ProcessStep({ step, index }) {
  return (
    <article
      data-aos="fade-up"
      data-aos-delay={index * 100}
      className="relative border-t border-border-1 pt-6"
    >
      <span className="mb-5 block text-sm font-semibold tracking-wider text-primary">
        {String(index + 1).padStart(2, "0")}
      </span>

      <h3 className="mb-3 text-xl font-semibold text-text-primary">
        {step.title}
      </h3>

      <p className="text-sm leading-6 text-text-muted">
        {step.description}
      </p>
    </article>
  );
}

export default function ServiceDetails({
  title = "Mobile apps",
  highlightedTitle = "",
  image = "/images/services/service-details-img-1.png",
  imageAlt = "Service overview",
  introduction,
  description,
  highlights = [],
  processTitle = "Our Process",
  processSteps = [],
  approachTitle = "Solution Approach",
  approachParagraphs = [],
  supportingImages = [],
  thumb
}) {
  return (
    <section className="bg-bg-1 py-16 sm:py-20 lg:py-[120px]">
      <div className="container-content">
        {/* Main service image */}
        <div
          data-aos="fade-up"
          className="relative mb-12 aspect-[16/9] overflow-hidden rounded-2xl bg-bg-2 sm:mb-16 lg:aspect-[16/7]"
        >
          <Image
            src={image}
            alt={imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, 1320px"
            className="object-cover"
          />
        </div>

        {/* Service introduction */}
        <div className="mx-auto max-w-5xl">
          <div data-aos="fade-up"> 
            <div className="flex items-center">
              <img src={thumb} alt={imageAlt} className="w-50 h-50"/>
              <h1 className="mb-7 text-3xl font-semibold leading-tight tracking-tight text-text-primary sm:text-4xl lg:text-6xl">
                {title}{" "}
                <span className="font-normal italic text-primary">
                  {highlightedTitle}
                </span>
              </h1>
            </div>

            {introduction && (
              <p className="mb-5 text-base leading-8 text-text-body sm:text-lg">
                {introduction}
              </p>
            )}

            {description && (
              <p className="text-base leading-8 text-text-muted sm:text-lg">
                {description}
              </p>
            )}
          </div>

          {/* What we provide / service highlights */}
          {highlights.length > 0 && (
            <section className="py-16 sm:py-20">
              <div data-aos="fade-up" className="mb-9">
                <SectionLabel>Our Expertise</SectionLabel>
                <h2 className="text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
                  What We <span className="text-primary">Provide</span>
                </h2>
                <p className="mt-4 max-w-2xl leading-7 text-text-muted">
                  Explore the key capabilities and solutions included in this
                  service.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {highlights.map((item, index) => (
                  <ServiceHighlight
                    key={`${item.title}-${index}`}
                    item={item}
                    index={index}
                  />
                ))}
              </div>
            </section>
          )}

          {/* Process cards from the original template */}
          {/* {processSteps.length > 0 && (
            <section className="py-12 sm:py-16">
              <div data-aos="fade-up" className="mb-9">
                <SectionLabel>How We Work</SectionLabel>
                <h2 className="text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
                  {processTitle}
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
                {processSteps.map((step, index) => (
                  <ProcessStep
                    key={`${step.title}-${index}`}
                    step={step}
                    index={index}
                  />
                ))}
              </div>
            </section>
          )} */}

          {/* Solution approach */}
          {/* {(approachParagraphs.length > 0 || supportingImages.length > 0) && (
            <section className="pt-12 sm:pt-16">
              <div data-aos="fade-up">
                <SectionLabel>Our Approach</SectionLabel>
                <h2 className="mb-6 text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
                  {approachTitle}
                </h2>

                <div className="space-y-5">
                  {approachParagraphs.map((paragraph, index) => (
                    <p
                      key={index}
                      className="text-base leading-8 text-text-muted sm:text-lg"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {supportingImages.length > 0 && (
                <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
                  {supportingImages.map((item, index) => (
                    <div
                      key={item.src}
                      data-aos="fade-up"
                      data-aos-delay={index * 100}
                      className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-bg-2"
                    >
                      <Image
                        src={item.src}
                        alt={item.alt || ""}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 640px"
                        className="object-cover transition-transform duration-700 hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
              )}
            </section>
          )} */}
        </div>
      </div>
    </section>
  );
}
