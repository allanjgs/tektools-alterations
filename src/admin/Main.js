
import React from "react";
import classes from "./Main.module.css";
import { PiAddressBookBold } from "react-icons/pi";
import { FiUserCheck } from "react-icons/fi";
import { BsTicketDetailed } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import { BiPoll } from "react-icons/bi";
import { AiOutlineInteraction } from 'react-icons/ai';
import { AiOutlineGift } from "react-icons/ai";
import { RiP2PLine } from "react-icons/ri";
import { SiHiveBlockchain } from 'react-icons/si';
import { AiOutlineCamera } from 'react-icons/ai';
import { RxDiscordLogo } from "react-icons/rx";
import {  NavLink, Outlet } from "react-router-dom";

import Header from "../components/Header/Header";
const AdminMain = () => {
  return (
    <>
      <Header />

      <div className={classes.adminTop} style={{
        boxSizing: 'border-box',
        margin: '0px',
        padding: '0px'
      }}>
        <div className={classes.Tabs}>
          <p>DASHBOARD</p>
          <ul>

            <NavLink activeClassName="active" to="tab2"><li><PiAddressBookBold /> Select server</li></NavLink>
            <div className={classes.row}>
              <span>
                <select id="serverList" name="Server List" >
                  <option value="server1">select a server</option>
                  <option value="server2">server2</option>
                  <option value="server3">server3</option>
                  <option value="server4">server4</option>
                </select>
              </span>

            </div>
          </ul>
          <p>SERVICES</p>
          <ul>
            <NavLink activeClassName="active" to="verify-user"><li><FiUserCheck /> Verify User</li></NavLink>
            <NavLink activeClassName="active" to="TicketSystem"><li><BsTicketDetailed /> Ticket System</li></NavLink>
            <NavLink activeClassName="active" to="holder-verification"> <li><GoVerified /> Holder Verification</li></NavLink>
            <NavLink activeClassName="active" to="poll-system"><li><BiPoll /> Poll System</li></NavLink>
            <NavLink activeClassName="active" to="engagement-system"><li><AiOutlineInteraction /> Engagement System</li></NavLink>
            <NavLink activeClassName="active" to="give-away"><li><AiOutlineGift /> Giveaway</li></NavLink>
            <NavLink activeClassName="active" to="p2p-configuration"><li><RiP2PLine /> P2P Configuration</li></NavLink>
            <NavLink activeClassName="active" to="staking"><li><SiHiveBlockchain /> Staking</li></NavLink>
            <NavLink activeClassName="active" to="airdrop"><li><PiAddressBookBold /> Airdrop</li></NavLink>
            <NavLink activeClassName="active" to="snapshots"><li><AiOutlineCamera /> Snapshots</li></NavLink>
            <NavLink activeClassName="active" to="discord-backup"><li><RxDiscordLogo /> Discord Backup</li></NavLink>
          </ul>
        </div>

        <div className={classes.tabsContent}>
          <Outlet />
        </div>
      </div>
    </>
  );
};
export default AdminMain;
