import HeroSection from "../components/sections/HeroSection";
import AboutSection from "../components/sections/AboutSection";
import SkillsSection from "../components/sections/SkillsSection";

/**
 * HomePage — Notion-style page: Profile → About → Skills
 */
const HomePage = () => {
  return (
    <div className="max-w-3xl mx-auto px-6 md:px-10 py-10">
      {/* Page icon + title (Notion page header style) */}
      <div className="mb-8">
        <div className="text-5xl mb-3 select-none">🧑‍💻</div>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
          About Me
        </h1>
        <p className="text-sm text-gray-400 dark:text-gray-600 mt-1">
          Full-stack developer · Nepal
        </p>
      </div>

      <div className="border-t border-gray-100 dark:border-gray-800 mb-8" />

      <HeroSection />
      <AboutSection />
      <SkillsSection />
    </div>
  );
};

export default HomePage;
