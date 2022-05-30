import React, { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import TungstunPage from "../../stories/page/tungstun-page";
import TungstunStatistic from "../../stories/statistic/tungstun-statistic";
import TungstunStatistics from "../../stories/statistics/tungstun-statistics";
import TungstunTitle from "../../stories/title/tungstun-title";
import TungstunSessionItem from "../../stories/list-item/tungstun-session-item";
import TungstunListView from "../../stories/list-view/tungstun-list-view";

const BarPage = () => {
  const { slug } = useParams();

  const bar = {
    name: "Test bar",
    debt: 20.45,
    slug: slug
  }

  const session = {
    id: "xxxxxxxxxxxx",
    date: "20-02-22",
    name: "Session 1",
    total: 20.1,
    payed: true,
  };

  return (
    <TungstunPage>
      <TungstunTitle text={`🍺 ${bar.name}`} level={1} back />
      <TungstunStatistics>
        <TungstunStatistic
          description={"Total dept"}
          value={`€${bar.debt},-`}
        />
        <TungstunStatistic
          description={"Most spent at one time"}
          value={`€${bar.debt},-`}
        />
        <TungstunStatistic
          description={"Favourite drink"}
          value={`Vodka martini`}
        />
      </TungstunStatistics>
      <TungstunTitle text={"📜 Current bill"} level={2} />
      <TungstunSessionItem session={session} />
      <TungstunTitle text={"🕐 Past bills"} level={2} />
      <TungstunListView>
        <TungstunSessionItem session={session} />
        <TungstunSessionItem session={session} />
        <TungstunSessionItem session={session} />
        <TungstunSessionItem session={session} />
        <TungstunSessionItem session={session} />
        <TungstunSessionItem session={session} />
        <TungstunSessionItem session={session} />
        <TungstunSessionItem session={session} />
      </TungstunListView>
    </TungstunPage>
  );
};

export default BarPage;
