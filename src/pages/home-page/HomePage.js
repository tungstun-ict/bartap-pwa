import React from "react";
import { Link } from "react-router-dom";
import TungstunPage from "../../stories/page/tungstun-page";
import TungstunHeader from "../../stories/header/tungstun-header";

import "./home-page.scss";
import TungstunTitle from "../../stories/title/tungstun-title";
import TungstunStatistic from "../../stories/statistic/tungstun-statistic";

function HomePage() {
  return (
    <TungstunPage>
      <TungstunTitle text={"🏠 Home"} level={1} />
      <TungstunStatistic value={"€40,50"} description="Open tap" />
    </TungstunPage>
  );
}

export default HomePage;
