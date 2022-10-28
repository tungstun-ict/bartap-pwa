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
  Statistics,
  DefaultStatistics,
} from "./CustomerPage.specs";
import TungstunAccountBanner from "../../stories/account-banner/tungstun-account-banner";
import TungstunPopup from "../../stories/popup/tungstun-popup";
import {
  getAccountById,
  getBarById,
  getBillsOfCustomer,
  getConnectAccountToken,
  getCustomerOfBar,
  getCustomerByIdStatistics,
} from "../../services/BarApiService";
import { Bill, DefaultBill, Session } from "./CustomerPage.specs";
import TungstunListView from "./../../stories/list-view/tungstun-list-view";
import TungstunBillItem from "../../stories/list-item/bill-item/tungstun-bill-item";

const CustomerPage = () => {
  const { barId, customerId } = useParams();

  const [loading, setLoading] = useState(true);
  const [customer, setCustomer] = useState<Customer>(DefaultCustomer);
  const [connectionToken, setToken] = useState<string>("");
  const [account, setAccount] = useState<Account>();
  const [bar, setBar] = useState<Bar>(DefaultBar);
  const [bills, setBills] = useState<Bill[]>([DefaultBill]);
  const [popupOpen, setPopupOpen] = useState(false);
  const [statistics, setStatistics] = useState<Statistics>(DefaultStatistics);

  useEffect(() => {
    async function fetchData() {
      let customerResponse: Customer = await getCustomerOfBar(
        barId,
        customerId
      );
      setCustomer(customerResponse);

      let statisticsResponse: Statistics = await getCustomerByIdStatistics(
        barId,
        customerId
      );
      setStatistics(statisticsResponse);

      let barResponse: Bar = await getBarById(barId);
      setBar(barResponse);

      let billsResponse: Bill[] = await getBillsOfCustomer(barId, customerId);
      setBills(billsResponse);

      if (customerResponse.userId) {
        let accountResponse: Account = await getAccountById(
          customerResponse.userId
        );
        setAccount(accountResponse);
      }
    }

    if (loading) fetchData().finally(() => setLoading(false));
  }, [loading]);

  const sortBillsByDate = (bills: Bill[]) => {
    return bills.sort((a, b) => {
      console.log(a);
      return (
        new Date(b.session.date).getTime() - new Date(a.session.date).getTime()
      );
    });
  };

  const handleConnect = () => {
    async function fetchData() {
      return await getConnectAccountToken(bar.id, customer.id);
    }

    fetchData()
      .then((token) => {
        console.log(token);
        setToken(token);
      })
      .finally(() => setPopupOpen(true));
  };

  const handleDisconnect = () => {};

  return (
    <TungstunPage authenticated loading={loading}>
      <TungstunTitle back text={`🧑 ${customer.name}`} level={1} />
      <TungstunStatistics className="statistics">
        <TungstunStatistic value={bar.name} description={"Customer of"} />
        <TungstunStatistic
          value={`${statistics.mostSoldProduct.brand} ${statistics.mostSoldProduct.name}`}
          description={"Favorite item"}
        />
        <TungstunStatistic
          value={`€${statistics.mostExpensiveBill.totalPrice.toFixed(
            2
          )},- during '${statistics.mostExpensiveBill.session.name}'`}
          description={"Most expensive bill"}
        />
      </TungstunStatistics>
      <TungstunStatistics>
        <TungstunStatistic
          value={`€${statistics.totalNotYetPayed.toFixed(2)},-`}
          description={"Total owed"}
        />
        <TungstunStatistic
          value={`€${statistics.totalSpent.toFixed(2)},-`}
          description={"Total spent"}
        />
      </TungstunStatistics>
      <TungstunTitle text={`🔒 Account`} level={2} />
      <TungstunAccountBanner
        account={account}
        handleConnect={handleConnect}
        handleDisconnect={handleDisconnect}
      />
      <TungstunTitle text={`📜 Bills`} level={2} />
      <TungstunListView>
        {sortBillsByDate(bills).map((bill: Bill) => (
          <TungstunBillItem key={bill.id} barId={barId} bill={bill} />
        ))}
      </TungstunListView>
      <TungstunPopup isOpen={popupOpen} setClose={() => setPopupOpen(false)}>
        <QRCode value={connectionToken} />
      </TungstunPopup>
    </TungstunPage>
  );
};

export default CustomerPage;
