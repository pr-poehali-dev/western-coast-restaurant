
import { Button } from "@/components/ui/button";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <Hero />
      <About />
      <Menu />
      <Footer />
    </div>
  );
};

export default Index;
