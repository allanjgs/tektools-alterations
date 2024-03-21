import React from 'react';
import CardList from "./CardList";
import classes from "./Prices.module.css";

const Prices = () => {
  return (
    <div className={classes.pricesTop} id="pricingTop">  
      <h1>
        Pricing for <span>TekTools</span>
      </h1>
      <p>
        Make any NFT project safer, by giving all the necessary tools <br /> and
        easier to use experience
      </p>
      <CardList />
    </div>
  );
};

export default Prices;
