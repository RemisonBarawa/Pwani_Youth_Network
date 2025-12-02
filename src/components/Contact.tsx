import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Youtube,
  Linkedin,
  Radio,
} from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-kenya-black mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-kenya-red to-kenya-green mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join us in empowering the youth of Coastal Kenya. Volunteer, donate,
            or partner with us today.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-kenya-black mb-6">
              Contact Information
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-kenya-green text-white p-3 rounded-lg">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Location</h4>
                  <p className="text-gray-600">
                    Opposite Christ Delivery Church
                    <br />
                    Mikindani, Kwashee Road
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-coast-ocean text-white p-3 rounded-lg">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Phone</h4>
                  <p className="text-gray-600">+254 729 747 555</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-kenya-red text-white p-3 rounded-lg">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
                  <p className="text-gray-600">pwaniyouthnetwork@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-2xl font-bold text-kenya-black mb-6">
                Follow Us
              </h3>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://www.facebook.com/pwaniyouthnetwork"
                  className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition"
                >
                  <Facebook size={24} />
                </a>
                <a
                  href="https://x.com/pwaniyouthnetwork"
                  className="bg-sky-500 text-white p-3 rounded-lg hover:bg-sky-600 transition"
                >
                  <Twitter size={24} />
                </a>
                <a
                  href="https://www.youtube.com/@pwaniyouthnetwork"
                  className="bg-red-600 text-white p-3 rounded-lg hover:bg-red-700 transition"
                >
                  <Youtube size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/company/pwaniyouthnetwork"
                  className="bg-blue-700 text-white p-3 rounded-lg hover:bg-blue-800 transition"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="https://www.instagram.com/pwaniyouthnetwork"
                  className="bg-purple-600 text-white p-3 rounded-lg hover:bg-purple-700 transition"
                >
                  <Radio size={24} />
                </a>
              </div>
              <p className="text-gray-600 mt-4">@PwaniYouthNetwork</p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-kenya-black mb-6">
              Get Involved
            </h3>
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-kenya-green to-coast-palm text-white p-6 rounded-xl hover:shadow-lg transition">
                <h4 className="text-xl font-bold mb-2">Partner With Us</h4>
                <p className="text-white/90 mb-4">
                  Join and support a dynamic team of changemakers and help inspire a
                  generation.
                </p>
                <button className="bg-white text-kenya-green px-6 py-2 rounded-full font-semibold hover:bg-coast-sand transition">
                  Partner Today
                </button>
              </div>

              <div className="bg-gradient-to-br from-kenya-red to-coast-coral text-white p-6 rounded-xl hover:shadow-lg transition">
                <h4 className="text-xl font-bold mb-2">Donate</h4>
                <p className="text-white/90 mb-4">
                  Invest in the future of Kenya by investing in its youth
                </p>
                <button className="bg-white text-kenya-red px-6 py-2 rounded-full font-semibold hover:bg-coast-sand transition">
                  Contribute Now
                </button>
              </div>

              <div className="bg-gradient-to-br from-purple-600 to-pink-500 text-white p-6 rounded-xl hover:shadow-lg transition">
                <h4 className="text-xl font-bold mb-2">Visit Creative Stop</h4>
                <p className="text-white/90 mb-4">
                  Experience our youth-friendly center for creativity and
                  innovation
                </p>
                <button className="bg-white text-purple-600 px-6 py-2 rounded-full font-semibold hover:bg-coast-sand transition">
                  Visit Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
