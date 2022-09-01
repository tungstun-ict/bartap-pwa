import React from "react";
import TungstunMultiList from "../../../stories/multi-list/tungstun-multi-list.jsx";
import TungstunPage from "../../../stories/page/tungstun-page";
import TungstunStatistic from "../../../stories/statistic/tungstun-statistic";
import TungstunStatistics from "../../../stories/statistics/tungstun-statistics";
import TungstunTitle from "../../../stories/title/tungstun-title";

import "./owned-bar-page.module.scss";

function OwnedBarPage() {
  return (
    <TungstunPage>
      <TungstunTitle level={1} text="🍻 My bar" />
      <TungstunStatistics>
        <TungstunStatistic value={"€5921.90,-"} description={"Total revenue"} />
        <TungstunStatistic value={"Heineken vaasje"} description={"Most sold drink"} />
        <TungstunStatistic value={"Mojito"} description={"Most popular drink"} />
      </TungstunStatistics>
      <TungstunMultiList categories={[{
        displayName: "Hello",
      }]}/>
    </TungstunPage>
  );
}

export default OwnedBarPage;
