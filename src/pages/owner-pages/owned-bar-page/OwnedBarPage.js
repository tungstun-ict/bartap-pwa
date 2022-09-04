import React from "react";
import TungstunCustomerItem from "../../../stories/list-item/customer-item/tungstun-customer-item.tsx";
import TungstunSessionItem from "../../../stories/list-item/tungstun-session-item";
import TungstunMultiList from "../../../stories/multi-list/tungstun-multi-list.tsx";
import TungstunPage from "../../../stories/page/tungstun-page";
import TungstunStatistic from "../../../stories/statistic/tungstun-statistic";
import TungstunStatistics from "../../../stories/statistics/tungstun-statistics";
import TungstunTitle from "../../../stories/title/tungstun-title";

import "./owned-bar-page.scss";

function OwnedBarPage() {
  const customers = [
    <TungstunCustomerItem  customer={{
      firstName: "Jort",
      lastName: "Willemsen",
      id: "1",
    }}/>
  ];

  const sessions = [
    <TungstunSessionItem session={{
      id: 1,
      date: "20-02-22",
      name: "Session 1",
      total: 20.19,
      payed: true,
    }}/>
  ]
  return (
    <TungstunPage>
      <TungstunTitle level={1} text="🍻 My bar" />
      <TungstunStatistics>
        <TungstunStatistic value={"€5921.90,-"} description={"Total revenue"} />
        <TungstunStatistic
          value={"Heineken vaasje"}
          description={"Most sold drink"}
        />
        <TungstunStatistic
          value={"Mojito"}
          description={"Most popular drink"}
        />
      </TungstunStatistics>
      <TungstunMultiList
        className={"owned-bar-page__multiList"}
        categories={[
          {
            displayName: "🧑 Customers",
            data: customers,
          },
          {
            displayName: "🕰️ Sessions",
            data: sessions,
          }
        ]}
      />
    </TungstunPage>
  );
}

export default OwnedBarPage;
