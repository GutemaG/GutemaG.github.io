import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import { Header } from "./components/Header";
import PortfolioSection from "./components/PortfolioSection";
import RecentWorksSection from "./components/RecentWorksSection";

function App() {
  return (
    <div className="bg-gray-100 py-16" >
      <Header />
      <PortfolioSection />
      <RecentWorksSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
}

export default App;
