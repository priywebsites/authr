import { Phone, Facebook, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-blue-300">Authentic Cuts</h3>
            <p className="text-gray-300 leading-relaxed">
              Premium barbering experience in Kissimmee, where traditional craftsmanship meets modern style.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2">
              <p className="text-gray-300 flex items-center gap-2">
                <Phone size={16} />
                <a
                  href="tel:+14077447328"
                  className="hover:text-blue-300 transition-colors"
                >
                  +1 (407) 744-7328
                </a>
              </p>
              <p className="text-gray-300 flex items-center gap-2">
                <Facebook size={16} />
                <a
                  href="https://www.facebook.com/authenticcutsbarbers/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-300 transition-colors"
                >
                  Facebook
                </a>
              </p>
              <p className="text-gray-300 flex items-center gap-2">
                <MapPin size={16} />
                Kissimmee, FL
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <button
                onClick={() => scrollToSection("services")}
                className="block text-gray-300 hover:text-blue-300 transition-colors text-left"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("gallery")}
                className="block text-gray-300 hover:text-blue-300 transition-colors text-left"
              >
                Gallery
              </button>
              <button
                onClick={() => scrollToSection("reviews")}
                className="block text-gray-300 hover:text-blue-300 transition-colors text-left"
              >
                Reviews
              </button>
              <button
                onClick={() => scrollToSection("location")}
                className="block text-gray-300 hover:text-blue-300 transition-colors text-left"
              >
                Location
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {currentYear} Authentic Cuts Barbershop. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
