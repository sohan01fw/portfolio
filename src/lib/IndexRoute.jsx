import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PageLayout from "../components/layout/PageLayout";
import HomePage from "../pages/HomePage";
import ProjectsPage from "../pages/ProjectsPage";
import ProjectDetailPage from "../pages/ProjectDetailPage";

/**
 * IndexRoute — App router wrapped in the shared PageLayout shell.
 * Routes:
 *   /             → HomePage
 *   /projects     → ProjectsPage (gallery)
 *   /projects/:id → ProjectDetailPage (case study)
 */
const IndexRoute = ({ isDark, onToggleTheme }) => {
  return (
    <Router>
      <PageLayout isDark={isDark} onToggleTheme={onToggleTheme}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:id" element={<ProjectDetailPage />} />
        </Routes>
      </PageLayout>
    </Router>
  );
};

export default IndexRoute;
