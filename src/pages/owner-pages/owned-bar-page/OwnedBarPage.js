import React, { useEffect, useState } from "react";
import TungstunCustomerItem from "../../../stories/list-item/customer-item/tungstun-customer-item.tsx";
import TungstunSessionItem from "../../../stories/list-item/session-item/tungstun-session-item.tsx";
import TungstunMultiList from "../../../stories/multi-list/tungstun-multi-list.tsx";
import TungstunPage from "../../../stories/page/tungstun-page";
import TungstunStatistic from "../../../stories/statistic/tungstun-statistic";
import TungstunStatistics from "../../../stories/statistics/tungstun-statistics";
import TungstunTitle from "../../../stories/title/tungstun-title";

import "./owned-bar-page.scss";
import { useParams } from "react-router-dom";
import { getBarById, getCustomersOfBar, getSessionsOfBar } from "../../../services/BarApiService";

function OwnedBarPage() {
  const [loading, setLoading] = useState(true);
  const [bar, setBar] = useState({});
  const [customers, setCustomers] = useState([]);
  const [sessions, setSessions] = useState([]);

  const { barId } = useParams();

  useEffect(() => {
    async function fetchData() {
      setBar(await getBarById(barId));
      setCustomers(
        (await getCustomersOfBar(barId)).map((c) => {
          return <TungstunCustomerItem barId={barId} customer={c} />;
        })
      );
      setSessions(
        (await getSessionsOfBar(barId)).map((s) => {
          return <TungstunSessionItem session={s} />;
        })
      );
    }

    if (loading) fetchData();

    setLoading(false);
  }, [loading]);

  return (
    <TungstunPage>
      <TungstunTitle level={1} text={`🍻 ${bar.name}`} />
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
          },
        ]}
      />
    </TungstunPage>
  );
}

export default OwnedBarPage;
