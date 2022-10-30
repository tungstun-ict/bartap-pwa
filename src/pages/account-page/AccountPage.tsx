import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as ApiService from "../../services/BarApiService";

import "./account-page.scss";

import TungstunBottomContainer from "../../stories/bottom-container/tungstun-bottom-container";
import TungstunPage from "../../stories/page/tungstun-page";
import TungstunStatistic from "../../stories/statistic/tungstun-statistic";
import TungstunStatistics from "../../stories/statistics/tungstun-statistics";
import TungstunTextButton from "../../stories/text-button/tungstun-text-button";
import TungstunTitle from "../../stories/title/tungstun-title";
import { Account, DefaultAccount } from "./AccountPage.specs";

const AccountPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(true);
  const [account, setAccount] = useState<Account>(DefaultAccount);

  useEffect(() => {
    async function fetchData() {
      let response = await ApiService.getMyAccount();
      setAccount({ ...account, ...response });
    }

    if (loading) {
      fetchData().finally(() => setLoading(false));
    }
  }, [loading]);

  return (
    <TungstunPage authenticated loading={loading}>
      <TungstunTitle text={"🧑 Account"} level={1} />
      <TungstunStatistics>
        <TungstunStatistic
          value={`${account.firstName} ${account.lastName}`}
          description={"Full name"}
        />
        <TungstunStatistic value={account.username} description={"User name"} />
        <TungstunStatistic
          value={account.email}
          description={"Email address"}
        />
        <TungstunStatistic
          value={account.phoneNumber}
          description={"Phone number"}
        />
      </TungstunStatistics>
      <TungstunTitle text={"📖 Statements"} level={2} />
      <TungstunTextButton
        className="account__button"
        width="100%"
        text={"Terms and conditions"}
        onClick={() => navigate("/terms-and-conditions")}
      />
      <TungstunTextButton
        className="account__button"
        width="100%"
        text={"Privacy statement"}
        onClick={() => navigate("/privacy-statement")}
      />
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
        </div>
      </TungstunBottomContainer>
    </TungstunPage>
  );
};

export default AccountPage;
