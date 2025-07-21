import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useBusinessHours } from "@/hooks/use-business-hours";
import { useLocation } from "@/contexts/location-context";
import { Clock } from "lucide-react";

export default function HoursSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { currentStatus, schedule } = useBusinessHours();
  const { currentLocation } = useLocation();

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden" ref={ref}>
      {/* Floating background elements */}
      <motion.div
        className="absolute top-10 left-10 w-20 h-20 bg-blue-300/10 rounded-full"
        animate={{
          y: [0, -30, 0],
          x: [0, 15, 0],
          rotate: [0, 180, 360]
        }}
        transition={{ duration: 12, repeat: Infinity }}
      />
      
      <motion.div
        className="absolute bottom-20 right-20 w-16 h-16 bg-red-300/10 rounded-full"
        animate={{
          y: [0, 25, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 8, repeat: Infinity, delay: 2 }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.h2 
            className="text-4xl font-bold text-gray-800 mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Hours of <span className="text-primary">Operation</span>
          </motion.h2>
          
          <motion.div 
            className="text-xl font-semibold mb-2 flex items-center justify-center gap-2"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div
              animate={{ rotate: currentStatus.isOpen ? 360 : 0 }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Clock size={24} />
            </motion.div>
            <motion.span 
              className={`${currentStatus.isOpen ? "status-open" : "status-closed"} ${
                currentStatus.isOpen ? "text-green-600" : "text-red-500"
              }`}
              animate={{
                scale: [1, 1.05, 1]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {currentStatus.statusText}
            </motion.span>
          </motion.div>
          
          <motion.p 
            className="text-gray-600 text-lg"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <span className="text-red-500 font-semibold">Walk-ins welcome</span> during business hours
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <motion.div 
            className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-transparent hover:border-primary/20 transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="space-y-0">
              {schedule.map((item, index) => (
                <motion.div
                  key={item.day}
                  initial={{ opacity: 0, x: -30, scale: 0.95 }}
                  animate={isInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: -30, scale: 0.95 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.1 * index,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ 
                    x: 10,
                    backgroundColor: "rgba(239, 246, 255, 0.5)",
                    transition: { duration: 0.2 }
                  }}
                  className={`flex justify-between items-center p-6 hover:bg-gradient-to-r hover:from-blue-50 hover:to-red-50 transition-all duration-300 group ${
                    index < schedule.length - 1 ? "border-b border-gray-100" : ""
                  }`}
                >
                  <motion.span 
                    className="font-semibold text-gray-800 group-hover:text-primary transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    {item.day}
                  </motion.span>
                  
                  <motion.span 
                    className="text-primary font-medium group-hover:text-red-500 transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    {item.hours}
                  </motion.span>

                  {/* Floating accent dot */}
                  <motion.div
                    className={`absolute right-2 w-2 h-2 ${
                      index % 2 === 0 ? 'bg-red-400' : 'bg-blue-400'
                    } rounded-full opacity-0 group-hover:opacity-60`}
                    animate={{
                      y: [0, -8, 0]
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
