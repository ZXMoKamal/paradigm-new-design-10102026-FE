
import { getBlogs } from "@/api/blogs";
import Image from "next/image";
import Link from "next/link";
import ArrowRight from "../icons/arrowRight";

// const articles = [
//   {
//     id: 1,
//     image: "/images/blog/post-4.png",
//     title: "Graphic design agency your",
//     highlightedTitle: "Brand needs.",
//     category: "Web Design",
//     date: "Jan 20, 2025",
//     href: "/blog-details/",
//   },
//   {
//     id: 2,
//     image: "/images/blog/post-5.png",
//     title: "Graphic design agency your",
//     highlightedTitle: "Brand needs.",
//     category: "Web Design",
//     date: "Jan 20, 2025",
//     href: "/blog-details/",
//   },
//   {
//     id: 3,
//     image: "/images/blog/post-6.png",
//     title: "Graphic design agency your",
//     highlightedTitle: "Brand needs.",
//     category: "Web Design",
//     date: "Jan 20, 2025",
//     href: "/blog-details/",
//   },
// ];


 function ArticleCard({ article, index }) {


  return (
    <article
      className="group"
      data-aos="fade-up"
      data-aos-duration="900"
      data-aos-delay={index * 100}
    >
      {/* Article image */}
      <Link
        href={"/article/"+article.requestTitle}
        aria-label={`${article.title} ${article.highlightedTitle}`}
        className="relative mb-6 block h-[300px] overflow-hidden rounded-2xl bg-bg-2 sm:h-[350px] lg:h-[400px]"
      >
        <img
          src={article.thumb}
          alt={`${article.title} ${article.highlightedTitle}`}
          // fill
          // sizes="(max-width: 767px) 100vw, (max-width: 1023px) 90vw, 50vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 w-full h-full"
        />
      </Link>

      {/* Article title */}
      <div className="post-content">
        <h3 className="mb-5 text-2xl font-medium leading-tight tracking-tight text-text-primary transition-colors duration-300 group-hover:text-primary sm:text-3xl lg:text-4xl">
          <Link href={"/blog/"+article.requestTitle}>
            {article.name}
            {/* <br />
            <span className="font-normal italic text-primary">
              {article.highlightedTitle}
            </span> */}
          </Link>
        </h3>

        {/* Article metadata */}
        {/* <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-text-muted">
          <li className="font-medium text-primary">
            {article.category}
          </li>
          <li>{article.date}</li>
        </ul> */}
      </div>
    </article>
  );
}

export default async function NewsArticles() {

  const articles = await getBlogs(); // Fetch articles from the API


  return (
    <section className="bg-bg-1 pt-[20px] pb-[20px] md:pt-[28px] md:pb-[28px] xl:pt-[100px] xl:pb-[75px]">
      <div className="container-content">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left column */}
          <div
            className="lg:sticky lg:top-24 lg:self-start"
            data-aos="fade-right"
            data-aos-duration="900"
          >
            <div className="mb-5">
              <h4 className="mb-5 text-sm font-semibold uppercase tracking-[0.12em] text-primary">
                News &amp; Articles
              </h4>

              <h2 className="text-h2 font-bold leading-[1.12] tracking-[-0.04em] text-text-primary">
                Latest Blog
                <span className="text-primary">
                  {" "}
                  and
                  <br />
                  News
                </span>
              </h2>
            </div>

            <p className="mb-10 max-w-lg text-base leading-7 text-text-body sm:text-lg">
              Take your business to new heights with our
              <br className="hidden sm:block" /> Expert Guidance in identifying
            </p>

            <Link
              href="/blog/"
              className="group inline-flex items-center gap-4 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-bg-1 transition-all duration-300 hover:bg-primary-dark hover:shadow-brand"
            >
              <span>See More Blogs</span>
              <ArrowRight className="w-4 h-4 text-bg-1 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Right column: article list */}
          <div className="flex flex-col gap-12 md:gap-14 lg:gap-[30px]">
            {articles.map((article, index) => (
              <ArticleCard
                key={article.id}
                article={article}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
