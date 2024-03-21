import React, { useEffect } from 'react';
import classes from "./MoreFeature.module.css";
import roleImg from './../../img/roleImg.png';
import userVerify from './../../img/userVerify.png';
import holderRole from './../../img/holderRole.png';
import rarityRole from './../../img/rarityRole.png';
import whaleRole from './../../img/whaleRole.png';
import userRole from './../../img/userRole.png';



const MoreFeature = () => {
      useEffect(() => {
            window.scrollTo(0, 0)
          }, [])
  return (
    <div className={classes.moreFeature}>
      <h1>All Features</h1>
      <div className={classes.row}>
      <div className={classes.cardTop}>
              <img src={roleImg} alt="Verification Img" />
              <h3>Role verification</h3>
              <p>Seamlessly integrate role verification into your Discord server in seconds, without waiting for setup, or granting anyone admin permissions to you server.</p>
        </div>
        <div className={classes.cardTop}>
              <img src={userVerify} alt="Verification Img" />
              <h3>User verification</h3>
              <p>Role are granted in seconds after user verification, and importantly, removed just as quickly. No more waiting for 12 hours after a transfer for roles to update.</p>
        </div>
        <div className={classes.cardTop}>
              <img src={holderRole} alt="Verification Img" />
              <h3>Attribute Holder Roles</h3>
              <p>Why limit yourself to simple holder channels? You can now reward your community by giving users roles specific to attributes on their NFTs.</p>
        </div>
        <div className={classes.cardTop}>
              <img src={rarityRole} alt="Verification Img" />
              <h3>Rarity Roles</h3>
              <p>By combining the rarity system with the verification system, you can provide your users custom roles based on the rarity of NFTs they are holding.</p>
        </div>
        <div className={classes.cardTop}>
              <img src={whaleRole} alt="Verification Img" />
              <h3>Whale Roles</h3>
              <p>Easily create custom roles to be given for holding any number of your NFTs, giving you a powerful way to reward the whales who support your project.</p>
        </div>
        <div className={classes.cardTop}>
              <img src={userRole} alt="Verification Img" />
              <h3>User Verification</h3>
              <p>Role are granted in seconds after user verification, and importantly, removed just as quickly. No more waiting for 12 hours after a transfer for roles to update.</p>
        </div>
      </div>
    </div>
  );
};

export default MoreFeature;
