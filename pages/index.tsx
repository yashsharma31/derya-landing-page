import NavBar from "./landing-page/navbar";
import HeroSection from "./landing-page/heroSection";
import SecondSection from "./landing-page/secondSection";
import ThirdSection from "./landing-page/thirdSection";
import FourthSection from "./landing-page/fourthSection";
import Footer from "./landing-page/footer";

export default function Home() {
  return (
    <div className="text-[#2B2118]">
      <NavBar />
      <HeroSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <Footer />
    </div>
  );
}
