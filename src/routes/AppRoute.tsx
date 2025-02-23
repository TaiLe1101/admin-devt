import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";

import { useEffect } from "react";
import { useAppSelector } from "../app/hooks";
import { selectToken } from "../features/auth/authSlice";
import DefaultLayout from "../layouts/DefaultLayout/DefaultLayout";
import PrivateRoute from "./PrivateRoute";
import routesConfig, { RouteConfig } from "./routeConfig";

export default function AppRoutes() {
  // const isAuthenticated = !!useAppSelector(selectToken);
  const isAuthenticated = true;
  const appName = "DevT Admin";

  console.log("isAuthenticated", isAuthenticated);

  // Hàm đệ quy để render các route và route con
  const renderRoutes = (routes: RouteConfig[]) =>
    routes.map(
      ({
        path,
        layout: Layout,
        component,
        title,
        name,
        private: isPrivate,
        breadcrumb,
        menus,
      }) => {
        const Element = component;

        // Create content based on whether there's a layout or not
        const ContentWithLayout = () => {
          if (Layout === null) {
            return <Element />;
          }

          const LayoutComponent = Layout || DefaultLayout;
          return (
            <LayoutComponent menu={menus} breadcrumb={breadcrumb}>
              <Element />
            </LayoutComponent>
          );
        };

        return (
          <Route
            key={name}
            path={path}
            element={
              isPrivate ? (
                <PrivateRoute isAuthenticated={isAuthenticated}>
                  <RouteWithTitle title={title} appName={appName}>
                    <ContentWithLayout />
                  </RouteWithTitle>
                </PrivateRoute>
              ) : (
                <RouteWithTitle title={title} appName={appName}>
                  <ContentWithLayout />
                </RouteWithTitle>
              )
            }
          />
        );
      }
    );

  return (
    <Router>
      <Routes>{renderRoutes(routesConfig)}</Routes>
    </Router>
  );
}

interface RouteWithTitleProps {
  title: string;
  appName: string;
  children: React.ReactNode;
}

// Component để cập nhật title của trang
const RouteWithTitle = ({ title, appName, children }: RouteWithTitleProps) => {
  const location = useLocation();

  useEffect(() => {
    // Cập nhật document.title khi location thay đổi
    document.title = `${appName} - ${title}`;
  }, [appName, location, title]);

  return <>{children}</>;
};
