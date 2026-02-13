import Header from "@/components/header";
import Hero from "@/components/hero";
import About from "@/components/about";
import Method from "@/components/method";
import Benefits from "@/components/benefits";
import Results from "@/components/results";
import Testimonials from "@/components/testimonials";
import FAQ from "@/components/faq";
import CTASection from "@/components/cta-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Method />
        <Benefits />
        <Results />
        <Testimonials />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
