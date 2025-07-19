import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LocationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const googleMapsUrl = "https://www.google.com/maps/place/Authentic+Cuts+Barbershop/@28.2122368,-81.330485,14z/data=!4m10!1m2!2m1!1sauthentic+cuts+barbershop+kissisime!3m6!1s0x88dd8e2bb2de1d25:0x3c5aedf82807a683!8m2!3d28.2122368!4d-81.2923762!15sCiNhdXRoZW50aWMgY3V0cyBiYXJiZXJzaG9wIGtpc3NpbW1lZZIBC2JhcmJlcl9zaG9wqgFWCggvbS8wcnB4cRABMh8QASIbRGLcdPFSPe6efIdwuIUKCA0HO4Enpy0gxFt5MicQAiIjYXV0aGVudGljIGN1dHMgYmFyYmVyc2hvcCBraXNzaW1tZWXgAQA!16s%2Fg%2F11b6_dgy2n?entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D";

  return (
    <section id="location" className="py-20 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-6">
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
            Visit us at our convenient Kissimmee location. We're easy to find and parking is always available.
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14141.234567890123!2d-81.330485!3d28.2122368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88dd8e2bb2de1d25%3A0x3c5aedf82807a683!2sAuthentic%20Cuts%20Barbershop!5e0!3m2!1sen!2sus!4v1642021234567!5m2!1sen!2sus"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
                title="Authentic Cuts Barbershop Location"
              />
            </div>

            <div className="mt-6 p-6 bg-gray-50 rounded-xl">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2 flex items-center gap-2">
                    <MapPin size={24} className="text-primary" />
                    Address
                  </h3>
                  <p className="text-gray-600">Kissimmee, FL</p>
                  <p className="text-sm text-gray-500 mt-2">
                    Exact address available via phone or social media
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Get Directions</h3>
                  <Button
                    asChild
                    className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-full font-semibold transition-all duration-300"
                  >
                    <a
                      href={googleMapsUrl}
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
