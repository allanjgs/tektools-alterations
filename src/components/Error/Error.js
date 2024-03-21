import React, { useEffect } from 'react';
import classes from "./Error.module.css";
import ErrorImg from './../../img/error404.png';
import { Link } from 'react-router-dom';

const Error = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className={classes.errorTop}>
      <div>
        <h1>OOPS!</h1>
        <img src={ErrorImg} alt="ErrorImg" />
        <h1>PAGE NOT FOUND</h1>
        <Link to={'/'}>
          <button>GO TO HOMEPAGE</button>
        </Link>
      </div>
    </div>
  );
};
export default Error;
