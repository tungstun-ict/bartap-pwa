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
      <TungstunNotificationProvider>
        <Routes location={location} key={location.pathname}>
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/auth/login" element={<LoginPage />} />
          <Route path="/bar/:slug" element={<BarPage />} />
          <Route path="/session/:id" element={<SessionPage />} />
          <Route path="/bar/add" element={<ScanPage />} />
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
