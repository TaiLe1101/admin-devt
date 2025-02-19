import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout/DefaultLayout";
import Home from "./pages/Home/Home";
import SystemConfig from "./pages/SystemConfig/SystemConfig";
import { breadcrumbSystemConfig } from "./pages/SystemConfig/data/breadcrumb";
import { systemConfigMenu } from "./pages/SystemConfig/data/menu";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <DefaultLayout>
              <Home />
            </DefaultLayout>
          }
        />
        <Route
          path="/system-config"
          element={
            <DefaultLayout
              menu={systemConfigMenu}
              breadcrumb={breadcrumbSystemConfig}
            >
              <SystemConfig />
            </DefaultLayout>
          }
        />
      </Routes>
    </Router>
  );
}
