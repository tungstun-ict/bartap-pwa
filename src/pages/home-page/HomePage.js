import React from "react";
import { Link } from "react-router-dom";
import TungstunPage from "../../stories/page/tungstun-page";
import TungstunHeader from "../../stories/header/tungstun-header"

import "./home-page.scss";
import TungstunTitle from "../../stories/title/tungstun-title";

function HomePage() {
  return (
    <TungstunPage>
      <TungstunTitle text={"My bars"} level={1}/>
      <nav>
        <Link to="/auth/login">LOGIN</Link>
      </nav>
    </TungstunPage>
  );
}

export default HomePage;
