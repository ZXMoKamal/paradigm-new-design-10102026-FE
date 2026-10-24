import ClientTicker from "../shared/clientTicker";

const sampleClients = [
  { name: "Client A", logo: "/images/home/clients/logos/Picture21.webp", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Picture22.webp", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Picture23.webp", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Picture24.webp", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Picture25.webp", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Picture26.webp", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Picture27.webp", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Picture28.webp", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Picture29.webp", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Picture30.webp", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Picture31.webp", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Picture32.webp", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Picture33.webp", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Picture34.webp", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Picture35.webp", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Picture36.webp", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Picture37.webp", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Picture38.webp", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Picture39.webp", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Picture40.webp", url: "https://example.com" },

  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-01.webp", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-02.webp", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-03.webp", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-04.webp", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-05.webp", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-06.webp", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-07.webp", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-08.webp", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-09.webp", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-10.webp", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-11.webp", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-12.webp", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-13.webp", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-14.webp", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-15.webp", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-16.webp", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-17.webp", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-18.webp", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-19.webp", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-20.webp", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-21.webp", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-22.webp", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-23.webp", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-24.webp", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-25.webp", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-26.webp", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-27.webp", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-28.webp", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-29.webp", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-30.webp", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-31.webp", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-32.webp", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-33.webp", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-34.webp", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-35.webp", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-36.webp", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-37.webp", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-38.webp", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-39.webp", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-40.webp", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-41.webp", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-42.webp", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-43.webp", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-44.webp", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-45.webp", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-46.webp", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-47.webp", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-48.webp", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-49.webp", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-50.webp", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-51.webp", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-52.webp", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-53.webp", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-54.webp", url: "https://example.com" },
];

// Splits one flat array into `columns` sub-arrays, as evenly sized as
// possible, in order, with no overlap between them. With 74 logos and
// 12 columns that's ten 6-logo sets and two 7-logo sets — every ticker
// ends up with its own distinct set instead of all 12 repeating the same list.
function splitIntoSets(items, columns) {
  const base = Math.floor(items.length / columns); // minimum logos every set gets
  const remainder = items.length % columns; // extra logos to spread across the first sets
  const sets = [];
  let cursor = 0;
  for (let i = 0; i < columns; i++) {
    const size = base + (i < remainder ? 1 : 0); // first `remainder` sets get one extra logo
    sets.push(items.slice(cursor, cursor + size));
    cursor += size;
  }
  return sets;
}

// 12 non-overlapping sets, one per ticker column below.
const clientSets = splitIntoSets(sampleClients, 12);

export default function Page() {
  return (
    <>
      <div className="container-content">
        <div>
          <h4 className="mb-5 text-sm font-semibold uppercase tracking-[0.12em] text-primary">
            Our valuable clients
          </h4>

          <h2 className="max-w-[680px] uppercase text-h2 font-bold leading-[1.12] tracking-[-0.04em] text-text-primary">
            Our valuable
            <span className="text-primary"> clients</span>
          </h2>
        </div>
      </div>
      <div className="py-20 bg-bg-1 flex">
        {/* Each column now reads its own slice of clientSets instead of the
            full sampleClients array, so no two tickers show the same logos.
            Direction still alternates top-to-bottom / bottom-to-top per column. */}
        <ClientTicker clients={clientSets[0]} orientation="vertical" direction="top-to-bottom" speed="20s" className="max-lg:hidden" />
        <ClientTicker clients={clientSets[1]} orientation="vertical" direction="bottom-to-top" speed="20s" className="max-sm:hidden" />
        <ClientTicker clients={clientSets[2]} orientation="vertical" direction="top-to-bottom" speed="20s" className="max-lg:hidden" />
        <ClientTicker clients={clientSets[3]} orientation="vertical" direction="bottom-to-top" speed="20s" className="max-sm:hidden" />
        <ClientTicker clients={clientSets[4]} orientation="vertical" direction="top-to-bottom" speed="20s" className="max-lg:hidden" />
        <ClientTicker clients={clientSets[5]} orientation="vertical" direction="bottom-to-top" speed="20s" className="max-sm:hidden" />
        <ClientTicker clients={clientSets[6]} orientation="vertical" direction="top-to-bottom" speed="20s" className="max-lg:hidden" />
        <ClientTicker clients={clientSets[7]} orientation="vertical" direction="bottom-to-top" speed="20s" className="" />
        <ClientTicker clients={clientSets[8]} orientation="vertical" direction="top-to-bottom" speed="20s" className="" />
        <ClientTicker clients={clientSets[9]} orientation="vertical" direction="bottom-to-top" speed="20s" className="" />
        <ClientTicker clients={clientSets[10]} orientation="vertical" direction="top-to-bottom" speed="20s" className="" />
        <ClientTicker clients={clientSets[11]} orientation="vertical" direction="bottom-to-top" speed="20s" className="" />
      </div>
    </>
  );
}