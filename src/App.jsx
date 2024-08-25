import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/ui/Navbar";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import Workflow from "./components/Workflow";
import Pricing from "./components/Pricing";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";
 
 

function App() {
  return (
    <>
     
     <Navbar/>
     <div className="max-w-7xl mx-auto pt-20 px-6">
      <HeroSection/>
      <FeaturesSection/>
      <Workflow/>
      <Pricing/>
      <Testimonial/>
      <Footer/>
      </div>

     
    </>
  );
}

export default App;
