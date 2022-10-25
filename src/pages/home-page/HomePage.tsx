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
import { Bar, Bill } from "./HomePage.specs";
import { getConnectedBars, getMyActiveBillByBarId } from "../../services/BarApiService";
import TungstunBillItem from './../../stories/list-item/bill-item/tungstun-bill-item';

const HomePage = ({}) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [bars, setBars] = useState<Bar[]>([]);
  const [activeBills, setActiveBills] = useState<Bill[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const barsResponse: Bar[] = await getConnectedBars();
      setBars(barsResponse);

      barsResponse.forEach((bar) => { getMyActiveBillByBarId(bar.id).then((bill) => {setActiveBills([...activeBills, bill])})});
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
      <TungstunStatistics>
        <TungstunStatistic value={`€`} description="Open tap" />
        <TungstunStatistic value={"€"} description="Total spent" />
      </TungstunStatistics>
      <TungstunTitle text="📜 Active bills" level={2} />
      {activeBills.length > 0 && (
        activeBills.map((bill) => (
          <TungstunBillItem bill={bill}/>
      )))}
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
