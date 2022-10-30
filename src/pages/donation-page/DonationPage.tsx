import React from "react";

import "./donation-page.scss";
import TungstunPage from "./../../stories/page/tungstun-page";
import TungstunTitle from "./../../stories/title/tungstun-title";
import TungstunTextButton from './../../stories/text-button/tungstun-text-button';

const DonationPage = ({}) => {
  const handleShotDonateClick = () => {
    window.open("https://donate.stripe.com/bIY2b3aJQb3L5tSbIK");
  }

  const handleRoundDonateClick = () => {
    window.open("https://donate.stripe.com/eVa4jbf06c7PbSgcMP");
  }
  
  const handleCocktailDonateClick = () => {
    window.open("https://donate.stripe.com/cN216Z05cdbTaOc144");
  }

  const handleVaasjeDonateClick = () => {
    window.open("https://donate.stripe.com/cN2bLDcRY3Bj6xW001");
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
      <TungstunTextButton className="button" onClick={handleShotDonateClick} width="100%" text="€1.00,- 💧 Buy us a shot!"/>
      <TungstunTextButton className="button" onClick={handleVaasjeDonateClick} width="100%" text="€3.00,- 🍺 Buy us a vaasje!"/>
      <TungstunTextButton className="button" onClick={handleCocktailDonateClick} width="100%" text="€7.00,- 🍸 Buy us a cocktail!"/>
      <TungstunTextButton className="button" onClick={handleRoundDonateClick} width="100%" text="€10.00,- 🍻 Buy us a round!"/>
      <TungstunTitle text={"🥅 Goals"} level={2} />
      <div className="goal">
        <p className="goal__name">Bartap on iOS - €100</p>
        <div className="goal__progressBar">
          <p className="goal__progressBar__progress">43%</p>
          <div className="goal__progressBar__fill" />
        </div>
      </div>
      <TungstunTitle text={"🧑‍💻 Donators"} level={2} />
      <TungstunTitle text={"1x 🍻 Mees Franchimont"} level={3} />
      <TungstunTitle text={"1x 🍻 Nienke Willemsen"} level={3} />
      <TungstunTitle text={"1x 🍻 Maurice Willemsen"} level={3} />
      <TungstunTitle text={"1x 🍸 Stan"} level={3} />
      <TungstunTitle text={"1x 🍺 Xander Vedder"} level={3} />
      <TungstunTitle text={"1x 🍺 Milan Dol"} level={3} />
    </TungstunPage>
  );
};

export default DonationPage;
