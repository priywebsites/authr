import { motion } from "framer-motion";
import { ChevronDown, Phone, Scissors, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "@/contexts/location-context";
import storefrontImage from "@assets/Screen Shot 2025-07-19 at 3.18.56 PM_1752956488275.png";
// import logoImage from "@assets/image0 (10)_1753145187894.jpeg";

export default function HeroSection() {
  const { currentLocation } = useLocation();
  
  const scrollToServices = () => {
    const element = document.getElementById("services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleBookNow = () => {
    window.location.href = `tel:${currentLocation.phone}`;
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden parallax bg-gradient-to-br from-primary/80 to-primary-dark/80"
      style={{
        backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.75), rgba(30, 58, 138, 0.75)), url('${storefrontImage}')`,
      }}
    >
      {/* Enhanced Floating Elements */}
      <motion.div
        className="absolute top-20 left-10 w-12 h-12 bg-red-400/30 rounded-full floating pulse-glow"
        animate={{ 
          y: [0, -30, 0],
          rotate: [0, 360, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-full h-full flex items-center justify-center">
          <Scissors className="text-white" size={20} />
        </div>
      </motion.div>
      
      <motion.div
        className="absolute bottom-32 right-16 w-16 h-16 bg-blue-300/25 rounded-full floating-slow"
        animate={{ 
          y: [0, -40, 0],
          x: [0, 20, 0],
          rotate: [0, -180, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      >
        <div className="w-full h-full flex items-center justify-center">
          <Star className="text-white" size={24} />
        </div>
      </motion.div>
      
      <motion.div
        className="absolute top-1/2 left-8 w-10 h-10 bg-red-300/40 rounded-full floating"
        animate={{ 
          y: [0, -25, 0],
          scale: [1, 1.3, 1],
          opacity: [0.6, 1, 0.6]
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 4 }}
      />
      
      <motion.div
        className="absolute top-32 right-20 w-8 h-8 bg-white/30 rounded-full floating"
        animate={{ 
          y: [0, -35, 0],
          x: [0, -15, 0]
        }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      
      <motion.div
        className="absolute bottom-20 left-20 w-6 h-6 bg-blue-200/40 rounded-full floating"
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 180, 360]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />

      {/* Additional Enhanced Floating Elements */}
      <motion.div
        className="absolute top-24 left-1/3 w-5 h-5 bg-red-300/50 rounded-full"
        animate={{
          y: [0, -40, 0],
          x: [0, 20, 0],
          opacity: [0.3, 0.8, 0.3],
          scale: [0.8, 1.5, 0.8]
        }}
        transition={{ duration: 11, repeat: Infinity, delay: 1.5 }}
      />

      <motion.div
        className="absolute bottom-32 right-1/3 w-7 h-7 bg-blue-300/35 rounded-full"
        animate={{
          y: [0, 30, 0],
          rotate: [0, 180, 360],
          opacity: [0.4, 0.9, 0.4]
        }}
        transition={{ duration: 8, repeat: Infinity, delay: 2.5 }}
      />

      <motion.div
        className="absolute top-1/2 right-12 text-red-300/40"
        animate={{
          rotate: [0, -360],
          scale: [0.8, 1.6, 0.8],
          x: [0, 25, 0],
          y: [0, -15, 0]
        }}
        transition={{ duration: 13, repeat: Infinity, delay: 4 }}
      >
        <Star size={16} />
      </motion.div>

      <motion.div
        className="absolute bottom-1/3 left-12 w-4 h-4 bg-gradient-to-r from-red-400 to-blue-400 rounded-full"
        animate={{
          y: [0, -35, 0],
          x: [0, -20, 0],
          scale: [1, 2, 1],
          rotate: [0, 180, 360]
        }}
        transition={{ duration: 12, repeat: Infinity, delay: 5.5 }}
      />

      {/* Orbiting particles */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-3 h-3 bg-red-400/50 rounded-full"
        animate={{
          x: [0, 50, 0, -50, 0],
          y: [0, -25, -50, -25, 0],
          opacity: [0.5, 1, 0.5, 1, 0.5]
        }}
        transition={{ duration: 15, repeat: Infinity }}
      />

      <motion.div
        className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-blue-400/60 rounded-full"
        animate={{
          x: [0, -40, 0, 40, 0],
          y: [0, 20, 40, 20, 0],
          scale: [1, 1.8, 1, 1.8, 1]
        }}
        transition={{ duration: 16, repeat: Infinity, delay: 7 }}
      />

      <motion.div
        className="absolute top-3/4 right-16 text-blue-300/30"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.4, 1],
          y: [0, -25, 0]
        }}
        transition={{ duration: 14, repeat: Infinity, delay: 3 }}
      >
        <Scissors size={20} />
      </motion.div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="hero-text"
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: -30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 2, ease: "backOut", delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="mb-12"
          >
            <motion.img 
              src="/logo.png" 
              alt="" 
              className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[28rem] xl:h-[28rem] object-contain mx-auto filter drop-shadow-2xl" 
              animate={{ 
                rotateY: [0, 5, -5, 0],
                scale: [1, 1.02, 1]
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            />
          </motion.div>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.9 }}
          >
Premium barbering experience in the heart of {currentLocation.address.includes('St Cloud') ? 'St Cloud' : 'Kissimmee'}.
            <br />
            <span className="text-red-300">Where tradition meets modern style.</span>
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1.2 }}
          >
            <Button
              onClick={handleBookNow}
              className="book-now-pulse bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-110 hover:shadow-2xl border-2 border-red-400"
              size="lg"
            >
              <Phone className="mr-2" size={20} />
              Book Now - Call Us!
            </Button>
            
            <Button
              onClick={scrollToServices}
              className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg border-2 border-blue-400"
              size="lg"
            >
              Explore Our Services
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
        animate={{ 
          y: [0, 15, 0],
          opacity: [0.7, 1, 0.7]
        }}
        transition={{ duration: 2.5, repeat: Infinity }}
      >
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown size={36} />
        </motion.div>
      </motion.div>
    </section>
  );
}
