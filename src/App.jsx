import "./App.css";
import { useTheme } from "./lib/hooks/useTheme";
import IndexRoute from "./lib/IndexRoute";

/**
 * App — Root component.
 * Manages theme state via useTheme hook and passes it to the router/layout.
 */
function App() {
  const { isDark, toggle } = useTheme();

  return (
    <IndexRoute isDark={isDark} onToggleTheme={toggle} />
  );
}

export default App;
