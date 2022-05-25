import React from "react";
import { Link } from "react-router-dom";
import TungstunPage from "../../stories/page/tungstun-page";
import TungstunHeader from "../../stories/header/tungstun-header"

import "./home-page.scss";

function HomePage() {
  return (
    <TungstunPage>
      <nav>
        <Link to="/auth/login">LOGIN</Link>
      </nav>
    </TungstunPage>
  );
}

export default HomePage;
