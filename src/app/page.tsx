import { Footer } from "@/components/business/footer/Footer";
import { Header } from "@/components/business/header/Header";
import { Hero } from "@/components/business/hero/Hero";
import { ServicesCarousel } from "@/components/business/services/ServicesCarousel";

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <ServicesCarousel />
      <Footer />
    </>
  );
}
