import React, { useState } from "react";
import classes from "./Profile.module.css";
import userverify from "./../../img/userVerify.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGear,
  faCircleQuestion,
  faFile,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
const Profile = ({ userInfo }) => {
  const [showProfileSetting, setShowProfileSetting] = useState(false);
  return (
    <div className={classes.profileTop}>
      <div className={classes.user}  onClick={() => setShowProfileSetting(!showProfileSetting)}>
        <div
          className={classes.profileImg}
         
          
        >
          <img src={userverify} alt="userVerify" />

          <img 
            src={`https://cdn.discordapp.com/avatars/${userInfo.data.id}/${userInfo.data.avatar}.jpg`}
            id="avatar"
            className=""
            alt=""
          />
        </div>
        <p>
          {userInfo.data.username}
        </p>
      </div>
      {showProfileSetting && (
        <div className={classes.profileContent}>
          <h3>Dashboard</h3>
          <div>
            <p><a href="/choose-server">Dashboard</a></p>
            <p>Holder Verification</p>
          </div>
          <div>
            <p>Staking</p>
            <p>Revenue Sharing</p>
          </div>
          <br />
          <h3>ACCOUNT</h3>
          <div>
            <p>User Info</p>
            <p>Wallets</p>
          </div>
          <div>
            <p>User Info</p>
            <p>User Security</p>
          </div>
          <div>
            <p>Calendar</p>
          </div>
          <br/>
          <hr />
          <br/>
          <div>
            <p>
              <FontAwesomeIcon icon={faCircleQuestion} /> &nbsp; Help
            </p>
            <p>
              <FontAwesomeIcon icon={faGear} /> &nbsp; Settings
            </p>
          </div>
          <div>
            <p>
              <FontAwesomeIcon icon={faFile} /> &nbsp; &nbsp;Docs
            </p>
            <p>
              <FontAwesomeIcon icon={faRightFromBracket} /> &nbsp; &nbsp;Logout
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
