import React from 'react';
import classes from "./Tabs.module.css";
import logo from "./../../img/FullPNG01a-micro.png";
import dirRight from "./../../img/dirRight.png";
import { useState } from "react";

const Tabs = () => {
  const [toggleFindCourse, setToggleFindCourse] = useState(1);

  const toggleFindCourseHandler = (index) => {
    setToggleFindCourse(index);
  };
  return (
    <div className={classes.row}>
      <div className={classes.left}>
        <div onClick={() => {
          toggleFindCourseHandler(1);
        }} className={
          toggleFindCourse === 1
            ? `${classes.tab} ${classes.findActive}`
            : `${classes.tab}`
        }>
          <div className={classes.content}>
            <img src={logo} alt="logo" />
            <p>What is  TekTools?</p>
          </div>
          <img src={dirRight} alt="dirRight" />
        </div>
        <div onClick={() => {
          toggleFindCourseHandler(2);
        }} className={
          toggleFindCourse === 2
            ? `${classes.tab} ${classes.findActive}`
            : `${classes.tab}`
        }>
          <div className={classes.content}>
            <img src={logo} alt="logo" />
            <p>How can TekTools make a project safer?</p>
          </div>
          <img src={dirRight} alt="dirRight" />
        </div>
        <div onClick={() => {
          toggleFindCourseHandler(3);
        }} className={
          toggleFindCourse === 3
            ? `${classes.tab} ${classes.findActive}`
            : `${classes.tab}`
        }>
          <div className={classes.content}>
            <img src={logo} alt="logo" />
            <p>Why TekTools?</p>
          </div>
          <img src={dirRight} alt="dirRight" />
        </div>
        <div onClick={() => {
          toggleFindCourseHandler(4);
        }} className={
          toggleFindCourse === 4
            ? `${classes.tab} ${classes.findActive}`
            : `${classes.tab}`
        }>
          <div className={classes.content}>
            <img src={logo} alt="logo" />
            <p>Does TekTools have an NFT collection?</p>
          </div>
          <img src={dirRight} alt="dirRight" />
        </div>
        <div onClick={() => {
          toggleFindCourseHandler(5);
        }} className={
          toggleFindCourse === 5
            ? `${classes.tab} ${classes.findActive}`
            : `${classes.tab}`
        }>
          <div className={classes.content}>
            <img src={logo} alt="logo" />
            <p>Do you offer support?</p>
          </div>
          <img src={dirRight} alt="dirRight" />
        </div>
      </div>
      <div className={classes.right}>

        <h1>TekTools</h1>
        <div className={
          toggleFindCourse === 1
            ? `${classes.tabContent} ${classes.findActiveContent}`
            : `${classes.tabContent}`
        }>
          <h3>What is  TekTools?</h3>
          <p>
            Tektools is Web3 project companion, helping projects offer the best utilities to their members.
          </p>
        </div>
        <div className={
          toggleFindCourse === 2
            ? `${classes.tabContent} ${classes.findActiveContent}`
            : `${classes.tabContent}`
        }>
          <h3>How can TekTools make a project safer</h3>
          <p>
            Tektools significantly reduces the amount of bots you need in your server, that alone makes your server safe,
             but we are also constantly adding new security features, to keep an eye on your important roles and members behavior.
          </p>
        </div>
        <div className={
          toggleFindCourse === 3
            ? `${classes.tabContent} ${classes.findActiveContent}`
            : `${classes.tabContent}`
        }>
          <h3>Why TekTools?</h3>
          <p>
            Tektools provides project owners with piece of mind of having everything they need to manage a NFT project and keep their members
            happy and secure allowing project owners to focus on their unique ideas, leaving the  extra work to us.
          </p>
        </div>
        <div className={
          toggleFindCourse === 4
            ? `${classes.tabContent} ${classes.findActiveContent}`
            : `${classes.tabContent}`
        }>
          <h3>Does TekTools have an NFT collection?</h3>
          <p>
            Yes our collection is in the works join our Discord server for more information. https://discord.gg/tekros
          </p>
        </div>
        <div className={
          toggleFindCourse === 5
            ? `${classes.tabContent} ${classes.findActiveContent}`
            : `${classes.tabContent}`
        }>
          <h3>Do you offer support?</h3>
          <p>
            Yes for any questions or support please join our Discord server. https://discord.gg/tekros, 
            premium members have a dedicated support channel in their own server.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
