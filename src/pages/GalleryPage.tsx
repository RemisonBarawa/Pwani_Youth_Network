import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Header from "../components/Header";

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-28 sm:pt-32">
        <Gallery>
          
        </Gallery>
      </main>
      <Footer />
    </div>
  );
}

