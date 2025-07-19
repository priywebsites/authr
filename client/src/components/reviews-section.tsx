import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Star, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ReviewsSection() {
  const ref = useRef(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isScrolling, setIsScrolling] = useState(false);

  const handleBookNow = () => {
    window.location.href = "tel:+14077447328";
  };

  const reviews = [
    {
      name: "Marcus Johnson",
      initials: "MJ",
      title: "Regular Customer",
      rating: 5,
      text: "Best barbershop experience I've ever had! The attention to detail and professionalism is unmatched. My fade was absolutely perfect.",
    },
    {
      name: "David Rodriguez",
      initials: "DR",
      title: "Business Professional",
      rating: 5,
      text: "Incredible service and atmosphere. The barbers really know their craft. I always leave looking and feeling my best.",
    },
    {
      name: "Sarah Kim",
      initials: "SK",
      title: "Parent",
      rating: 5,
      text: "My son loves coming here! They're so patient with kids and always deliver exactly what we ask for. Highly recommend!",
    },
    {
      name: "Anthony Brown",
      initials: "AB",
      title: "Gentleman Enthusiast",
      rating: 5,
      text: "The straight razor shave is an experience like no other. Traditional barbering at its finest. Worth every penny!",
    },
    {
      name: "Thomas Chen",
      initials: "TC",
      title: "Tech Professional",
      rating: 5,
      text: "Clean, modern shop with old-school craftsmanship. The barbers take their time and really care about the result. My go-to place!",
    },
  ];

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const autoScroll = setInterval(() => {
      if (!isScrolling) {
        carousel.scrollLeft += 320; // Width of one card plus gap
        if (carousel.scrollLeft >= carousel.scrollWidth - carousel.clientWidth) {
          setTimeout(() => {
            carousel.scrollLeft = 0;
          }, 2000);
        }
      }
    }, 4000);

    const handleScroll = () => {
      setIsScrolling(true);
      setTimeout(() => {
        setIsScrolling(false);
      }, 1000);
    };

    carousel.addEventListener("scroll", handleScroll);

    return () => {
      clearInterval(autoScroll);
      carousel.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolling]);

  return (
    <section id="reviews" className="py-20 bg-white relative overflow-hidden" ref={ref}>
      {/* Enhanced Background Elements */}
      <motion.div
        className="absolute top-16 right-20 w-24 h-24 bg-red-200/20 rounded-full"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, 180, 360],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ duration: 15, repeat: Infinity }}
      />
      
      <motion.div
        className="absolute bottom-32 left-16 w-16 h-16 bg-blue-200/20 rounded-full"
        animate={{
          y: [0, -40, 0],
          x: [0, 20, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, delay: 3 }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
            initial={{ opacity: 0, scale: 0.8, rotateX: -20 }}
            animate={isInView ? { opacity: 1, scale: 1, rotateX: 0 } : { opacity: 0, scale: 0.8, rotateX: -20 }}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            What Our <span className="text-primary">Clients Say</span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Don't just take our word for it - hear from our <span className="text-red-500 font-semibold">satisfied customers</span> about their experience.
          </motion.p>

          {/* Book Now CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center w-full"
          >
            <Button
              onClick={handleBookNow}
              className="book-now-pulse bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl border-2 border-red-400 mb-12 text-center"
              size="lg"
            >
              <Phone className="mr-2" size={20} />
              Join Our Happy Clients - Book Now!
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="carousel-container flex space-x-8 pb-6"
          ref={carouselRef}
        >
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, x: 100, scale: 0.9 }}
              animate={isInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: 100, scale: 0.9 }}
              transition={{ 
                duration: 1, 
                delay: 0.15 * index,
                type: "spring",
                stiffness: 80
              }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              className={`flex-none w-80 ${
                index % 2 === 0 ? 'bg-gradient-to-br from-red-50 to-white' : 'bg-gradient-to-br from-blue-50 to-white'
              } p-8 rounded-2xl shadow-xl hover:shadow-2xl relative overflow-hidden group`}
            >
              {/* Animated border accent */}
              <motion.div
                className={`absolute inset-0 border-2 ${
                  index % 2 === 0 ? 'border-red-200' : 'border-blue-200'
                } rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                initial={false}
              />

              {/* Star rating with enhanced animation */}
              <motion.div 
                className="flex items-center mb-4"
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.6, delay: 0.2 * index }}
              >
                <div className="flex text-yellow-400 text-xl">
                  {[...Array(review.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 * index + 0.1 * i }}
                      whileHover={{ 
                        scale: 1.2,
                        rotate: 18,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <Star size={20} fill="currentColor" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              
              <motion.p 
                className="text-gray-600 mb-6 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.4 * index }}
              >
                {review.text}
              </motion.p>
              
              <motion.div 
                className="flex items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.5 * index }}
              >
                <motion.div 
                  className={`w-12 h-12 ${
                    index % 2 === 0 ? 'bg-red-500' : 'bg-primary'
                  } rounded-full flex items-center justify-center mr-4`}
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 10,
                    boxShadow: "0 8px 25px rgba(0,0,0,0.15)"
                  }}
                  animate={{
                    boxShadow: [
                      "0 0 0 0 rgba(59, 130, 246, 0)",
                      "0 0 0 8px rgba(59, 130, 246, 0.1)",
                      "0 0 0 0 rgba(59, 130, 246, 0)"
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                >
                  <span className="text-white font-bold">{review.initials}</span>
                </motion.div>
                <div>
                  <motion.h4 
                    className="font-semibold text-gray-800"
                    whileHover={{ color: "#3b82f6" }}
                  >
                    {review.name}
                  </motion.h4>
                  <p className="text-gray-500">{review.title}</p>
                </div>
              </motion.div>

              {/* Floating accent particles */}
              <motion.div
                className={`absolute top-4 right-4 w-3 h-3 ${
                  index % 2 === 0 ? 'bg-red-300' : 'bg-blue-300'
                } rounded-full`}
                animate={{
                  y: [0, -12, 0],
                  opacity: [0.4, 1, 0.4]
                }}
                transition={{ duration: 4, repeat: Infinity, delay: index * 0.7 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
