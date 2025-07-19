import { motion } from "framer-motion";
import { ChevronDown, Phone, Scissors, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToServices = () => {
    const element = document.getElementById("services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleBookNow = () => {
    window.location.href = "tel:+14077447328";
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden parallax bg-gradient-to-br from-primary/80 to-primary-dark/80"
      style={{
        backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.8), rgba(30, 58, 138, 0.8)), url('https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')`,
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

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="hero-text"
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.8, ease: "backOut" }}
          >
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.3 }}
            >
              Authentic
            </motion.span>
            <br />
            <motion.span 
              className="text-blue-300"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.6 }}
            >
              Cuts
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.9 }}
          >
            Premium barbering experience in the heart of Kissimmee.
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
