import Sidebar from "./components/Sidebar";
import Route from "./components/Route";
import DevicePage from "./pages/DevicePage.js";
import DashBoardPage from "./pages/DashBoardPage";
import FirmPage from "./pages/FirmPage";
import ProductPage from "./pages/ProductPage";
import OrderPage from "./pages/OrderPage";
import DeliveryPage from "./pages/DeliveryPage";
import StockPage from "./pages/StockPage";
import StorePage from "./pages/StorePage";
import BillPage from "./pages/BillPage";
import UsersPage from "./pages/UsersPage";
import ReportPage from "./pages/ReportPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <div>
      <Route path="/">
        <LoginPage />
      </Route>
      <div className="mt-4 w-1200 ">
        <div className="2xl:ml-72 ml-24">
          <Route path="/device">
            <Sidebar />
            <DevicePage />
          </Route>
          <Route path="/dashboard">
            <Sidebar />

            <DashBoardPage />
          </Route>
          <Route path="/firm">
            <Sidebar />

            <FirmPage />
          </Route>
          <Route path="/product">
            <Sidebar />

            <ProductPage />
          </Route>
          <Route path="/order">
            <Sidebar />

            <OrderPage />
          </Route>
          <Route path="/delivery">
            <Sidebar />

            <DeliveryPage />
          </Route>
          <Route path="/store">
            <Sidebar />

            <StorePage />
          </Route>
          <Route path="/stock">
            <Sidebar />

            <StockPage />
          </Route>
          <Route path="/bill">
            <Sidebar />

            <BillPage />
          </Route>
          <Route path="/user">
            <Sidebar />

            <UsersPage />
          </Route>
          <Route path="/report">
            <Sidebar />

            <ReportPage />
          </Route>
        </div>
      </div>
    </div>
  );
}

export default App;
