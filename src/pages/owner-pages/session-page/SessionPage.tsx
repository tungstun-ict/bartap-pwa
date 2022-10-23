import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TungstunPage from "../../../stories/page/tungstun-page";
import TungstunStatistic from "../../../stories/statistic/tungstun-statistic.tsx";
import TungstunStatistics from "../../../stories/statistics/tungstun-statistics";
import TungstunTitle from "../../../stories/title/tungstun-title";
import TungstunListView from "../../../stories/list-view/tungstun-list-view";
import TungstunOrderItem from "../../../stories/list-item/tungstun-order-item";
import TungstunBottomContainer from "../../../stories/bottom-container/tungstun-bottom-container";
import TungstunIconButton from "../../../stories/icon-button/tungstun-icon-button";
import "./session-page.scss";
import TungstunNotificationContext from "../../../stories/notification/tungstun-notification-provider";

import domtoimage from "dom-to-image";
import {
  Bill,
  DefaultBill,
  DefaultSession,
  Session,
} from "./SessionPage.specs.ts";
import { getBillById } from "../../../services/BarApiService";

const SessionPage = () => {
  const notificationDispatch = useContext(TungstunNotificationContext);
  const [loading, setLoading] = useState<boolean>(true);
  const [bill, setBill] = useState<Bill>(DefaultBill);
  const [session, setSession] = useState<Session>(DefaultSession);

  const { barId, sessionId, billId } = useParams();
  
  useEffect(() => {
    async function fetchData() {
      let billResponse = await getBillById(barId, sessionId, billId);
      setBill(billResponse);
    }

    if (loading)
      fetchData().finally(() => setLoading(false));
  }, [loading]);

  const handleShare = async () => {
    const styles = {
      display: "flex",
      flexDirection: "column",
      boxSizing: "border-box",
      alignItems: "center",
    };

    const noButtonFilter = (node) => {
      return node.id !== "button";
    };
    let toSnap = document.getElementById("bill");
    domtoimage
      .toJpeg(toSnap, { filter: noButtonFilter, style: styles, width: 500 })
      .then(async (dataUrl) => {
        const blob = await (await fetch(dataUrl)).blob();
        const file = new File(
          [blob],
          `bartap-${session.name}-${session.date}.png`,
          { type: blob.type }
        );

        navigator.share({
          files: [file],
        });
      })
      .catch((e) => {
        notificationDispatch({
          type: "ADD_NOTIFICATION",
          payload: { text: e.message, error: "error" },
        });
      });
  };

  return (
    <TungstunPage authenticated loading={loading}>
      <div style={{ backgroundColor: "white" }} id="bill">
        <TungstunTitle
          text={`📜 ${bill.customer.name}`}
          level={1}
          back
          action={
            navigator.canShare && (
              <TungstunIconButton
                onClick={handleShare}
                className="session-page__share"
                src={require("../../../assets/icons/share-light.png")}
              />
            )
          }
        />

        <TungstunStatistics>
          <TungstunStatistic
            description="Total"
            value={`€${bill.totalPrice},-`}
          />
          <TungstunStatistic description="Status" value={`Payed`} />
          
        </TungstunStatistics>
        <TungstunTitle text={`🍽️ Orders`} level={2} />
        <TungstunListView>
          {bill.orders.map((order) => (
            <TungstunOrderItem key={order.id} order={order} />
          ))}
        </TungstunListView>
      </div>
    </TungstunPage>
  );
};

export default SessionPage;
