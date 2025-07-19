import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Scissors, User, Sparkles, Layers, PenTool, Baby } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Scissors,
      title: "Haircuts",
      description: "Precision cuts tailored to your face shape and personal style, from classic to contemporary.",
    },
    {
      icon: User,
      title: "Beard Trims",
      description: "Expert beard sculpting and grooming to complement your facial features perfectly.",
    },
    {
      icon: Sparkles,
      title: "Straight Razor Shaves",
      description: "Traditional hot towel shaves with straight razor precision for the ultimate grooming experience.",
    },
    {
      icon: Layers,
      title: "Fades",
      description: "Seamless fade cuts from subtle to dramatic, executed with meticulous attention to detail.",
    },
    {
      icon: PenTool,
      title: "Line-Ups",
      description: "Crisp, clean edge-ups and hairline refinements for that fresh, sharp appearance.",
    },
    {
      icon: Baby,
      title: "Kids' Cuts",
      description: "Patient, fun, and stylish cuts for our younger clients in a comfortable environment.",
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
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our Premium <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the art of barbering with our comprehensive range of services,
            tailored to enhance your individual style.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                className="service-card bg-gray-50 p-8 rounded-2xl text-center shadow-lg hover:shadow-xl"
              >
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <IconComponent className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Future Expansion Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <Button
            variant="outline"
            size="lg"
            className="bg-gray-200 hover:bg-primary hover:text-white text-gray-600 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            And More Services Coming Soon...
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
