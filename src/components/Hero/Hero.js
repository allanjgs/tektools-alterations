import React from "react";
import classes from "./Hero.module.css";
import Logo from "./Logo";
import heroLeftImg from "./../../img/heroLeftImg.png";
import heroRightImg from "./../../img/heroRightImg.png";
import { FaDiscord } from "react-icons/fa";

const Hero = () => {
  return (
    <div className={classes.heroTop}>
      <img className={classes.imgLeft} src={heroLeftImg} alt="heroLeftImg" />
      <img className={classes.imgRight} src={heroRightImg} alt="heroRightImg" />
      <h1>
        The only project management <br /> companion you will need <br /><br /> <Logo />
      </h1>

      <p>
        Elevate the security of any NFT project with our unique project management companion<br />
        We are the only provider in the market that combines security,<br />
        utility, and an enjoyable user experience for all members.
      </p>
      <div className={classes.btns}>
        <a className='flex items-center justify-center text-center featureBtn w-72' href="https://discord.com/api/oauth2/authorize?client_id=940332206512033894&permissions=8&scope=bot" target='blank'>
          <span className="flex items-center justify-center text-center gap-x-5 text-xl">
            <FaDiscord />
            INVITE NOW
          </span>
        </a>
      </div>
    </div>
  );
};
export default Hero;
