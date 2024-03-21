import React from 'react';
import classes from "./Feature.module.css";
import Card from "./Card";
import featureRightImg from "./../../img/featureRightImg.png";
import { Link } from 'react-router-dom';


const Feature = () => {
  return (
    <div className={classes.featureTop} id="fatureTop">
      <img
        className={classes.rightImg}
        src={featureRightImg}
        alt="featureRightImg"
      />
      <h1>
        {" "}
        Features of <span> Tektools </span>
      </h1>
      <p>
        The TekTools has many available tools to help project owner 
        with all the needs their project might have <br></br> Here is a few  ones.
        With many more in our roadmap(Check discord for more details).
      </p>

      <div className={classes.row}>
        <Card />
      </div>
      {/* <Link to={'/allfeatures'}>
      All Features
      </Link> */}
      <a className={classes.featureBtn} href="https://docs.tektools.app/overview/our-features#complete-list-of-features" target='blank'>
            <span> &nbsp; All Features  &nbsp;</span>
          </a>
    </div>
  );
};

export default Feature;
