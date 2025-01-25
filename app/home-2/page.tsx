
import Blog2 from "@/components/sections/Blog2";
import Cta1 from "@/components/sections/Cta1";
import Faqs1 from "@/components/sections/Faqs1";
import Features4 from "@/components/sections/Features4";
import Features5 from "@/components/sections/Features5";
import Hero2 from "@/components/sections/Hero2";
import HowItWork1 from "@/components/sections/HowItWork1";
import LogoCloud2 from "@/components/sections/LogoCloud2";
import Pricing3 from "@/components/sections/Pricing3";
import Static1 from "@/components/sections/Static1";
import Team2 from "@/components/sections/Team2";
import Testimonial1 from "@/components/sections/Testimonial1";
import Services4 from "@/components/sections/Services4";
import Services2 from "@/components/sections/Services2";
import Features1 from "@/components/sections/Features1";
import Features7 from "@/components/sections/Features7";
import Newsletter2 from "@/components/sections/Newsletter2";
import Header2 from "@/components/layout/header/Header2";
import LogoCloud5 from "@/components/sections/LogoCloud5";
import Header from "@/components/layout/header/Header";

import Layout from "@/components/layout/Layout";
export default function Home2() {
  return (
    <>
      <Layout headerStyle={2} footerStyle={2}>
        <Hero2 />

        {/* Services Section */}
        <div id="services">
          <Services4 />

        </div>

        {/* Industry Section */}
        <div id="industry">
         <Services2 />
          <Features1 />
          <LogoCloud5 />
        </div>

        {/* Research Papers Section */}
        <div id="research">
          <Features7 />
        </div>

        {/* Pricing Section */}
        <div id="pricing">
          <Pricing3 />
        </div>

        {/* Additional Sections */}
        <Testimonial1 />
        <Newsletter2 />
      </Layout>
    </>
  );
}
