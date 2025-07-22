import { Phone, Facebook, MapPin, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "@/contexts/location-context";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { currentLocation } = useLocation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleBookNow = () => {
    window.location.href = `tel:${currentLocation.phone}`;
  };

  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-16 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-16 w-24 h-24 bg-red-500 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-blue-300 rounded-full blur-xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Call to Action Section */}
        <div className="text-center mb-12 pb-8 border-b border-gray-700">
          <h3 className="text-3xl font-bold mb-4 text-blue-300">Ready for Your Perfect Cut?</h3>
          <p className="text-xl text-gray-300 mb-6">
            Don't wait - <span className="text-red-400 font-semibold">book your appointment today</span> and experience the difference!
          </p>
          <div className="flex justify-center w-full">
            <Button
              onClick={handleBookNow}
              className="book-now-pulse bg-red-500 hover:bg-red-600 text-white px-10 py-4 rounded-full text-xl font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl border-2 border-red-400"
              size="lg"
            >
              <Calendar className="mr-3" size={24} />
              Book Your Cut Now - Call Us!
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-4 mb-4">
              <img 
                src="/attached_assets/image0 (10)_1753145187894.jpeg" 
                alt="Authentic Cuts Logo" 
                className="w-12 h-12 object-contain" 
              />
              <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-red-400 bg-clip-text text-transparent">
                Authentic Cuts
              </h3>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              Premium barbering experience in {currentLocation.address.includes('St Cloud') ? 'St Cloud' : 'Kissimmee'}, where traditional craftsmanship meets modern style.
            </p>
            <div className="flex space-x-4">
              <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
              <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
              <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-6 text-red-300">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 group">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center group-hover:bg-red-500 transition-colors duration-300">
                  <Phone size={16} />
                </div>
                <a
                  href={`tel:${currentLocation.phone}`}
                  className="hover:text-red-400 transition-colors duration-300 font-medium"
                >
                  {currentLocation.phone}
                </a>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center group-hover:bg-red-500 transition-colors duration-300">
                  <Facebook size={16} />
                </div>
                <a
                  href="https://www.facebook.com/authenticcutsbarbers/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-red-400 transition-colors duration-300 font-medium"
                >
                  Follow us on Facebook
                </a>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center group-hover:bg-red-500 transition-colors duration-300">
                  <MapPin size={16} />
                </div>
                <span className="text-gray-300 font-medium">{currentLocation.address}</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-6 text-blue-300">Quick Links</h4>
            <div className="space-y-3">
              {[
                { label: "Services", id: "services" },
                { label: "Gallery", id: "gallery" },
                { label: "Reviews", id: "reviews" },
                { label: "Location", id: "location" }
              ].map((link, index) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block text-gray-300 hover:text-red-400 transition-all duration-300 text-left font-medium hover:translate-x-2 transform"
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  → {link.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              &copy; {currentYear} Authentic Cuts Barbershop. All rights reserved.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <span>Crafted with</span>
              <span className="text-red-400 animate-pulse">❤️</span>
              <span>for style & precision</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
