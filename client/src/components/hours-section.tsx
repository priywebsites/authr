import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useBusinessHours } from "@/hooks/use-business-hours";
import { Clock } from "lucide-react";

export default function HoursSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { currentStatus, schedule } = useBusinessHours();

  return (
    <section className="py-20 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Hours of Operation</h2>
          <div className="text-xl font-semibold mb-2 flex items-center justify-center gap-2">
            <Clock size={24} />
            <span className={currentStatus.isOpen ? "status-open" : "status-closed"}>
              {currentStatus.statusText}
            </span>
          </div>
          <p className="text-gray-600 text-lg">Walk-ins welcome during business hours</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="space-y-0">
              {schedule.map((item, index) => (
                <motion.div
                  key={item.day}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className={`flex justify-between items-center p-6 hover:bg-gray-50 transition-colors duration-200 ${
                    index < schedule.length - 1 ? "border-b border-gray-100" : ""
                  }`}
                >
                  <span className="font-semibold text-gray-800">{item.day}</span>
                  <span className="text-primary font-medium">{item.hours}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
