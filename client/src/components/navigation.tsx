import { useState, useEffect } from "react";
import { Menu, X, Building2 } from "lucide-react";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import { useLocation } from "@/contexts/location-context";
// Using public URL for logo until asset import is fixed
// import logoImage from "@assets/image0 (10)_1753145187894.jpeg";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const { currentLocation } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: "Home", id: "hero" },
    { label: "About", id: "about" },
    { label: "Services", id: "services" },
    { label: "Gallery", id: "gallery" },
    { label: "Reviews", id: "reviews" },
    { label: "Location", id: "location" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img 
              src="/logo.png" 
              alt="Authentic Cuts Logo" 
              className="w-12 h-12 object-contain transition-transform duration-300 hover:scale-110" 
            />
            <div className="font-bold text-2xl text-primary">Authentic Cuts</div>
          </div>
          
          <div className="flex items-center space-x-6">
            {/* Current Location Display */}
            <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-lg border border-primary/20">
              <Building2 size={16} className="text-primary" />
              <span className="text-sm font-medium text-gray-700">
                {currentLocation.name.includes('II') ? 'Location II' : 'Location I'}
              </span>
            </div>
            
            {!isMobile && (
              <div className="hidden md:flex space-x-8">
                {navItems.map((item) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-gray-600 hover:text-primary transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
            )}
            
            {isMobile && (
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden text-gray-600"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            )}
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobile && isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-lg">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-2 text-gray-600 hover:text-primary hover:bg-gray-50 transition-colors duration-300"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
