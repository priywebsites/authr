import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import LocationSelector from "@/components/location-selector";
import AboutSection from "@/components/about-section";
import HoursSection from "@/components/hours-section";
import ServicesSection from "@/components/services-section";
import GallerySection from "@/components/gallery-section";
import ReviewsSection from "@/components/reviews-section";
import LocationSection from "@/components/location-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <LocationSelector />
      <AboutSection />
      <HoursSection />
      <ServicesSection />
      <GallerySection />
      <ReviewsSection />
      <LocationSection />
      <Footer />
    </div>
  );
}
