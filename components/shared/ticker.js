import { getServices } from "@/api/services";

export default async function RunningText() {
  const services = await getServices(); // Fetch services from the API
console.log(services);
  // If services are fetched successfully, use them; otherwise, fallback to tickerItems
  const itemsToDisplay = services.length > 0 ? services.map(service => service.title) : [];
  return (
    <section
      className="overflow-hidden bg-primary py-[14px]"
      aria-label="Creative services ticker"
    >
      <div className="ticker-pause-hover">
        <div
          className="animate-ticker-Normal flex w-max"
          style={{ animationDuration: "35s" }}
        >
          {[0, 1].map((copy) => (
            <ul
              key={copy}
              aria-hidden={copy === 1 ? "true" : undefined}
              className="m-0 flex shrink-0 list-disc items-center gap-[95px] p-0 pr-[95px]"
            >
              {itemsToDisplay.map((item, index) => (
                <li
                  key={`${copy}-${index}`}
                  className="relative shrink-0 whitespace-nowrap pr-[60px] font-heading text-[clamp(1.5rem,3vw,2.5rem)] font-semibold uppercase leading-none tracking-tight text-bg-1 after:absolute after:right-0 after:top-1/2 after:h-[29px] after:w-[29px] "
                >
                  {item}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}