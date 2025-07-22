import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Clock, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "@/contexts/location-context";

export default function LocationSelector() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { currentLocation, locations, switchLocation } = useLocation();

  return (
    <section id="location-selector" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30 relative overflow-hidden" ref={ref}>
      {/* Background Elements */}
      <motion.div
        className="absolute top-10 left-10 w-24 h-24 bg-blue-200/20 rounded-full"
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
          rotate: [0, 180, 360],
          scale: [1, 1.3, 1]
        }}
        transition={{ duration: 15, repeat: Infinity }}
      />
      
      <motion.div
        className="absolute bottom-20 right-16 w-20 h-20 bg-red-200/25 rounded-full"
        animate={{
          y: [0, 25, 0],
          rotate: [0, -180, 0],
          opacity: [0.3, 0.7, 0.3]
        }}
        transition={{ duration: 12, repeat: Infinity, delay: 3 }}
      />

      <motion.div
        className="absolute top-1/2 right-1/4 w-16 h-16 bg-blue-300/15 rounded-full"
        animate={{
          x: [0, -40, 0],
          y: [0, -20, 0],
          scale: [1, 1.5, 1]
        }}
        transition={{ duration: 18, repeat: Infinity, delay: 6 }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            We Have <span className="text-primary">Two Locations</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Choose the location that's most convenient for you!
          </motion.p>
        </motion.div>

        {/* Location Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {locations.map((location, index) => (
            <motion.div
              key={location.id}
              initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index === 0 ? -50 : 50 }}
              transition={{ duration: 0.8, delay: 0.6 + (index * 0.2) }}
              className="relative group"
            >
              <motion.div
                className={`bg-white rounded-3xl shadow-2xl p-8 relative overflow-hidden border-4 transition-all duration-500 ${
                  currentLocation.id === location.id 
                    ? 'border-primary bg-gradient-to-br from-white to-blue-50/50' 
                    : 'border-gray-200 hover:border-primary/50'
                }`}
                whileHover={{ y: -5, scale: 1.02 }}
                animate={{
                  boxShadow: currentLocation.id === location.id 
                    ? ['0 25px 50px -12px rgba(59, 130, 246, 0.25)', '0 25px 50px -12px rgba(59, 130, 246, 0.4)', '0 25px 50px -12px rgba(59, 130, 246, 0.25)']
                    : '0 25px 50px -12px rgba(0, 0, 0, 0.1)'
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                {/* Current Location Badge */}
                {currentLocation.id === location.id && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute top-4 right-4 bg-primary text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg"
                  >
                    Current Location
                  </motion.div>
                )}

                {/* Floating Background Elements */}
                <motion.div
                  className="absolute top-6 left-6 w-12 h-12 bg-primary/10 rounded-full"
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ duration: 8, repeat: Infinity, delay: index * 2 }}
                />
                
                <motion.div
                  className="absolute bottom-8 right-8 w-8 h-8 bg-red-400/20 rounded-full"
                  animate={{ 
                    y: [0, -15, 0],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{ duration: 4, repeat: Infinity, delay: index * 1.5 }}
                />

                <div className="relative z-10">
                  {/* Location Icon and Title */}
                  <motion.div
                    className="flex items-center space-x-4 mb-6"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.6, delay: 0.8 + (index * 0.2) }}
                  >
                    <motion.div
                      className="w-16 h-16 bg-gradient-to-br from-primary to-blue-600 rounded-2xl flex items-center justify-center shadow-lg"
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 6, repeat: Infinity, delay: index * 3 }}
                    >
                      <Building2 className="text-white" size={32} />
                    </motion.div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800">
                        {location.name.includes('II') ? 'Location II' : 'Location I'}
                      </h3>
                      <p className="text-blue-600 font-medium">Authentic Cuts Barbershop</p>
                    </div>
                  </motion.div>

                  {/* Location Details */}
                  <motion.div
                    className="space-y-4 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 1 + (index * 0.2) }}
                  >
                    <div className="flex items-start space-x-4 group">
                      <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center group-hover:bg-red-200 transition-colors duration-300">
                        <MapPin className="text-red-600" size={20} />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">Address</p>
                        <p className="text-gray-600">{location.address}</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4 group">
                      <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300">
                        <Phone className="text-blue-600" size={20} />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">Phone</p>
                        <a 
                          href={`tel:${location.phone}`}
                          className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-300"
                        >
                          {location.phone}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4 group">
                      <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center group-hover:bg-green-200 transition-colors duration-300">
                        <Clock className="text-green-600" size={20} />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">Hours</p>
                        <div className="text-gray-600 space-y-1">
                          {Object.entries(location.hours).map(([day, hours]) => (
                            <div key={day} className="flex justify-between text-sm min-w-0">
                              <span className="capitalize font-medium w-20 flex-shrink-0">{day}:</span>
                              <span className="text-right flex-1">{hours}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Switch Button */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.6, delay: 1.2 + (index * 0.2) }}
                  >
                    <Button
                      onClick={() => switchLocation(location.id)}
                      disabled={currentLocation.id === location.id}
                      className={`w-full py-4 text-lg font-bold rounded-2xl transition-all duration-300 transform ${
                        currentLocation.id === location.id
                          ? 'bg-primary text-white cursor-default'
                          : 'bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 hover:from-primary hover:to-blue-600 hover:text-white hover:scale-105'
                      }`}
                    >
                      {currentLocation.id === location.id 
                        ? 'Selected Location' 
                        : 'Switch to This Location'
                      }
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Decoration */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="text-center mt-12"
        >
          <div className="flex justify-center space-x-4">
            <motion.div 
              className="w-3 h-3 bg-primary rounded-full"
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div 
              className="w-3 h-3 bg-red-400 rounded-full"
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            />
            <motion.div 
              className="w-3 h-3 bg-primary rounded-full"
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}