import { Link } from "react-router-dom";
import blogPosts from "../data/blogPosts";

export default function Blog() {
  return (
    <section id="blog" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-6xl lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 sm:gap-8 mb-10 sm:mb-12">
          <div>
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.5em] text-gray-500">
              Blog
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-kenya-black mt-3 sm:mt-4 mb-3 sm:mb-4">
              Lively Dispatches
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl">
              Stories, toolkits, and reflections from the frontline of youth
              leadership, health equity, and creative activism along Kenya’s
              coast.
            </p>
          </div>
          <a
            href="#contact"
            className="self-start lg:self-end px-6 py-3 rounded-full border border-gray-200 text-gray-700 font-semibold hover:border-kenya-red hover:text-kenya-red transition"
          >
            Pitch A Story
          </a>
        </div>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="flex flex-col rounded-3xl overflow-hidden border border-gray-100 hover:border-kenya-green transition-all shadow-sm hover:shadow-xl bg-white/90 backdrop-blur"
            >
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full text-[10px] sm:text-xs font-semibold uppercase tracking-[0.3em] text-gray-700">
                  {post.date}
                </div>
              </div>
              <div className="flex flex-col flex-1 p-5 sm:p-6 space-y-3 sm:space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                  {post.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 flex-1">
                  {post.excerpt}
                </p>
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs sm:text-sm text-gray-500 font-medium">
                  <span>{post.author}</span>
                  <span>{post.readTime}</span>
                </div>
                <Link
                  to={`/blog/${post.slug}`}
                  className="text-sm sm:text-base text-kenya-green font-semibold hover:text-kenya-red transition text-left inline-flex items-center gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kenya-green rounded-full"
                >
                  Continue reading →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

