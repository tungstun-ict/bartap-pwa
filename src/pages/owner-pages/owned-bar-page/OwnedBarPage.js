import React, { useEffect, useState } from "react";
import TungstunCustomerItem from "../../../stories/list-item/customer-item/tungstun-customer-item.tsx";
import TungstunSessionItem from "../../../stories/list-item/session-item/tungstun-session-item.tsx";
import TungstunMultiList from "../../../stories/multi-list/tungstun-multi-list.tsx";
import TungstunPage from "../../../stories/page/tungstun-page";
import TungstunStatistic from "../../../stories/statistic/tungstun-statistic";
import TungstunStatistics from "../../../stories/statistics/tungstun-statistics";
import TungstunTitle from "../../../stories/title/tungstun-title";
import { sleep, sortNameAlphabet } from "../../../services/Utils.ts";

import "./owned-bar-page.scss";
import { useParams } from "react-router-dom";
import {
  getBarById,
  getCustomersOfBar,
  getSessionsOfBar,
  getStatisticsOfBar,
} from "../../../services/BarApiService";

function OwnedBarPage() {
  const [loading, setLoading] = useState(true);
  const [bar, setBar] = useState({});
  const [customers, setCustomers] = useState([]);
  const [sessions, setSessions] = useState([]);
  const [statistics, setStatistics] = useState({
    totalSpentOfAllTime: 0,
    mostSoldProductOfAllTime: {
      name: "...",
      brand: "...",
    },
    mostSoldProductOfLastMonth: {
      name: "...",
      brand: "...",
    },
  });

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
      setStatistics(await getStatisticsOfBar(barId));
    }

    if (loading) {
      fetchData().finally(() => setLoading(false));
    }
  }, [loading]);

  return (
    <TungstunPage loading={loading}>
      <TungstunTitle level={1} text={`🍻 ${bar.name}`} />
      <TungstunStatistics>
        <TungstunStatistic
          value={`€${statistics.totalSpentOfAllTime},-`}
          description={"Total revenue"}
        />
        <TungstunStatistic
          value={`${statistics.mostSoldProductOfAllTime.brand} ${statistics.mostSoldProductOfAllTime.name}`}
          description={"Most sold / all time"}
        />
        <TungstunStatistic
          value={`${statistics.mostSoldProductOfLastMonth.brand} ${statistics.mostSoldProductOfLastMonth.name}`}
          description={"Most sold / month"}
        />
      </TungstunStatistics>
      <TungstunMultiList
        className={"owned-bar-page__multiList"}
        categories={[
          {
            displayName: "🧑 Customers",
            data: sortNameAlphabet(customers),
          },
          {
            displayName: "🕰️ Sessions",
            data: sortNameAlphabet(sessions),
          },
        ]}
      />
    </TungstunPage>
  );
}

export default OwnedBarPage;
