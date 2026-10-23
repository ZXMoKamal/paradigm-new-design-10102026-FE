import Link from "next/link";
import ProjectSlider from "../shared/projectSlider";
import { getEvents } from "@/api/events";
import ArrowRight from "../icons/arrowRight";

export default async function RecentWork() {
  const events = await getEvents();

  return (
    <section className="overflow-hidden bg-bg-1 pb-[20px] pt-[20px] md:pb-[28px] md:pt-[28px] xl:pb-[75px] xl:pt-[100px]">
      <div className="container-content">
        <div
          className="mb-10 flex flex-col justify-between gap-8 md:mb-14 md:flex-row md:items-end"
          data-aos="fade-up"
          data-aos-duration="900"
        >
          <div>
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-[0.12em] text-primary">
              Recent Work
            </h4>

            <h2 className="text-h2 font-bold leading-[1.12] tracking-[-0.04em] text-text-primary">
              We have Completed
              <br />
              <span className="text-primary">lot&apos;s of Work</span>
            </h2>
          </div>

          <Link
            href="/past-events/"
            className="w-fit group inline-flex items-center gap-4 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-bg-1 transition-all duration-300 hover:bg-primary-dark hover:shadow-brand"
          >
            <span>Discover More</span>
            <ArrowRight className="h-4 w-4 text-bg-1 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="100"
        >
        </div>
      </div>
     <ProjectSlider
  items={events}
  ariaLabel="Recent work projects"
  className="w-full"
/>
    </section>
  );
}