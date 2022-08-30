import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const root = ReactDOM.createRoot(document.getElementById("root"));

const firebaseConfig = {
  apiKey: "AIzaSyCzmaCnTEQmdaqsAvWdvWpRx0pRzkgyeSc",
  authDomain: "bartap-a52c6.firebaseapp.com",
  projectId: "bartap-a52c6",
  storageBucket: "bartap-a52c6.appspot.com",
  messagingSenderId: "466416251689",
  appId: "1:466416251689:web:9ea3384396e3f98cc57d38",
  measurementId: "G-TG5T1NWKQV",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

root.render(
  <React.StrictMode>
    <link rel="stylesheet" href="https://use.typekit.net/opl2xhz.css"></link>
    <App />
  </React.StrictMode>
);

reportWebVitals();
