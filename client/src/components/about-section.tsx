import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Facebook, Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "@/contexts/location-context";
import logoImage from "../../attached_assets/image0 (3)_1753130670848.png";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { currentLocation } = useLocation();

  const handleBookNow = () => {
    window.location.href = `tel:${currentLocation.phone}`;
  };

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden" ref={ref}>
      {/* Enhanced Background Floating Elements */}
      <motion.div
        className="absolute top-20 right-20 w-20 h-20 bg-red-100/30 rounded-full"
        animate={{
          y: [0, -40, 0],
          x: [0, 25, 0],
          rotate: [0, 180, 360],
          scale: [1, 1.4, 1]
        }}
        transition={{ duration: 18, repeat: Infinity }}
      />
      
      <motion.div
        className="absolute bottom-32 left-16 w-16 h-16 bg-blue-100/25 rounded-full"
        animate={{
          y: [0, 35, 0],
          rotate: [0, -180, 0],
          opacity: [0.2, 0.6, 0.2]
        }}
        transition={{ duration: 14, repeat: Infinity, delay: 4 }}
      />

      <motion.div
        className="absolute top-1/3 left-10 w-8 h-8 bg-red-200/40 rounded-full"
        animate={{
          y: [0, -25, 0],
          x: [0, 15, 0],
          scale: [0.8, 1.6, 0.8]
        }}
        transition={{ duration: 12, repeat: Infinity, delay: 2 }}
      />

      <motion.div
        className="absolute bottom-1/4 right-12 w-6 h-6 bg-blue-200/35 rounded-full"
        animate={{
          x: [0, -30, 0],
          y: [0, -20, 0],
          rotate: [0, 360, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, delay: 6 }}
      />
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Crafting Perfect
              <br />
              <span className="text-primary">Cuts Since Day One</span>
            </motion.h2>
            
            <motion.p 
              className="text-lg text-gray-600 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              At Authentic Cuts Barbershop, we believe every cut tells a story. Our master barbers combine traditional techniques with modern precision to deliver cuts that enhance your natural style and confidence.
            </motion.p>

            {/* Contact Information */}
            <div className="space-y-4 mb-8">
              <motion.div 
                className="flex items-center space-x-4"
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <motion.div 
                  className="w-12 h-12 bg-primary rounded-full flex items-center justify-center rotate-hover"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Phone className="text-white" size={20} />
                </motion.div>
                <div>
                  <p className="font-semibold text-gray-800">Call us today</p>
                  <a
                    href={`tel:${currentLocation.phone}`}
                    className="text-primary hover:text-primary-dark transition-colors"
                  >
                    {currentLocation.phone}
                  </a>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-center space-x-4"
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <motion.div 
                  className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center rotate-hover"
                  whileHover={{ scale: 1.1, rotate: -10 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <MapPin className="text-white" size={20} />
                </motion.div>
                <div>
                  <p className="font-semibold text-gray-800">Visit us</p>
                  <p className="text-primary hover:text-primary-dark transition-colors">
                    {currentLocation.address}
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Book Now Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <Button
                onClick={handleBookNow}
                className="book-now-pulse bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl border-2 border-red-400"
                size="lg"
              >
                <Calendar className="mr-2" size={20} />
                Book Your Appointment Now!
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <motion.div
              whileHover={{ scale: 1.02, rotate: 1 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <motion.div
                className="bg-gradient-to-br from-primary/10 to-red-500/10 rounded-2xl shadow-2xl w-full h-96 flex items-center justify-center backdrop-blur-sm border border-primary/20"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                <div className="text-center p-8">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="w-32 h-32 mx-auto mb-6 flex items-center justify-center"
                  >
                    <img 
                      src={logoImage} 
                      alt="Authentic Cuts Barbershop" 
                      className="w-32 h-32 object-contain"
                    />
                  </motion.div>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Master craftsmanship meets modern precision
                  </p>
                  <motion.div 
                    className="mt-6 flex justify-center space-x-4"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  </motion.div>
                </div>
              </motion.div>
              
              {/* Floating accent elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-red-400/30 rounded-full"
                animate={{ 
                  y: [0, -10, 0],
                  scale: [1, 1.2, 1]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              
              <motion.div
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-400/40 rounded-full"
                animate={{ 
                  y: [0, 10, 0],
                  rotate: [0, 180, 360]
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
