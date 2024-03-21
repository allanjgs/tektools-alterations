import React from 'react';
import classes from "./Footer.module.css";
import discord from "./../../img/discord.png";
import facebook from "./../../img/facebook.png";
import twitter from "./../../img/twitter.png";

const Footer = () => {
  return (
    <div className={classes.footerTop}>
      <h1>
        {" "}
        <span> TekTools </span>
      </h1>
      <div className={classes.row}>
        <a href="https://discord.gg/tekros" target='blank'>
          <img src={discord} alt="discord" />{" "}
        </a>
        {/* <a href="https://www.figma.com/file/q5guz2pE64J6AyGkF8bkD3/NFT-Web---Adi-marwat-CLient---sample-1?node-id=1%3A2&t=O2UHS9QNLdzH2ODt-0">
          <img src={facebook} alt="facebook" />{" "}
        </a> */}
        <a href="https://twitter.com/tektoolsapp" target='blank'>
          <img src={twitter} alt="twitter" />{" "}
        </a>
      </div>
      <p>Copyright © Tekros/TekTools.app 2023</p>
    </div>
  );
};

export default Footer;
