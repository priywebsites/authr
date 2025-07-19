import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Star } from "lucide-react";

export default function ReviewsSection() {
  const ref = useRef(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isScrolling, setIsScrolling] = useState(false);

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
    <section id="reviews" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            What Our <span className="text-primary">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers about their experience.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="carousel-container flex space-x-6 pb-6"
          ref={carouselRef}
        >
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              className="flex-none w-80 bg-gray-50 p-8 rounded-2xl shadow-lg"
            >
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400 text-xl">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={20} fill="currentColor" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">{review.text}</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">{review.initials}</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">{review.name}</h4>
                  <p className="text-gray-500">{review.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
