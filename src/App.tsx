import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout/DefaultLayout";
import Home from "./pages/Home/Home";
import SystemConfig from "./pages/SystemConfig/SystemConfig";
import systemConfigMenu from "./pages/SystemConfig/data/menu.json";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <DefaultLayout menu={[]}>
              <Home />
            </DefaultLayout>
          }
        />
        <Route
          path="/system-config"
          element={
            <DefaultLayout menu={systemConfigMenu}>
              <SystemConfig />
            </DefaultLayout>
          }
        />
      </Routes>
    </Router>
  );
}
