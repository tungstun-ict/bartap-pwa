import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./customer-page.scss";
import QRCode from "react-qr-code";
import TungstunPage from "../../stories/page/tungstun-page";
import TungstunTitle from "../../stories/title/tungstun-title";
import TungstunStatistic from "../../stories/statistic/tungstun-statistic";
import TungstunStatistics from "../../stories/statistics/tungstun-statistics";
import {
  Account,
  Bar,
  Customer,
  DefaultCustomer,
  DefaultBar,
} from "./CustomerPage.specs.ts";
import TungstunAccountBanner from "../../stories/account-banner/tungstun-account-banner.tsx";
import TungstunPopup from "../../stories/popup/tungstun-popup.tsx";
import {
  getAccountById,
  getBarById,
  getConnectAccountToken,
  getCustomerOfBar,
} from "../../services/BarApiService";

const CustomerPage = () => {
  const { barId, customerId } = useParams();

  const [loading, setLoading] = useState(true);
  const [customer, setCustomer] = useState<Customer>(DefaultCustomer);
  const [connectionToken, setToken] = useState<string>("");
  const [account, setAccount] = useState<Account>();
  const [bar, setBar] = useState<Bar>(DefaultBar);
  const [popupOpen, setPopupOpen] = useState(false);

  useEffect(() => {
    async function fetchData() {
      let customerResponse: Customer = await getCustomerOfBar(
        barId,
        customerId
      );
      setCustomer(customerResponse);

      let barResponse: Bar = await getBarById(barId);
      setBar(barResponse);

      if (customerResponse.userId) {
        let accountResponse: Account = await getAccountById(
          customerResponse.userId
        );
        setAccount(accountResponse);
      }
    }

    if (loading) fetchData().finally(() => setLoading(false));
  }, [loading]);

  const handleConnect = () => {
    async function fetchData() {
      return await getConnectAccountToken(bar.id, customer.id);
    }

    fetchData()
      .then(token => {setToken(token); console.log(token);})
      .finally(() => setPopupOpen(true));
  };

  const handleDisconnect = () => {};

  return (
    <TungstunPage authenticated loading={loading}>
      <TungstunTitle back text={`🧑 ${customer.name}`} level={1} />
      <TungstunStatistics>
        <TungstunStatistic value={bar.name} description={"Customer of"} />
        <TungstunStatistic
          value={customer.name}
          description={"Favorite item"}
        />
        <TungstunStatistic
          value={`€${new Number(2).toFixed(2)}`}
          description={"Highest bill"}
        />
      </TungstunStatistics>
      <TungstunTitle text={`🔒 Account`} level={2} />
      <TungstunAccountBanner
        account={account}
        handleConnect={handleConnect}
        handleDisconnect={handleDisconnect}
      />
      <TungstunPopup isOpen={popupOpen} setClose={() => setPopupOpen(false)}>
        <QRCode value={connectionToken} />
      </TungstunPopup>
    </TungstunPage>
  );
};

export default CustomerPage;
