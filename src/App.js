import "./App.scss";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import LoginPage from "./pages/login-page/LoginPage";
import HomePage from "./pages/home-page/HomePage";
import { AnimatePresence } from "framer-motion";
import NotFoundPage from "./pages/not-found-page/NotFoundPage";
import BarPage from "./pages/bar-page/BarPage";
import SessionPage from "./pages/session-page/SessionPage";
import ScanPage from "./pages/scan-page/ScanPage";
import { TungstunNotificationProvider } from "./stories/notification/tungstun-notification-provider";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <TungstunNotificationProvider key={location.pathname} >
        <Routes location={location} key={location.pathname} >
          <Route path="*" element={<NotFoundPage />} key={location.pathname} />
          <Route path="/" element={<HomePage />} key={location.pathname} />
          <Route path="/auth/login" element={<LoginPage />} key={location.pathname} />
          <Route path="/bar/:slug" element={<BarPage />} key={location.pathname} />
          <Route path="/session/:id" element={<SessionPage />} key={location.pathname} />
          <Route path="/bar/add" element={<ScanPage />} key={location.pathname} />
        </Routes>
      </TungstunNotificationProvider>
    </AnimatePresence>
  );
};

function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;
