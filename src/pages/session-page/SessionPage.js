import React from "react";
import { useParams } from "react-router-dom";
import TungstunPage from "../../stories/page/tungstun-page";
import TungstunStatistic from "../../stories/statistic/tungstun-statistic";
import TungstunStatistics from "../../stories/statistics/tungstun-statistics";
import TungstunTitle from "../../stories/title/tungstun-title";
import TungstunListView from "../../stories/list-view/tungstun-list-view";
import TungstunOrderItem from "../../stories/list-item/tungstun-order-item";

const SessionPage = () => {
  const { id } = useParams();

  const session = {
    id: id,
    date: "20-02-22",
    name: "Session 1",
    total: 20.19,
    payed: true,
  };

  const order = {
    product: {
      name: "Vaasje",
      brand: "Heineken",
      price: 5.49,
    },
    timestamp: Date.now(),
    total: 10.98,
    amount: 2,
  };

  return (
    <TungstunPage authenticated>
      <TungstunTitle text={`📜 ${session.name}`} level={1} back />
      <TungstunStatistics>
        <TungstunStatistic description="Total" value={`€${session.total},-`} />
        <TungstunStatistic description="Status" value={`Payed`} />
      </TungstunStatistics>
      <TungstunTitle text={`🍽️ Orders`} level={2} />
      <TungstunListView>
        <TungstunOrderItem order={order} />
        <TungstunOrderItem order={order} />
        <TungstunOrderItem order={order} />
        <TungstunOrderItem order={order} />
        <TungstunOrderItem order={order} />
        <TungstunOrderItem order={order} />
        <TungstunOrderItem order={order} />
      </TungstunListView>
    </TungstunPage>
  );
};

export default SessionPage;
