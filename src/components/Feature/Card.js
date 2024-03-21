import React from 'react';
import classes from './Card.module.css';
import roleImg from './../../img/roleImg.png';
import userVerify from './../../img/userVerify.png';
import holderRole from './../../img/holderRole.png';
import rarityRole from './../../img/rarityRole.png';
import whaleRole from './../../img/whaleRole.png';
import userRole from './../../img/userRole.png';


const Card = () => {
  return (
    <>
      <div className={classes.cardTop}>
        <img src={roleImg} alt="Verification Img" />
        <h3>Holder role verification</h3>
        <p>Effortlessly incorporate role verification into your Discord server within seconds, without the need for prolonged setup or granting admin permissions to anyone on your server.</p>
      </div>
      <div className={classes.cardTop}>
        <img src={userVerify} alt="Verification Img" />
        <h3>User verification</h3>
        <p>Roles are granted within seconds after user verification, and perhaps more crucially, they are removed just as swiftly. Say goodbye to waiting 12 hours for role updates after a transfer.</p>
      </div>
      <div className={classes.cardTop}>
        <img src={holderRole} alt="Verification Img" />
        <h3>Per Quantity and Attribute Roles</h3>
        <p>Why confine yourself to basic holder channels? Now, you have the power to reward your community by assigning users roles that correspond to the attributes on their NFTs or the quantity they hold.</p>
      </div>
      <div className={classes.cardTop}>
        <img src={userRole} alt="Verification Img" />
        <h3>Staking System</h3>
        <p>Say goodbye to complex staking processes for both you and your holders. With our robust non-custodial staking system, you can easily reward your holders for keeping their NFTs in their wallets.</p>
      </div>
      <div className={classes.cardTop}>
        <img src={whaleRole} alt="Verification Img" />
        <h3>Revenue Sharing</h3>
        <p>If your project offers revenue sharing, our system enables you to set it up swiftly, allowing your members to claim their share in the simplest way possible.</p>
      </div>
      {/* <div className={classes.cardTop}>
        <img src={rarityRole} alt="Verification Img" />
        <h3>Anonymous Voting System</h3>
        <p>Engage with your community allowing them to create and respond to anonymous polls with graphical data displayed for results.</p>
      </div> */}
      <div className={classes.cardTop}>
        <img src={whaleRole} alt="Verification Img" />
        <h3>Decentralized Storage</h3>
        <p>Upload anything to Solana's decentralized Storage with free 1GB of space.</p>
      </div>
      
      {/* <div className={classes.cardTop}>
        <img src={userRole} alt="Verification Img" />
        <h3>Discord backup</h3>
        <p>Backup your important channels, resting assured that your precious information is safely stored in the blockchain using Solana's native Shadow Storage.</p>
      </div> */}

    </>

  )
}

export default Card;