import "./App.css";
import CoreFeature from "./components/CoreFeature";
import Cta from "./components/Cta";
import FeatureOne from "./components/FeatureOne";
import FeatureTwo from "./components/FeatureTwo";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import JoinRazorPay from "./components/JoinRazorPay";
import NavBar from "./components/NavBar";
import NewFeature from "./components/NewFeature";

function App() {
  return (
    <div className="overflow-x-hidden relative w-full">
      <NavBar/>
      <HeroSection/>
      <FeatureOne/>
      <FeatureTwo/>
      <NewFeature/>
      <CoreFeature/>
      <JoinRazorPay/>
      <Cta/>
      <Footer/>
    </div>
  );
}

export default App;
