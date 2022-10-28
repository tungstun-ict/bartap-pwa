import React, { useState, useEffect } from "react";
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
import { Bar, Bill, DefaultStatistics, Statistics } from "./HomePage.specs";
import {
  getConnectedBars,
  getMyActiveBillByBarId,
  getGlobalCustomerStatistics
} from "../../services/BarApiService";
import TungstunBillItem from "./../../stories/list-item/bill-item/tungstun-bill-item";

const HomePage = ({}) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [bars, setBars] = useState<Bar[]>([]);
  const [activeBills, setActiveBills] = useState<Bill[]>([]);
  const [statistics, setStatistics] = useState<Statistics>(DefaultStatistics);

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const barsResponse: Bar[] = await getConnectedBars();
      setBars(barsResponse);

      const statisticsResponse: Statistics = await getGlobalCustomerStatistics();
      setStatistics(statisticsResponse);

      barsResponse.forEach((bar: Bar) => {
        getMyActiveBillByBarId(bar.id).then((bill: Bill) => {
          bill.bar = bar;
          console.log(bill);
          setActiveBills([...activeBills, bill]);
        });
      });
    }

    if (loading) {
      fetchData().finally(() => setLoading(false));
    }
  }, [loading]);

  const handleClick = () => {
    navigate("/bar/add");
  };

  return (
    <TungstunPage authenticated loading={loading}>
      <TungstunTitle text={"🏠 Home"} level={1} />
      <TungstunStatistics className="statistics">
      <TungstunStatistic value={`€${statistics.mostExpensiveBill.totalPrice.toFixed(2)},- during '${statistics.mostExpensiveBill.session?.name}'`} description="Most expensive bill" />
      </TungstunStatistics>
      <TungstunStatistics>
        <TungstunStatistic value={`€${statistics.totalNotYetPayed.toFixed(2)},-`} description="Open tap" />
        <TungstunStatistic value={`€${statistics.totalSpent.toFixed(2)},-`} description="Total spent" />
        <TungstunStatistic value={`${statistics.mostSoldProduct.brand} ${statistics.mostSoldProduct.name}`} description="Favourite product" />
      </TungstunStatistics>
      <TungstunTitle text="📜 Active bills" level={2} />
      {activeBills.length > 0 &&
        activeBills.map((bill) => <TungstunBillItem barId={bill.bar.id} bill={bill} />)}
      <TungstunTitle text="🍺 Joined bars" level={2} />
      <TungstunListView>
        {bars.map((bar) => {
          return <TungstunBarItem key={bar.id} bar={bar} />;
        })}
      </TungstunListView>
      <TungstunBottomContainer>
        <TungstunTextButton
          className={"add-bar-button"}
          text="Join new bar"
          width="100%"
          onClick={handleClick}
        />
      </TungstunBottomContainer>
    </TungstunPage>
  );
};

export default HomePage;
