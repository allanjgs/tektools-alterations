import React from 'react';
import classes from "./Faq.module.css";
import Tabs from "./Tabs";

const Faq = () => {
  return (
    <div className={classes.faqTop}>
      <h1>
        FAQ’S OF <span>TekTools</span>
      </h1>
      <p>
        Make any NFT project safer, by giving all the necessary tools <br /> and
        easier to use experience
      </p>
      <Tabs />
    </div>
  );
};

export default Faq;
