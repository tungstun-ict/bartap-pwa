import React from "react";
import { Link } from "react-router-dom";
import TungstunPage from "../../stories/page/tungstun-page";
import TungstunHeader from "../../stories/header/tungstun-header";

import "./home-page.scss";
import TungstunTitle from "../../stories/title/tungstun-title";
import TungstunStatistic from "../../stories/statistic/tungstun-statistic";
import TungstunListView from "../../stories/list-view/tungstun-list-view";
import TungstunListItem from "../../stories/list-item/tungstun-list-item";
import TungstunSessionItem from "../../stories/list-item/tungstun-session-item";
import TungstunStatistics from "../../stories/statistics/tungstun-statistics";

function HomePage() {
  return (
    <TungstunPage>
      <TungstunTitle text={"🏠 Home"} level={1} />
      <TungstunStatistics>
        <TungstunStatistic value={"€40,50"} description="Open tap" />
        <TungstunStatistic value={"€230,50"} description="Total spent" />
      </TungstunStatistics>
      <TungstunTitle text="Current bill" level={2} marginVertical={20} />
      <TungstunSessionItem session={session} />
      <TungstunTitle text="Past bills" level={2} marginVertical={20} />
      <TungstunListView>
        <TungstunSessionItem session={session} />
        <TungstunSessionItem session={session2} />
        <TungstunSessionItem session={session2} />
        <TungstunSessionItem session={session} />
        <TungstunSessionItem session={session2} />
        <TungstunSessionItem session={session} />
      </TungstunListView>
    </TungstunPage>
  );
}

const session = {
  date: "20-12-22",
  name: "Session one",
  total: "20,50",
  payed: true,
};

const session2 = {
  date: "10-05-23",
  name: "Session two",
  total: "18,47",
  payed: false,
};

export default HomePage;
