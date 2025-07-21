import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "@/contexts/location-context";

export default function LocationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { currentLocation } = useLocation();

  return (
    <section id="location" className="py-20 bg-gray-50 relative overflow-hidden" ref={ref}>
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-16 left-20 w-24 h-24 bg-red-200/20 rounded-full"
        animate={{
          scale: [1, 1.5, 1],
          rotate: [0, 180, 360],
          opacity: [0.2, 0.5, 0.2]
        }}
        transition={{ duration: 20, repeat: Infinity }}
      />
      
      <motion.div
        className="absolute bottom-24 right-24 w-18 h-18 bg-blue-200/25 rounded-full"
        animate={{
          y: [0, -50, 0],
          x: [0, 30, 0],
          scale: [0.8, 1.3, 0.8]
        }}
        transition={{ duration: 16, repeat: Infinity, delay: 3 }}
      />

      <motion.div
        className="absolute top-1/2 right-16 w-12 h-12 bg-red-300/15 rounded-full"
        animate={{
          x: [0, -40, 0],
          rotate: [0, -360, 0],
          opacity: [0.3, 0.7, 0.3]
        }}
        transition={{ duration: 14, repeat: Infinity, delay: 5 }}
      />

      <motion.div
        className="absolute bottom-1/3 left-12 w-10 h-10 bg-blue-300/20 rounded-full"
        animate={{
          y: [0, 25, 0],
          scale: [1, 1.8, 1],
          rotate: [0, 180, 0]
        }}
        transition={{ duration: 11, repeat: Infinity, delay: 2 }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Find Us <span className="text-primary">Here</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Visit us at our convenient {currentLocation.name.includes('II') ? 'St Cloud' : 'St Cloud'} location. We're easy to find and parking is always available.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <div className="rounded-xl overflow-hidden">
              <iframe
                src={currentLocation.embedMapUrl}
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
                title={`${currentLocation.name} Location`}
              />
            </div>

            <div className="mt-6 p-6 bg-gray-50 rounded-xl">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2 flex items-center gap-2">
                    <MapPin size={24} className="text-primary" />
                    Address
                  </h3>
                  <p className="text-gray-600">{currentLocation.address}</p>
                  <p className="text-sm text-gray-500 mt-2">
                    {currentLocation.name}
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Get Directions</h3>
                  <Button
                    asChild
                    className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-full font-semibold transition-all duration-300"
                  >
                    <a
                      href={currentLocation.googleMapsLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2"
                    >
                      <ExternalLink size={20} />
                      Open in Google Maps
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
