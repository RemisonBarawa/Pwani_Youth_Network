import { Link, useNavigate, useParams } from "react-router-dom";
import blogPosts from "../data/blogPosts";

export default function BlogCanvas() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return (
      <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-kenya-black via-gray-900 to-black text-white px-6 text-center space-y-6">
        <p className="text-sm uppercase tracking-[0.6em] text-gray-400">
          Blog
        </p>
        <h1 className="text-3xl sm:text-4xl font-semibold">
          We couldn’t load that dispatch.
        </h1>
        <p className="text-gray-400 max-w-lg">
          The story you’re after might have moved or is still under editorial
          polish. Head back to the newsroom and explore another canvas.
        </p>
        <button
          onClick={() => navigate(-1)}
          className="px-6 py-3 rounded-full border border-white/40 hover:border-white text-sm font-semibold tracking-wide transition"
        >
          Return to previous view
        </button>
      </section>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      <header className="sticky top-0 backdrop-blur-xl bg-white/80 border-b border-gray-100 z-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          <Link
            to="/"
            className="text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase text-gray-600 hover:text-kenya-green transition"
          >
            Pwani Youth Network
          </Link>
          <Link
            to="/#blog"
            className="text-xs sm:text-sm text-kenya-green font-semibold hover:text-kenya-red transition"
          >
            Browse all posts
          </Link>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <div className="space-y-6 sm:space-y-8">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-gray-500">
            <span className="uppercase tracking-[0.4em] text-xs">Blog</span>
            <span>{post.date}</span>
            <span>{post.readTime}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-kenya-black leading-tight">
            {post.title}
          </h1>
          <p className="text-lg text-gray-600">{post.excerpt}</p>
          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
            <span className="font-semibold text-gray-800">{post.author}</span>
            <span className="h-1 w-1 rounded-full bg-gray-300" />
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-gray-100 text-xs uppercase tracking-wide"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 sm:mt-12 rounded-[2.5rem] overflow-hidden shadow-2xl bg-black">
          <img
            src={post.heroImage}
            alt={post.title}
            className="w-full h-[320px] sm:h-[420px] object-cover"
          />
        </div>

        <article className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(250px,1fr)] lg:gap-16">
          <div className="space-y-10 text-gray-700 text-lg leading-relaxed">
            {post.sections.map((section) => (
              <section key={section.heading} className="space-y-4">
                <h2 className="text-2xl font-semibold text-kenya-black">
                  {section.heading}
                </h2>
                {section.body.map((paragraph, idx) => (
                  <p key={idx} className="text-base sm:text-lg text-gray-700">
                    {paragraph}
                  </p>
                ))}
              </section>
            ))}

            {post.pullQuote && (
              <blockquote className="text-2xl sm:text-3xl font-semibold text-kenya-green border-l-4 border-kenya-green pl-6 py-4 italic">
                {post.pullQuote}
              </blockquote>
            )}
          </div>

          <aside className="space-y-6 border border-gray-200 rounded-3xl p-6 bg-white/80 backdrop-blur">
            <div className="space-y-2">
              <p className="text-sm uppercase tracking-[0.4em] text-gray-500">
                Snapshot
              </p>
              <div>
                <p className="text-4xl font-bold text-kenya-black">
                  {post.impactStat.value}
                </p>
                <p className="text-gray-500">{post.impactStat.label}</p>
              </div>
            </div>
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.4em] text-gray-500">
                Share
              </p>
              <div className="flex gap-3">
                {["Twitter", "LinkedIn", "WhatsApp"].map((platform) => (
                  <button
                    key={platform}
                    type="button"
                    className="flex-1 px-3 py-2 text-sm font-medium rounded-full border border-gray-200 hover:border-kenya-green hover:text-kenya-green transition"
                  >
                    {platform}
                  </button>
                ))}
              </div>
            </div>
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.4em] text-gray-500">
                Continue exploring
              </p>
              <Link
                to="/#contact"
                className="block px-4 py-3 rounded-2xl bg-kenya-black text-white text-center font-semibold hover:bg-kenya-green transition"
              >
                Pitch a Story
              </Link>
              <Link
                to="/#blog"
                className="block px-4 py-3 rounded-2xl border border-gray-200 text-center font-semibold hover:border-kenya-green hover:text-kenya-green transition"
              >
                Back to Newsroom
              </Link>
            </div>
          </aside>
        </article>
      </main>
    </div>
  );
}

