import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import CaseStudy from "@/components/CaseStudy";
import Process from "@/components/Process";
import Guarantees from "@/components/Guarantees";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Benefits />
      <CaseStudy />
      <Process />
      <Guarantees />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
