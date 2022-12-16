import Sidebar from "./components/Sidebar";
import Route from "./components/Route";
import DevicePage from "./pages/DevicePage.js";

function App() {
  return (
    <div className="mt-4 w-1200 ">
      <Sidebar />
      <div className="ml-72">
        <Route path="/device">
          <DevicePage />
        </Route>
      </div>
    </div>
  );
}

export default App;
