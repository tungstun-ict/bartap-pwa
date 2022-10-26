import "./App.scss";
import { useAdobeFonts } from "react-adobe-fonts";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import LoginPage from "./pages/login-page/LoginPage";
import HomePage from "./pages/home-page/HomePage.tsx";
import { AnimatePresence } from "framer-motion";
import NotFoundPage from "./pages/not-found-page/NotFoundPage";
import BarPage from "./pages/bar-page/BarPage.tsx";
import SessionPage from "./pages/owner-pages/session-page/SessionPage.tsx";
import ScanPage from "./pages/scan-page/ScanPage";
import AccountPage from "./pages/account-page/AccountPage.tsx";
import DebugPage from "./pages/debug-page/DebugPage";
import { TungstunNotificationProvider } from "./stories/notification/tungstun-notification-provider";
import RegisterPage from "./pages/register-page/RegisterPage";
import OwnedBarPage from "./pages/owner-pages/owned-bar-page/OwnedBarPage";
import CustomerPage from "./pages/customer-page/CustomerPage.tsx";
import ScrollToTop from "./utils/ScrollToTop.tsx";
import DonationPage from './pages/donation-page/DonationPage';

const AnimatedRoutes = () => {
  const location = useLocation();

  useAdobeFonts({ kitId: "opl2xhz" });

  return (
    <TungstunNotificationProvider>
      <AnimatePresence exitBeforeEnter>
        <ScrollToTop />
        <Routes location={location} key={location.pathname}>
          <Route path="*" element={<NotFoundPage />} key={location.pathname} />
          <Route path="/" element={<HomePage />} key={location.pathname} />
          <Route
            path="/auth/login"
            element={<LoginPage />}
            key={location.pathname}
          />
          <Route
            path="/auth/register"
            element={<RegisterPage />}
            key={location.pathname}
          />
          <Route
            path="/bar/:id"
            element={<BarPage />}
            key={location.pathname}
          />
          <Route
            path="/bar/:barId/customer/:customerId"
            element={<CustomerPage />}
            key={location.pathname}
          />
          <Route
            path="/bar/:barId/session/:sessionId/bill/:billId"
            element={<SessionPage />}
            key={location.pathname}
          />
          <Route
            path="/bar/add"
            element={<ScanPage />}
            key={location.pathname}
          />
          <Route
            path="/debug"
            element={<DebugPage />}
            key={location.pathname}
          />
          <Route
            path="/account"
            element={<AccountPage />}
            key={location.pathname}
          />
          <Route
            path="/my-bar/:barId"
            element={<OwnedBarPage />}
            key={location.pathname}
          />
          <Route
            path="/donate"
            element={<DonationPage />}
            key={location.pathname}
          />
        </Routes>
      </AnimatePresence>
    </TungstunNotificationProvider>
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
