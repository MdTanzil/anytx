import Brand from "@/components/Brand";
import Finance from "@/components/Finance";
import FloatingSvg from "@/components/FloatingSvg";
import Footer from "@/components/Footer";
import FutureFinance from "@/components/FutureFinance";
import Hero from "@/components/Hero";
import Innovation from "@/components/Innovation";
import Legacy from "@/components/Legacy";
import Navbar from "@/components/Navbar";
import Trusted from "@/components/Trusted";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      {/* className="overflow-x-hidden" */}
      {/* Wrap Navbar and Hero in a relative container */}
      <div className="relative ">
        {/* Background container */}
        <FloatingSvg />
        <Navbar />
        <Hero />
      </div>
      {/* Other sections */}
      <Finance />
      <Innovation />
      <FutureFinance />
      <Trusted />
      <Brand />
      <Legacy />
      <Footer />
    </div>
  );
}
