import React, { useState } from "react";
import classes from "./CardList.module.css";
import priceImg from "./../../img/priceBg.png";
import priceIcon from "./../../img/priceIcon.png";
import tickPrice from "./../../img/tickPrice.png";
import crossPrice from "./../../img/crossPrice.png";
const CardList = () => {
  const [prices, setPrices] = useState(false);
  const  [semesterly,setSemesterly] = useState(false);
  const  [yearly,setYearly] = useState(false);

  const monthlyPricesHandler = () => {
    setPrices(false);
    handleButtonClick(1);
    setSemesterly(false);
    setYearly(false);
  };
  const semesterlyPricesHandler = () => {
    setPrices(true);
    setSemesterly(true);
    setYearly(false);
    handleButtonClick(2);
  };
  const YearlyPricesHandler = () => {
    setPrices(true);
    setSemesterly(false);
    setYearly(true);
    handleButtonClick(3);
  };
  const [activeButton, setActiveButton] = useState(1);

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId === activeButton ? null : buttonId);
  };



  return (
    <div className={classes.cardListTop}>
      <div className={classes.btns}>
        <button    className={activeButton === 1 ? `${classes.active}` : ''} onClick={monthlyPricesHandler}>Monthly</button>
        <button  className={activeButton === 2 ? `${classes.active}` : ''} onClick={semesterlyPricesHandler}>6 Months</button>
        <button  className={activeButton === 3 ? `${classes.active}` : ''} onClick={YearlyPricesHandler}>Yearly</button>
      </div>
      <div className={classes.row}>
        <div className={classes.card}>
          <div className={classes.btnTop}>
            <button>Free</button>
          </div>
          <img src={priceImg} alt="bg" />
          <div className={classes.cardInner}>
            <div className={classes.priceHeader}>
              <div className={classes.left}>
                <img src={priceIcon} alt="priceIcon" />
                <div>
                  <h1>Basic</h1>
                  {/* <h1>
                    05 <span>Services</span>
                  </h1> */}
                </div>
              </div>
              <h1 className={classes.package}>Free</h1>
            </div>
            <div className={classes.list}>
              <img src={tickPrice} alt="tickPrice" />
              <h3>Anti-bot member verification</h3>
            </div>
            <div className={classes.list}>
              <img src={tickPrice} alt="tickPrice" />
              <h3>Whitelist Wallets collection</h3>
            </div>
            <div className={classes.list}>
              <img src={tickPrice} alt="tickPrice" />
              <h3>5 min. data update frequency</h3>
            </div>
            <div className={classes.list}>
              <img src={tickPrice} alt="tickPrice" />
              <h3>Server Stats </h3>
            </div>
            <div className={classes.list}>
              <img src={tickPrice} alt="tickPrice" />
              <h3>Ticket System</h3>
            </div>
            <div className={classes.list}>
              <img src={tickPrice} alt="tickPrice" />
              <h3>Mini Games</h3>
            </div>
            <div className={classes.list}>
              <img src={tickPrice} alt="tickPrice" />
              <h3>Anonymous poll system</h3>
            </div>
            <div className={classes.list}>
              <img src={tickPrice} alt="tickPrice" />
              <h3>Giveaways</h3>
            </div>
            <div className={classes.list}>
              <img src={tickPrice} alt="tickPrice" />
              <h3>Basic support</h3>
            </div>

            <div className={classes.list}>
              <img src={crossPrice} alt="crossPrice" />
              <h3>Holder Verification</h3>
            </div>
            <div className={classes.list}>
              <img src={crossPrice} alt="crossPrice" />
              <h3>Staking System</h3>
            </div>
            
          </div>
        </div>
        <div className={classes.card}>
          <div className={classes.btnTop}>
          
            {!prices &&   <button>Monthly</button>}
              {semesterly &&   <button>Semesterly</button>}
              {yearly &&  <button>Yearly</button>}
          </div>
          <img src={priceImg} alt="bg" />
          <div className={classes.cardInner}>
            <div className={classes.priceHeader}>
              <div className={classes.left}>
                <img src={priceIcon} alt="priceIcon" />
                <div>
                  <h1>Premium</h1>
                     <span>Everything in Basic +</span>
                </div>
              </div>
              {!prices && <h1 className={classes.package}>$ 100/m</h1>}
              {semesterly && <h1 className={classes.package}>$ 85/m</h1>}
              {yearly && <h1 className={classes.package}>$ 70/m</h1>}
            </div>
            <div className={classes.list}>
              <img src={tickPrice} alt="tickPrice" />
              <h3>Holder Verification</h3>
            </div>
            <div className={classes.list}>
              <img src={tickPrice} alt="tickPrice" />
              <h3>Roles Per Quantity</h3>
            </div>
            <div className={classes.list}>
              <img src={tickPrice} alt="tickPrice" />
              <h3>Roles Per Metadata</h3>
            </div>
            <div className={classes.list}>
              <img src={tickPrice} alt="tickPrice" />
              <h3>Sales/Listings Notifications</h3>
            </div>
            <div className={classes.list}>
              <img src={tickPrice} alt="tickPrice" />
              <h3>Holder Snapshots</h3>
            </div>
            <div className={classes.list}>
              <img src={tickPrice} alt="tickPrice" />
              <h3>Staking System</h3>
            </div>
            <div className={classes.list}>
              <img src={tickPrice} alt="tickPrice" />
              <h3>Airdrop System</h3>
            </div>
            <div className={classes.list}>
              <img src={tickPrice} alt="tickPrice" />
              <h3>Revenue Sharing System</h3>
            </div>
            <div className={classes.list}>
              <img src={tickPrice} alt="tickPrice" />
              <h3>Engagement System</h3>
            </div>
            <div className={classes.list}>
              <img src={tickPrice} alt="tickPrice" />
              <h3>Discord Backups</h3>
            </div>
            

            
           
            <div className={classes.list}>
              <img src={tickPrice} alt="tickPrice" />
              <h3>Advanced support</h3>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};
export default CardList;
