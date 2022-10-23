import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import TungstunPage from "../../stories/page/tungstun-page";
import TungstunStatistic from "../../stories/statistic/tungstun-statistic.tsx";
import TungstunStatistics from "../../stories/statistics/tungstun-statistics";
import TungstunTitle from "../../stories/title/tungstun-title";
import TungstunSessionItem from "../../stories/list-item/session-item/tungstun-session-item.tsx";
import TungstunListView from "../../stories/list-view/tungstun-list-view";
import { Bar } from "./BarPage.specs.ts";
import { getBarById } from "../../services/BarApiService";
import { Bill } from "./BarPage.specs";

const BarPage = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [bar, setBar] = useState<Bar>({ id: "0", name: "...", bills: [] });
  const [bills, setBills] = useState<Bill[]>([]);
  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      const response: Bar = await getBarById(id);
      console.log(id);
      setBar(response);
    }

    if (loading) {
      fetchData().finally(() => setLoading(false));
    }
  }, [loading]);

  return (
    <TungstunPage authenticated loading={loading}>
      <TungstunTitle text={`🍺 ${bar.name}`} level={1} back />
      <TungstunStatistics>
        <TungstunStatistic
          description={"Total debt"}
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
      <TungstunTitle text={"🕐 Past bills"} level={2} />
      <TungstunListView>
      </TungstunListView>
    </TungstunPage>
  );
};

export default BarPage;
