import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

type NavLink = {
  label: string;
  to: string;
  dropdown?: NavLink[];
};

const mainLinks: NavLink[] = [
  { label: "Home", to: "/" },
  {
    label: "About Us",
    to: "/about/overview",
    dropdown: [
      { label: "Overview", to: "/about/overview" },
      { label: "Leadership", to: "/about/leadership" },
      { label: "Our Story", to: "/about/story" },
    ],
  },
  {
    label: "Initiatives",
    to: "/initiatives",
    dropdown: [
      { label: "All Initiatives", to: "/initiatives" },
      { label: "Programs", to: "/initiatives#programs" },
      { label: "Projects", to: "/initiatives#projects" },
    ],
  },
  {
    label: "Media",
    to: "/media/gallery",
    dropdown: [
      { label: "Gallery", to: "/media/gallery" },
      { label: "Reports", to: "/media/reports" },
    ],
  },
  {
    label: "Get Involved",
    to: "/get-involved/contact",
    dropdown: [
      { label: "Donate", to: "/get-involved/donate" },
      { label: "Contact Us", to: "/get-involved/contact" },
    ],
  },
  { label: "Blog", to: "/blog" },
];

function NavItem({
  link,
  onNavigate,
  className = "",
}: {
  link: NavLink;
  onNavigate?: () => void;
  className?: string;
}) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const baseClass =
    "text-gray-700 hover:text-kenya-green transition-all duration-300 text-sm font-semibold tracking-wide flex items-center gap-1 px-4 py-2 rounded-xl hover:bg-white/50 backdrop-blur-sm";
  const combinedClass = `${baseClass} ${className}`.trim();

  if (link.to.startsWith("http")) {
    return (
      <a
        href={link.to}
        target="_blank"
        rel="noopener noreferrer"
        className={combinedClass}
        onClick={onNavigate}
      >
        {link.label}
      </a>
    );
  }

  if (link.dropdown && link.dropdown.length > 0) {
    return (
      <div
        className="relative"
        onMouseEnter={() => setIsDropdownOpen(true)}
        onMouseLeave={() => setIsDropdownOpen(false)}
      >
        <Link
          to={link.to}
          className={combinedClass}
          onClick={onNavigate}
        >
          {link.label}
          <ChevronDown size={16} />
        </Link>
        {isDropdownOpen && (
          <div className="absolute top-full left-0 mt-2 w-56 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/50 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-300">
            {link.dropdown.map((dropdownLink) => (
              <Link
                key={dropdownLink.label}
                to={dropdownLink.to}
                className="block px-4 py-3 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-kenya-green hover:to-coast-palm hover:text-white transition-all duration-300 rounded-lg mx-2"
                onClick={onNavigate}
              >
                {dropdownLink.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <Link to={link.to} className={combinedClass} onClick={onNavigate}>
      {link.label}
    </Link>
  );
}

function MobileNavItem({
  link,
  onNavigate,
}: {
  link: NavLink;
  onNavigate?: () => void;
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  if (link.dropdown && link.dropdown.length > 0) {
    return (
      <div>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center justify-between w-full text-left text-gray-700 hover:text-kenya-red transition text-sm font-semibold tracking-wide py-2"
        >
          {link.label}
          <ChevronDown
            size={16}
            className={`transition-transform ${isExpanded ? "rotate-180" : ""}`}
          />
        </button>
        {isExpanded && (
          <div className="pl-4 space-y-2 border-l-2 border-gray-200 ml-2">
            {link.dropdown.map((dropdownLink) => (
              <Link
                key={dropdownLink.label}
                to={dropdownLink.to}
                className="block text-sm text-gray-600 hover:text-kenya-red transition py-1"
                onClick={onNavigate}
              >
                {dropdownLink.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <Link
      to={link.to}
      className="block text-gray-700 hover:text-kenya-red transition text-sm font-semibold tracking-wide py-2"
      onClick={onNavigate}
    >
      {link.label}
    </Link>
  );
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Modern glassmorphism header */}
      <div className="absolute inset-0 bg-white/80 backdrop-blur-xl border-b border-white/20 shadow-sm" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-3 group">
            <img
              src="https://res.cloudinary.com/dwhp5xrhn/image/upload/v1763787366/PYN_Logo_twjipo.png"
              alt="Pwani Youth Network Logo"
              className="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-300"
            />
            <div>
              <h1 className="text-xl font-bold text-kenya-black group-hover:text-kenya-green transition-colors">
                Pwani Youth Network
              </h1>
              <p className="text-xs text-gray-600">Empowering Coastal Kenya</p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-2">
            {mainLinks.map((link) => (
              <NavItem key={link.label} link={link} />
            ))}
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 p-2 rounded-lg hover:bg-white/50 backdrop-blur-sm transition-all duration-300"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-3 border-t border-white/30 bg-white/95 backdrop-blur-xl">
            {mainLinks.map((link) => (
              <MobileNavItem
                key={link.label}
                link={link}
                onNavigate={() => setIsMenuOpen(false)}
              />
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
