import React from "react";
import { useParams } from "react-router-dom";

import "./customer-page.scss";

import TungstunPage from "../../stories/page/tungstun-page";
import TungstunTitle from "../../stories/title/tungstun-title";
import TungstunStatistic from "../../stories/statistic/tungstun-statistic";
import TungstunStatistics from "../../stories/statistics/tungstun-statistics";
import { Account, Bar, Customer } from "./CustomerPage.specs";

const CustomerPage = () => {
  const { barId, customerId } = useParams();

  const bar: Bar = {
    id: "1",
    name: "Bartjes bar",
  };

  const account: Account = {
    id: "1",
    firstName: "Jona",
    lastName: "Leeflang",
    username: "chromachroma"
  }

  const customer: Customer = {
    id: "1",
    accountId: "1",
    name: "Jona Leeflang",
    favorite: "Watermelon Dream",
    highestBill: 42.4,
  };

  return (
    <TungstunPage authenticated>
      <TungstunTitle
        text={`🧑 ${customer.name}`}
        level={1}
      />
      <TungstunStatistics>
        <TungstunStatistic value={bar.name} description={"Customer of"} />
        <TungstunStatistic
          value={customer.favorite}
          description={"Favorite item"}
        />
        <TungstunStatistic
          value={`€${customer.highestBill.toFixed(2)}`}
          description={"Highest bill"}
        />
      </TungstunStatistics>
      <TungstunTitle
        text={`🔒 Account`}
        level={2}
      />
    </TungstunPage>
  );
};

export default CustomerPage;
