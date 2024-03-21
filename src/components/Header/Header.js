import React, { useEffect, useState } from "react";
import classes from "./Header.module.css";
import logo from "./../../img/200x60.png";
import { Link } from "react-router-dom";
import Profile from "./Profile";
import { FaDiscord } from "react-icons/fa";
import axios from "axios";

const Header = () => {
  const [userInfo, setUserInfo] = useState(false);

  useEffect(() => {
    if (!userInfo) {
      setUserInfo(null);
    }
  }, [userInfo]);

  useEffect(() => {
    validateDiscordUser();
  });

  const validateDiscordUser = async () => {
    const fragment = new URLSearchParams(window.location.hash.slice(1));
    const [accessToken, tokenType] = [
      fragment.get("access_token"),
      fragment.get("token_type"),
    ];
    console.log(accessToken);
    let userInfo = {};
    if (accessToken && !userInfo) {
      console.log('callind discord api');

      axios
        .get("https://discord.com/api/users/@me", {
          headers: {
            Authorization: `${tokenType} ${accessToken}`,
          },
        })
        .then((response) => {
          console.log(response);
          setUserInfo(response);
        })
        .catch(console.error);
    }
  };

  return (
    <div className={classes.header}>
      <div className={classes.left}>
        <img src={logo} alt="Log" />
      </div>
      <div className={classes.center}>
        <ul>
          <Link to={"/"}>
            <li>
              <a href="#home">Home</a>
            </li>
          </Link>

          <li>
            <a href="#fatureTop">Features</a>
            <a href="/dashboard/TicketSystem">Dashboard</a>
          </li>
          <li>
            <a href="#pricingTop">Pricing</a>
          </li>
          <li>
            <a href="#faqTop">FAQ</a>
          </li>
          <li>
            <a href="https://verification.TekTools.app/#">Verification</a>
          </li>
          <li>
            <a href="/choose-server">Dashboard</a>
            <a href="/dashboard/TicketSystem">Dashboard</a>
          </li>
        </ul>
      </div>
      {userInfo && <Profile userInfo={userInfo} />}
      {!userInfo && (
        <div className={classes.right}>
          <a href="https://discord.com/api/oauth2/authorize?client_id=1018337890884931654&redirect_uri=http%3A%2F%2Flocalhost%3A3000&response_type=token&scope=identify%20email%20guilds">
            <FaDiscord /> &nbsp; Login{" "}
          </a>
        </div>
      )}
      {/* */}
    </div>
  );
};

export default Header;
