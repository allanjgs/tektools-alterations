import { Link } from "react-router-dom";
import classes from "./ChooseServer.module.css";
const ChooseServer = () => {
  return (
    <div className={classes.ServerTop}>
      <div className={classes.inner}>
        <h1>Choose your server</h1>
        <div className={classes.row}>
          <Link to="/dashboard/verify-user">Server 1</Link>
          <Link to="/dashboard/verify-user">Server 2</Link>
          <Link to="/dashboard/verify-user">Server 3</Link>
          <Link to="/dashboard/verify-user">Server 4</Link>
          <Link to="/dashboard/verify-user">Server 5</Link>
          <Link to="/dashboard/verify-user">Server 6</Link>
          <Link to="/dashboard/verify-user">Server 7</Link>
          <Link to="/dashboard/verify-user">Server 8</Link>
          <Link to="/dashboard/verify-user">Server 9</Link>
        </div>
        <Link className={classes.backHome} to="/">Back Home</Link>
      </div>
    </div>
  );
};
export default ChooseServer;
