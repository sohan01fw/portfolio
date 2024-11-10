import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Projects from "../components/Projects";
import Home from "../components/Home";

export default function IndexRoute() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}
