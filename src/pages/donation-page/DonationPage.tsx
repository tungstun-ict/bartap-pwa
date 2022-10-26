import React from "react";

import "./donation-page.scss";
import TungstunPage from "./../../stories/page/tungstun-page";
import TungstunTitle from "./../../stories/title/tungstun-title";
import TungstunTextButton from './../../stories/text-button/tungstun-text-button';

const DonationPage = ({}) => {
  const handleDonateClick = () => {
    window.open("https://donate.stripe.com/cN216Z05cdbTaOc144");
  }
  return (
    <TungstunPage>
      <TungstunTitle text={"💸 Donation"} level={1} back />
      <p>
        We are working hard on bartap and to run a project like this is not
        cheap. If you can spare a couple of bucks to help a project like this to
        exist that would be amazing!
      </p>
      <p>
        It costs us around €35.00,- per month to keep bartap online. This includes the hosting of the API, website and database.
      </p>
      <p>
        When you donate your name will be featured in the donators section! 
      </p>
      <TungstunTextButton onClick={handleDonateClick} width="100%" text="🍸 Buy us a cocktail!"/>
      <TungstunTitle text={"🥅 Goals"} level={2} />
      <div className="goal">
        <p className="goal__name">Bartap on iOS - €100</p>
        <div className="goal__progressBar">
          <p className="goal__progressBar__progress">6%</p>
          <div className="goal__progressBar__fill" />
        </div>
      </div>
      <TungstunTitle text={"👨‍💻 Donators"} level={2} />
      <TungstunTitle text={"1x 🍸 Xander Vedder"} level={3} />
      <TungstunTitle text={"1x 🍸 Milan Dol"} level={3} />
    </TungstunPage>
  );
};

export default DonationPage;
