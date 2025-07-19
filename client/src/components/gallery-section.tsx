import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function GallerySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600",
      alt: "Modern professional haircut with clean fade",
      accent: "red",
    },
    {
      src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600",
      alt: "Professional beard trim and grooming",
      accent: "blue",
    },
    {
      src: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600",
      alt: "Close-up of precision scissor cutting technique",
      accent: "red",
    },
    {
      src: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600",
      alt: "Contemporary men's haircut with textured styling",
      accent: "blue",
    },
    {
      src: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600",
      alt: "Traditional straight razor shave with hot towel treatment",
      accent: "red",
    },
    {
      src: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600",
      alt: "Finished professional haircut with modern styling",
      accent: "blue",
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
                scale: 0.6, 
                rotateY: -30,
                y: 60
              }}
              animate={isInView ? { 
                opacity: 1, 
                scale: 1, 
                rotateY: 0,
                y: 0
              } : { 
                opacity: 0, 
                scale: 0.6, 
                rotateY: -30,
                y: 60
              }}
              transition={{ 
                duration: 1, 
                delay: 0.1 * index,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                z: 50,
                transition: { duration: 0.3 }
              }}
              className="gallery-item rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl group relative"
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
              
              <motion.img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover transition-all duration-500 group-hover:brightness-110"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1, delay: 0.2 * index }}
                whileHover={{ 
                  scale: 1.15,
                  transition: { duration: 0.4 }
                }}
              />
              
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
