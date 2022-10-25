import React, { useEffect, useState } from "react";
import TungstunCustomerItem from "../../../stories/list-item/customer-item/tungstun-customer-item.tsx";
import TungstunSessionItem from "../../../stories/list-item/session-item/tungstun-session-item.tsx";
import TungstunMultiList from "../../../stories/multi-list/tungstun-multi-list.tsx";
import TungstunPage from "../../../stories/page/tungstun-page";
import TungstunStatistic from "../../../stories/statistic/tungstun-statistic.tsx";
import TungstunStatistics from "../../../stories/statistics/tungstun-statistics";
import TungstunTitle from "../../../stories/title/tungstun-title";
import { sortNameAlphabet } from "../../../services/Utils.ts";

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
    totalSpent: 0,
    mostSoldProduct: {
      name: "...",
      brand: "...",
    },
    mostSoldProduct: {
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
          return <TungstunCustomerItem key={c.id} barId={barId} customer={c} />;
        })
      );
      setSessions(
        (await getSessionsOfBar(barId)).map((s) => {
          return <TungstunSessionItem key={s.id} session={s} />;
        })
      );
      
    }

    async function fetchStatistics() {
      var statisticsResponse = await getStatisticsOfBar(barId);
      setStatistics(statisticsResponse);
    }

    if (loading) {
      fetchData().finally(() => setLoading(false));
      fetchStatistics();
    }

  }, [loading, barId]);

  const addCustomer = () => {
    console.log("add customer");
  };

  const sortCustomersByName = (customers) => {
    return customers.sort((a, b) => {
      return a.props.customer.name.localeCompare(b.props.customer.name);
    })
  }

  const sortSessionByDate = (sessions) => {
    return sessions.sort((a, b) => {
      return new Date(b.props.session.creationDate).getTime() - new Date(a.props.session.creationDate).getTime();
    })
  }

  return (
    <TungstunPage loading={loading}>
      <TungstunTitle level={1} text={`🍻 ${bar.name}`} />
      <TungstunStatistics>
        <TungstunStatistic
          value={`€${statistics.totalSpent.toFixed(2)},-`}
          description={"Total revenue"}
        />
        <TungstunStatistic
          value={`${statistics.mostSoldProduct.brand} ${statistics.mostSoldProduct.name}`}
          description={"Most sold / all time"}
        />
      </TungstunStatistics>
      <TungstunMultiList
        className={"owned-bar-page__multiList"}
        categories={[
          {
            displayName: "🧑 Customers",
            data: sortCustomersByName(customers),
            addIcon: require("../../../assets/icons/plus-light.png"),
            onAdd: addCustomer,
          },
          {
            displayName: "🕰️ Sessions",
            data: sortSessionByDate(sessions),
          },
        ]}
      />
    </TungstunPage>
  );
}

export default OwnedBarPage;
