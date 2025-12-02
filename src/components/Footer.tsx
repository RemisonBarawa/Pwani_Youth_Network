export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-kenya-black to-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-kenya-red to-kenya-green rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">PYN</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Pwani Youth Network</h3>
                <p className="text-sm text-gray-400">
                  Empowering Coastal Kenya
                </p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              A grassroots organization empowering the youth of Kenya's Coastal
              region since 2013.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#home" className="hover:text-kenya-green transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-kenya-green transition">
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#programs"
                  className="hover:text-kenya-green transition"
                >
                  Programs
                </a>
              </li>
              <li>
                <a href="#impact" className="hover:text-kenya-green transition">
                  Impact
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-kenya-green transition"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/plastsafi"
                  className="hover:text-kenya-green transition"
                >
                  Plastsafi
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Our Vision & Mission</h4>
            <p className="text-gray-400 text-sm mb-3">
              <span className="text-kenya-green font-semibold">Vision:</span>{" "}
              Kenyan Youth Progress and Prosper
            </p>
            <p className="text-gray-400 text-sm">
              <span className="text-kenya-red font-semibold">Mission:</span>{" "}
              Inspire the dreams of Kenyan youth through all positive change
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Pwani Youth Network. All rights
            reserved. | Mombasa • Kilifi • Kwale
          </p>
        </div>
      </div>
    </footer>
  );
}
