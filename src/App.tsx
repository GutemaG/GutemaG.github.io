import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Header from "./components/Header";
import PortfolioSection from "./components/PortfolioSection";
import RecentWorksSection from "./components/RecentWorksSection";
import SkillsSection from "./components/SkillSection";

function App() {
  return (
    <div className="bg-gray-50 md:p-12 sm:p-2 scroll:smooth">
      <Header />
      <PortfolioSection />
      <RecentWorksSection />
      <SkillsSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
}

export default App;
