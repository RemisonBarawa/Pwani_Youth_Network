import Footer from "../components/Footer";
import Header from "../components/Header";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Youtube,
  Linkedin,
} from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-28 sm:pt-32">
        <section className="bg-gradient-to-b from-gray-50 to-white py-16 sm:py-20">
          <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
            <p className="text-xs uppercase tracking-[0.5em] text-gray-500">
              Get Involved
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-kenya-black">
              Contact Us
            </h1>
            <p className="text-lg text-gray-600">
              Get in touch with us. We'd love to hear from you!
            </p>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-3xl font-bold text-kenya-black mb-8">
                  Contact Information
                </h2>
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
                        <br />
                        Mombasa, Kenya
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
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition"
                    >
                      <Facebook size={24} />
                    </a>
                    <a
                      href="https://x.com/pwaniyouthnetwork"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-sky-500 text-white p-3 rounded-lg hover:bg-sky-600 transition"
                    >
                      <Twitter size={24} />
                    </a>
                    <a
                      href="https://www.youtube.com/@pwaniyouthnetwork"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-red-600 text-white p-3 rounded-lg hover:bg-red-700 transition"
                    >
                      <Youtube size={24} />
                    </a>
                    <a
                      href="https://www.linkedin.com/company/pwaniyouthnetwork"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-700 text-white p-3 rounded-lg hover:bg-blue-800 transition"
                    >
                      <Linkedin size={24} />
                    </a>
                  </div>
                  <p className="text-gray-600 mt-4">@PwaniYouthNetwork</p>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-kenya-black mb-8">
                  Visit Us
                </h2>
                <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.944!2d39.699!3d-4.05!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x184012e8c8b8b8b9%3A0x8b8b8b8b8b8b8b8b!2sMikindani%2C%20Mombasa!5e0!3m2!1sen!2ske!4v1234567890123!5m2!1sen!2ske"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Pwani Youth Network Location - Mikindani, Mombasa"
                  ></iframe>
                  <div className="p-4 bg-gray-50">
                    <p className="text-sm text-gray-600">
                      <strong>Address:</strong> Opposite Christ Delivery Church, 
                      Mikindani, Kwashee Road, Mombasa
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-kenya-green via-coast-ocean to-kenya-red rounded-3xl p-12 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">Get Involved</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Whether you want to volunteer, partner with us, or learn more about 
                our programs, we're here to help you make a difference.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="/get-involved/donate"
                  className="bg-white text-kenya-green px-8 py-4 rounded-full font-semibold hover:bg-coast-sand transition-all transform hover:translate-y-[-2px] shadow-xl"
                >
                  Donate Now
                </a>
                <a
                  href="mailto:pwaniyouthnetwork@gmail.com"
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all transform hover:translate-y-[-2px]"
                >
                  Send Email
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

