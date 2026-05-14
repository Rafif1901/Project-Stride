import NavigationBar from "./components/navigationbar";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Sponsors from "./components/Sponsors";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col font-sans relative min-h-screen bg-stride-bg">
      <NavigationBar />
      <Hero />
      <AboutUs />
      <Sponsors />
      <Footer />
    </div>
  );
}