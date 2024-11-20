import "./App.css";
import Darkmode from "./lib/Darkmode";
import IndexRoute from "./lib/IndexRoute";

function App() {
  return (
    <div className=" bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 h-screen overflow-auto md:overflow-hidden">
      <Darkmode />
      <div className="">
        <IndexRoute />
      </div>
    </div>
  );
}

export default App;
