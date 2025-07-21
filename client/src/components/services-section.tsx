import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Scissors, User, Sparkles, Layers, PenTool, Baby, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "@/contexts/location-context";

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { currentLocation } = useLocation();

  const handleBookNow = () => {
    window.location.href = `tel:${currentLocation.phone}`;
  };

  const services = [
    {
      icon: Scissors,
      title: "Haircuts",
      description: "Precision cuts tailored to your face shape and personal style, from classic to contemporary.",
      color: "bg-primary",
      accent: "bg-red-100",
    },
    {
      icon: User,
      title: "Beard Trims",
      description: "Expert beard sculpting and grooming to complement your facial features perfectly.",
      color: "bg-red-500",
      accent: "bg-blue-100",
    },
    {
      icon: Sparkles,
      title: "Straight Razor Shaves",
      description: "Traditional hot towel shaves with straight razor precision for the ultimate grooming experience.",
      color: "bg-blue-600",
      accent: "bg-red-100",
    },
    {
      icon: Layers,
      title: "Fades",
      description: "Seamless fade cuts from subtle to dramatic, executed with meticulous attention to detail.",
      color: "bg-primary",
      accent: "bg-red-100",
    },
    {
      icon: PenTool,
      title: "Line-Ups",
      description: "Crisp, clean edge-ups and hairline refinements for that fresh, sharp appearance.",
      color: "bg-red-500",
      accent: "bg-blue-100",
    },
    {
      icon: Baby,
      title: "Kids' Cuts",
      description: "Patient, fun, and stylish cuts for our younger clients in a comfortable environment.",
      color: "bg-blue-600",
      accent: "bg-red-100",
    },
  ];

  return (
    <section id="services" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Our Premium <span className="text-primary">Services</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Experience the art of barbering with our comprehensive range of services,
            tailored to enhance your individual style.
          </motion.p>
          
          {/* Book Now CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button
              onClick={handleBookNow}
              className="book-now-pulse bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl border-2 border-red-400 mb-12"
              size="lg"
            >
              <Calendar className="mr-2" size={20} />
              Ready to Book? Call Now!
            </Button>
          </motion.div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.1 * index,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  y: -15, 
                  scale: 1.02,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
                className={`service-card ${service.accent} p-8 rounded-2xl text-center shadow-lg hover:shadow-2xl relative overflow-hidden group`}
              >
                {/* Animated background gradient on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-50 to-red-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
                
                <motion.div 
                  className={`w-16 h-16 ${service.color} rounded-full flex items-center justify-center mx-auto mb-6 relative z-10`}
                  whileHover={{ 
                    scale: 1.2, 
                    rotate: 360,
                    transition: { duration: 0.6 }
                  }}
                  animate={{
                    boxShadow: [
                      "0 0 0 0 rgba(59, 130, 246, 0)",
                      "0 0 0 10px rgba(59, 130, 246, 0.1)",
                      "0 0 0 0 rgba(59, 130, 246, 0)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                >
                  <IconComponent className="text-white" size={32} />
                </motion.div>
                
                <motion.h3 
                  className="text-2xl font-bold text-gray-800 mb-4 relative z-10"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 * index }}
                >
                  {service.title}
                </motion.h3>
                
                <motion.p 
                  className="text-gray-600 leading-relaxed relative z-10"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 * index }}
                >
                  {service.description}
                </motion.p>

                {/* Floating particles */}
                <motion.div
                  className="absolute top-4 right-4 w-2 h-2 bg-red-300 rounded-full"
                  animate={{
                    y: [0, -10, 0],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.2 }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Enhanced Future Expansion Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant="outline"
              size="lg"
              className="bg-gradient-to-r from-gray-100 to-red-50 hover:bg-gradient-to-r hover:from-primary hover:to-red-500 hover:text-white text-gray-600 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-500 transform border-2 border-gray-300 hover:border-primary"
            >
              And More Services Coming Soon...
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
