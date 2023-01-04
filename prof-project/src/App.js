import Sidebar from "./components/Sidebar";
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
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import RequireAuth from "./components/RequireAuth";
const ROLES = {
  User: 2001,
  Editor: 1984,
  Admin: 5150,
};
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="login" element={<LoginPage />} />

        <Route
          element={<RequireAuth allowedRoles={[ROLES.Admin, ROLES.User]} />}
        >
          <Route
            path="dashboard"
            element={
              <div className="mt-4 w-1200 ">
                <div className="2xl:ml-72 xl:ml-72 ml-24">
                  <Sidebar />
                  <DashBoardPage />
                </div>
              </div>
            }
          />
        </Route>
        <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
          <Route
            path="device"
            element={
              <div className="mt-4 w-1200 ">
                <div className="2xl:ml-72 xl:ml-72 ml-24">
                  <Sidebar />
                  <DevicePage />
                </div>
              </div>
            }
          />
        </Route>

        <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
          <Route
            path="firm"
            element={
              <div className="mt-4 w-1200 ">
                <div className="2xl:ml-72 xl:ml-72 ml-24">
                  <Sidebar />
                  <FirmPage />
                </div>
              </div>
            }
          />
        </Route>

        <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
          <Route
            path="product"
            element={
              <div className="mt-4 w-1200 ">
                <div className="2xl:ml-72 xl:ml-72 ml-24">
                  <Sidebar />
                  <ProductPage />
                </div>
              </div>
            }
          />
        </Route>

        <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
          <Route
            path="order"
            element={
              <div className="mt-4 w-1200 ">
                <div className="2xl:ml-72 xl:ml-72 ml-24">
                  <Sidebar />
                  <OrderPage />
                </div>
              </div>
            }
          />
        </Route>

        <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
          <Route
            path="delivery"
            element={
              <div className="mt-4 w-1200 ">
                <div className="2xl:ml-72 xl:ml-72 ml-24">
                  <Sidebar />
                  <DeliveryPage />
                </div>
              </div>
            }
          />
        </Route>
        <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
          <Route
            path="stock"
            element={
              <div className="mt-4 w-1200 ">
                <div className="2xl:ml-72 ml-24">
                  <Sidebar />
                  <StockPage />
                </div>
              </div>
            }
          />
        </Route>
        <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
          <Route
            path="store"
            element={
              <div className="mt-4 w-1200 ">
                <div className="2xl:ml-72 xl:ml-72 ml-24">
                  <Sidebar />
                  <StorePage />
                </div>
              </div>
            }
          />
        </Route>
        <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
          <Route
            path="bill"
            element={
              <div className="mt-4 w-1200 ">
                <div className="2xl:ml-72 xl:ml-72 ml-24">
                  <Sidebar />
                  <BillPage />
                </div>
              </div>
            }
          />
        </Route>
        <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
          <Route
            path="users"
            element={
              <div className="mt-4 w-1200 ">
                <div className="2xl:ml-72 xl:ml-72 ml-24">
                  <Sidebar />
                  <UsersPage />
                </div>
              </div>
            }
          />
        </Route>
        <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
          <Route
            path="report"
            element={
              <div className="mt-4 w-1200 ">
                <div className="2xl:ml-72 xl:ml-72 ml-24">
                  <Sidebar />
                  <ReportPage />
                </div>
              </div>
            }
          />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
