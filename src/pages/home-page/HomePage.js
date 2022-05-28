import React from "react";
import { Link } from "react-router-dom";
import TungstunPage from "../../stories/page/tungstun-page";
import TungstunHeader from "../../stories/header/tungstun-header";

import "./home-page.scss";
import TungstunTitle from "../../stories/title/tungstun-title";
import TungstunStatistic from "../../stories/statistic/tungstun-statistic";
import TungstunListView from "../../stories/list-view/tungstun-list-view";
import TungstunListItem from "../../stories/list-item/tungstun-list-item";

function HomePage() {
  return (
    <TungstunPage>
      <TungstunTitle text={"🏠 Home"} level={1} />
      <TungstunStatistic value={"€40,50"} description="Open tap" />
      <TungstunTitle text="Current bill" level={2} marginVertical={20} />
      <TungstunListItem borderColor={"blue"} />
      <TungstunTitle text="Past bills" level={2} marginVertical={20} />
      <TungstunListView>
        <TungstunListItem borderColor={"blue"} />
        <TungstunListItem borderColor={"blue"} />
        <TungstunListItem borderColor={"blue"} />
        <TungstunListItem borderColor={"blue"} />
        <TungstunListItem borderColor={"blue"} />
        <TungstunListItem borderColor={"blue"} />
        <TungstunListItem borderColor={"blue"} />
      </TungstunListView>
    </TungstunPage>
  );
}

export default HomePage;
