import React from "react";
import { useNavigate } from "react-router-dom";
import TungstunPage from "../../stories/page/tungstun-page";

import "./home-page.scss";
import TungstunTitle from "../../stories/title/tungstun-title";
import TungstunTextButton from "../../stories/text-button/tungstun-text-button";

import TungstunStatistic from "../../stories/statistic/tungstun-statistic";
import TungstunListView from "../../stories/list-view/tungstun-list-view";
import TungstunBarItem from "../../stories/list-item/tungstun-bar-item";

import TungstunStatistics from "../../stories/statistics/tungstun-statistics";
import TungstunBottomContainer from "../../stories/bottom-container/tungstun-bottom-container";

const HomePage = () => {
  const navigate = useNavigate();
  const bar = {
    name: "Test Bar",
    debt: 20.49,
    slug: "test-bar",
  };

  const handleClick = () => {
    navigate("/bar/add");
  };

  return (
    <TungstunPage authenticated>
      <TungstunTitle text={"🏠 Home"} level={1} />
      <TungstunStatistics>
        <TungstunStatistic value={"€40,50"} description="Open tap" />
        <TungstunStatistic value={"€230,50"} description="Total spent" />
      </TungstunStatistics>
      <TungstunTitle text="🍺 My bars" level={2} />
      <TungstunListView>
        <TungstunBarItem bar={bar} />
        <TungstunBarItem bar={bar} />
        <TungstunBarItem bar={bar} />
        <TungstunBarItem bar={bar} />
        <TungstunBarItem bar={bar} />
        <TungstunBarItem bar={bar} />
        <TungstunBarItem bar={bar} />
        <TungstunBarItem bar={bar} />
        <TungstunBarItem bar={bar} />
        <TungstunBarItem bar={bar} />
        <TungstunBarItem bar={bar} />
        <TungstunBarItem bar={bar} />
        <TungstunBarItem bar={bar} />
      </TungstunListView>
      <TungstunBottomContainer>
        <TungstunTextButton
          className={"add-bar-button"}
          text="Add new bar"
          width="100%"
          onClick={handleClick}
        />
      </TungstunBottomContainer>
    </TungstunPage>
  );
};

export default HomePage;
