import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import image1 from "@assets/Screen Shot 2025-07-19 at 3.12.53 PM_1752956050286.png";
import image2 from "@assets/Screen Shot 2025-07-19 at 3.12.35 PM_1752956051849.png"; 
import image3 from "@assets/Screen Shot 2025-07-19 at 3.12.19 PM_1752956053450.png";
import image4 from "@assets/Screen Shot 2025-07-19 at 3.12.01 PM_1752956055150.png";
import image5 from "@assets/Screen Shot 2025-07-19 at 3.11.34 PM_1752956059645.png";

export default function GallerySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const galleryImages = [
    {
      src: image1,
      alt: "Professional fade with precise line work - Authentic Cuts signature style",
      accent: "red",
    },
    {
      src: image2, 
      alt: "Modern fade with intricate design patterns by our master barbers",
      accent: "blue",
    },
    {
      src: image3,
      alt: "Clean taper fade showcasing our attention to detail",
      accent: "red",
    },
    {
      src: image4,
      alt: "Professional barber service in action at Authentic Cuts",
      accent: "blue",
    },
    {
      src: image5,
      alt: "Expert beard trimming and styling services",
      accent: "red",
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
            initial={{ opacity: 0, rotateX: -45 }}
            animate={isInView ? { opacity: 1, rotateX: 0 } : { opacity: 0, rotateX: -45 }}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            Our <span className="text-primary">Work Gallery</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Take a look at some of our finest work and see the <span className="text-red-500 font-semibold">artistry</span> behind each cut.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ 
                opacity: 0, 
                scale: 0.3, 
                rotateY: -60,
                rotateX: -45,
                y: 100,
                x: index % 2 === 0 ? -100 : 100
              }}
              animate={isInView ? { 
                opacity: 1, 
                scale: 1, 
                rotateY: 0,
                rotateX: 0,
                y: 0,
                x: 0
              } : { 
                opacity: 0, 
                scale: 0.3, 
                rotateY: -60,
                rotateX: -45,
                y: 100,
                x: index % 2 === 0 ? -100 : 100
              }}
              transition={{ 
                duration: 1.4, 
                delay: 0.15 * index,
                type: "spring",
                stiffness: 80,
                damping: 12
              }}
              whileHover={{ 
                scale: 1.08,
                rotateY: 8,
                rotateX: 3,
                z: 100,
                transition: { duration: 0.4, type: "spring", stiffness: 200 }
              }}
              className="gallery-item rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl group relative perspective-1000"
            >
              {/* Border accent with colors */}
              <motion.div
                className={`absolute inset-0 rounded-2xl ${
                  image.accent === 'red' 
                    ? 'bg-gradient-to-br from-red-400/20 to-transparent' 
                    : 'bg-gradient-to-br from-blue-400/20 to-transparent'
                } z-10 pointer-events-none`}
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Floating corner accent */}
              <motion.div
                className={`absolute top-2 right-2 w-4 h-4 ${
                  image.accent === 'red' ? 'bg-red-400' : 'bg-blue-400'
                } rounded-full z-20`}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
              />
              
              <motion.div className="relative overflow-hidden">
                {/* Image reveal mask */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary via-red-500 to-primary z-20"
                  initial={{ x: "0%" }}
                  animate={isInView ? { x: "100%" } : { x: "0%" }}
                  transition={{ 
                    duration: 1.2, 
                    delay: 0.3 * index,
                    ease: "easeInOut"
                  }}
                />
                
                {/* Secondary reveal effect */}
                <motion.div
                  className="absolute inset-0 bg-white z-10"
                  initial={{ x: "0%" }}
                  animate={isInView ? { x: "100%" } : { x: "0%" }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 0.5 * index,
                    ease: "easeOut"
                  }}
                />

                <motion.img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover transition-all duration-500 group-hover:brightness-110 filter"
                  initial={{ 
                    scale: 1.3,
                    filter: "blur(10px) brightness(0.3)"
                  }}
                  animate={isInView ? { 
                    scale: 1,
                    filter: "blur(0px) brightness(1)"
                  } : {
                    scale: 1.3,
                    filter: "blur(10px) brightness(0.3)"
                  }}
                  transition={{ 
                    duration: 1.5, 
                    delay: 0.4 * index,
                    ease: "easeOut"
                  }}
                  whileHover={{ 
                    scale: 1.2,
                    filter: "blur(0px) brightness(1.1) contrast(1.1)",
                    transition: { duration: 0.5 }
                  }}
                />

                {/* Glowing border reveal */}
                <motion.div
                  className={`absolute inset-0 border-4 ${
                    image.accent === 'red' ? 'border-red-400' : 'border-blue-400'
                  } rounded-lg opacity-0`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { 
                    opacity: [0, 1, 0],
                    scale: [0.8, 1.1, 1]
                  } : { opacity: 0, scale: 0.8 }}
                  transition={{ 
                    duration: 2, 
                    delay: 0.6 * index,
                    times: [0, 0.5, 1]
                  }}
                />
              </motion.div>
              
              {/* Overlay with slide-up animation */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-4"
                initial={false}
              >
                <motion.p
                  className="text-white text-sm font-medium"
                  initial={{ y: 20, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  {image.alt}
                </motion.p>
              </motion.div>

              {/* Shimmer effect on hover */}
              <motion.div
                className="absolute inset-0 shimmer opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                initial={false}
              />
            </motion.div>
          ))}
        </div>

        {/* Floating particles around gallery */}
        <motion.div
          className="absolute top-20 left-10 w-3 h-3 bg-red-300/40 rounded-full"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            opacity: [0.3, 1, 0.3]
          }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        
        <motion.div
          className="absolute bottom-20 right-16 w-2 h-2 bg-blue-400/50 rounded-full"
          animate={{
            y: [0, 15, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 8, repeat: Infinity, delay: 2 }}
        />
      </div>
    </section>
  );
}
