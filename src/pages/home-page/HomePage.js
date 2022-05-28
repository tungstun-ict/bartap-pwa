import React from "react";
import { Link } from "react-router-dom";
import TungstunPage from "../../stories/page/tungstun-page";
import TungstunHeader from "../../stories/header/tungstun-header";

import "./home-page.scss";
import TungstunTitle from "../../stories/title/tungstun-title";
import TungstunStatistic from "../../stories/statistic/tungstun-statistic";
import TungstunListView from "../../stories/list-view/tungstun-list-view";
import TungstunBarItem from "../../stories/list-item/tungstun-bar-item";
import TungstunAddBarItem from "../../stories/list-item/tungstun-add-bar-item";

import TungstunStatistics from "../../stories/statistics/tungstun-statistics";

const HomePage = () => {
  const bar = {
    name: "Test Bar",
    debt: 20.49,
  };
  
  return (
    <TungstunPage>
      <TungstunTitle text={"🏠 Home"} level={1} />
      <TungstunStatistics>
        <TungstunStatistic value={"€40,50"} description="Open tap" />
        <TungstunStatistic value={"€230,50"} description="Total spent" />
        <TungstunStatistic value={"Vodka Martini"} description="Favorite drink"/>
      </TungstunStatistics>
      <TungstunTitle text="🍺 My bars" level={2} />
      <TungstunListView>
        <TungstunBarItem bar={bar} link="/test-bar" />
        <TungstunBarItem bar={bar} link="/test-bar" />
        <TungstunBarItem bar={bar} link="/test-bar" />
        <TungstunBarItem bar={bar} link="/test-bar" />
        <TungstunBarItem bar={bar} link="/test-bar" />
        <TungstunBarItem bar={bar} link="/test-bar" />
        <TungstunBarItem bar={bar} link="/test-bar" />
        <TungstunAddBarItem />
      </TungstunListView>
    </TungstunPage>
  );
}

export default HomePage;
