import Blog from "../components/Blog";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-28 sm:pt-32">
        
        <Blog />
      </main>
      <Footer />
    </div>
  );
}

