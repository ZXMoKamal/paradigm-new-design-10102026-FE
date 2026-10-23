import ClientTicker from "../shared/clientTicker";

const sampleClients = [
  { name: "Client A", logo: "/images/home/clients/logos/Picture21.jpg", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Picture22.jpg", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Picture23.jpg", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Picture24.jpg", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Picture25.jpg", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Picture26.jpg", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Picture27.jpg", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Picture28.jpg", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Picture29.jpg", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Picture30.jpg", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Picture31.jpg", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Picture32.jpg", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Picture33.jpg", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Picture34.jpg", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Picture35.jpg", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Picture36.jpg", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Picture37.jpg", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Picture38.jpg", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Picture39.jpg", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Picture40.jpg", url: "https://example.com" },

  { name: "Client A", logo: "/images/home/clients/logos/Our_Clients-01.png", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our_Clients-02.png", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our_Clients-03.png", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our_Clients-04.png", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our_Clients-05.png", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our_Clients-06.png", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our_Clients-07.png", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our_Clients-08.png", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our_Clients-09.png", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our_Clients-10.png", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our_Clients-11.png", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-12.jpg", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-13.jpg", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-14.jpg", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-15.jpg", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-16.jpg", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our_Clients-17.png", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-18.jpg", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our_Clients-19.png", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-20.jpg", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-21.jpg", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-22.jpg", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-23.jpg", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-24.jpg", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-25.jpg", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-26.jpg", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-27.jpg", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-28.jpg", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-29.jpg", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-30.jpg", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our_Clients-31.png", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-32.jpg", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-33.jpg", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-34.jpg", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-35.jpg", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-36.jpg", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-37.jpg", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-38.jpg", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-39.jpg", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-40.jpg", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-41.jpg", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-42.jpg", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-43.jpg", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-44.jpg", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-45.jpg", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-46.jpg", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-47.jpg", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-48.jpg", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-49.jpg", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-50.jpg", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-51.jpg", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-52.jpg", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-53.jpg", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-54.jpg", url: "https://example.com" },
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