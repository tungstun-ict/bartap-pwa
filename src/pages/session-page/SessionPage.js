import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import TungstunPage from "../../stories/page/tungstun-page";
import TungstunStatistic from "../../stories/statistic/tungstun-statistic";
import TungstunStatistics from "../../stories/statistics/tungstun-statistics";
import TungstunTitle from "../../stories/title/tungstun-title";
import TungstunListView from "../../stories/list-view/tungstun-list-view";
import TungstunOrderItem from "../../stories/list-item/tungstun-order-item";
import TungstunBottomContainer from "../../stories/bottom-container/tungstun-bottom-container";
import TungstunIconButton from "../../stories/icon-button/tungstun-icon-button";
import "./session-page.scss";
import TungstunNotificationContext from "../../stories/notification/tungstun-notification-provider";

import domtoimage from "dom-to-image";

const SessionPage = () => {
  const notificationDispatch = useContext(TungstunNotificationContext);
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
    let bill = document.getElementById("bill");
    domtoimage
      .toJpeg(bill, { filter: noButtonFilter, style: styles, width: 500 })
      .then(async (dataUrl) => {
        const blob = await (await fetch(dataUrl)).blob();
        const file = new File([blob], `bartap-${session.name}-${session.date}.png`, { type: blob.type });

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
    <TungstunPage authenticated>
      <div style={{ backgroundColor: "white" }} id="bill">
        <TungstunTitle
          text={`📜 ${session.name}`}
          level={1}
          back
          action={
            navigator.canShare && (
              <TungstunIconButton
                onClick={handleShare}
                className="session-page__share"
                src={require("../../assets/icons/share-light.png")}
              />
            )
          }
        />

        <TungstunStatistics>
          <TungstunStatistic
            description="Total"
            value={`€${session.total},-`}
          />
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
      </div>
    </TungstunPage>
  );
};

export default SessionPage;
