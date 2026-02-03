import Blog from "../components/Blog";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SEO from "../components/SEO";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Blog"
        description="Read the latest stories and updates from Pwani Youth Network. Discover our impact in coastal Kenya through youth empowerment, climate action, health programs and community development."
        keywords="Pwani Youth Network blog, youth stories Kenya, coastal development news, community impact stories, SRHR education, climate action"
        url="https://pwaniyouthnetwork.org/blog"
      />
      <Header />
      <main className="pt-28 sm:pt-32">
        
        <Blog />
      </main>
      <Footer />
    </div>
  );
}

