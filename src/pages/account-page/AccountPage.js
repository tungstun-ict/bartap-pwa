import React from "react";
import { useNavigate } from "react-router-dom";
import * as ApiService from "../../services/BarApiService";

import "./account-page.scss";

import TungstunBottomContainer from "../../stories/bottom-container/tungstun-bottom-container";
import TungstunPage from "../../stories/page/tungstun-page";
import TungstunStatistic from "../../stories/statistic/tungstun-statistic";
import TungstunStatistics from "../../stories/statistics/tungstun-statistics";
import TungstunTextButton from "../../stories/text-button/tungstun-text-button";
import TungstunTitle from "../../stories/title/tungstun-title";

const AccountPage = () => {
  const navigate = useNavigate();

  return (
    <TungstunPage authenticated>
      <TungstunTitle text={"🧑 Account"} level={1} />
      <TungstunTitle text={"🌐 Information"} level={2} />
      <TungstunStatistics>
        <TungstunStatistic value={"Jort Willemsen"} description={"Full name"} />
        <TungstunStatistic value={"jortw"} description={"User name"} />
        <TungstunStatistic
          value={"jort@maurice-nienke.nl"}
          description={"Email address"}
        />
      </TungstunStatistics>

      <TungstunBottomContainer>
      <div className="account__bottom">
        <TungstunTextButton
          width={"100%"}
          text={"Sign out"}
          onClick={() => {
            ApiService.logout();
            navigate("/auth/login");
          }}
        />
        <TungstunTextButton
          color="red"
          width={"100%"}
          text={"Delete account"}
        />
      </div>
      </TungstunBottomContainer>
    </TungstunPage>
  );
};

export default AccountPage;
