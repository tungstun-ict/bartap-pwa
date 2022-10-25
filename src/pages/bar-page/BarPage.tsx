import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import TungstunPage from "../../stories/page/tungstun-page";
import TungstunStatistic from "../../stories/statistic/tungstun-statistic";
import TungstunStatistics from "../../stories/statistics/tungstun-statistics";
import TungstunTitle from "../../stories/title/tungstun-title";
import TungstunSessionItem from "../../stories/list-item/session-item/tungstun-session-item";
import TungstunListView from "../../stories/list-view/tungstun-list-view";
import { Bar } from "./BarPage.specs";
import { getBarById, getMyBillsByBarId, getMyActiveBillByBarId } from "../../services/BarApiService";
import { Bill } from "./BarPage.specs";
import TungstunBillItem from "../../stories/list-item/bill-item/tungstun-bill-item";

const BarPage = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [bar, setBar] = useState<Bar>({ id: "0", name: "...", debt: 0 });
  const [bills, setBills] = useState<Bill[]>([]);
  const [activeBill, setActiveBill] = useState<Bill>(null);
  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      const response: Bar = await getBarById(id);
      const billsResponse: Bill[] = await getMyBillsByBarId(id);
      const activeBillResponse: Bill = await getMyActiveBillByBarId(id);
      setActiveBill(activeBillResponse);
      console.log(billsResponse)

      setBar(response);
      setBills(sortBillsByDate(billsResponse));
    }

    if (loading) {
      fetchData().finally(() => setLoading(false));
    }
  }, [loading]);

  const sortBillsByDate = (bills: Bill[]) => {
    return bills.sort((a, b) => {
      console.log(a)
      return new Date(b.session.date).getTime() - new Date(a.session.date).getTime();
    });
  }

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
      {activeBill && (<TungstunBillItem bill={activeBill} />)}
      <TungstunTitle text={"🕐 All bills"} level={2} />
      <TungstunListView>
        {bills.map((bill) => (
          <TungstunBillItem bill={bill} />
        ))}
      </TungstunListView>
    </TungstunPage>
  );
};

export default BarPage;
