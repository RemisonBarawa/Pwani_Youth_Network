export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-kenya-black to-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="https://res.cloudinary.com/dwhp5xrhn/image/upload/v1763787366/PYN_Logo_twjipo.png"
                alt="Pwani Youth Network Logo"
                className="w-12 h-12 object-contain"
              />
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
                <a href="/" className="hover:text-kenya-green transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/about/overview" className="hover:text-kenya-green transition">
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/initiatives"
                  className="hover:text-kenya-green transition"
                >
                  Initiatives
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:text-kenya-green transition">
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="/get-involved/contact"
                  className="hover:text-kenya-green transition"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-400 text-sm">
              <p>
                <strong className="text-white">Address:</strong><br />
                Opposite Christ Delivery Church,<br />
                Mikindani, Kwashee Road, Mombasa
              </p>
              <p>
                <strong className="text-white">Phone:</strong><br />
                <a href="tel:+254729747555" className="hover:text-kenya-green transition">
                  +254 729 747 555
                </a>
              </p>
              <p>
                <strong className="text-white">Email:</strong><br />
                <a href="mailto:pwaniyouthnetwork@gmail.com" className="hover:text-kenya-green transition">
                  pwaniyouthnetwork@gmail.com
                </a>
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Follow Us</h4>
            <div className="flex flex-wrap gap-3 mb-4">
              <a
                href="https://www.facebook.com/pwaniyouthnetwork"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition"
                aria-label="Follow us on Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@pwaniyouthnetwork"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 text-white p-2 rounded-lg hover:bg-red-700 transition"
                aria-label="Subscribe to our YouTube channel"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/pwaniyouthnetwork"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-700 text-white p-2 rounded-lg hover:bg-blue-800 transition"
                aria-label="Connect with us on LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
            <p className="text-gray-400 text-sm">@PwaniYouthNetwork</p>
            
            <div className="mt-4">
              <h5 className="text-sm font-semibold text-white mb-2">Our Vision & Mission</h5>
              <p className="text-gray-400 text-xs mb-2">
                <span className="text-kenya-green font-semibold">Vision:</span>{" "}
                Kenyan Youth Progress and Prosper
              </p>
              <p className="text-gray-400 text-xs">
                <span className="text-kenya-red font-semibold">Mission:</span>{" "}
                Inspire the dreams of Kenyan youth through all positive change
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Pwani Youth Network. All rights
            reserved. | Mombasa • Kilifi • Kwale || Website designed & developed by 
          <a href="https://remison-barawa-portfolio.netlify.app/" target="_blank" rel="noopener" className="hover:text-kenya-green transition"> 
            Remison Barawa</a>
          </p>
        </div>
      </div>
   </footer>
  );
}
