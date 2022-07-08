import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import TungstunNotificationContext from "../../stories/notification/tungstun-notification-provider";

import "./account-page.scss"

import TungstunPage from "../../stories/page/tungstun-page";
import TungstunTextButton from "../../stories/text-button/tungstun-text-button";
import TungstunTitle from "../../stories/title/tungstun-title";
import TungstunStatistics from "../../stories/statistics/tungstun-statistics";
import TungstunStatistic from "../../stories/statistic/tungstun-statistic";

const AccountPage = () => {
  const navigate = useNavigate();
  const notificationDispatch = useContext(TungstunNotificationContext);

  return (
    <TungstunPage>
      <TungstunTitle text={"🧑 Account"} level={1} />
      <TungstunTitle text="ℹ️ Information" level={2} />
      <TungstunStatistics>
        <TungstunStatistic
          value={"Jort Willemsen"}
          description={"Full name"} />
          <TungstunStatistic
          value={"jortw"}
          description={"User name"} />
          <TungstunStatistic
          value={"jort@maurice-nienke.nl"}
          description={"Email address"} />
      </TungstunStatistics>

      <div className="account__bottom">
        <TungstunTextButton width={"100%"} text={"Sign out"}/>
        <TungstunTextButton color="red" width={"100%"} text={"Delete account"}/>
      </div>
    </TungstunPage>
  );
};

export default AccountPage;
