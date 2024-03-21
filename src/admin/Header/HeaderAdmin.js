import classes from "./HeaderAdmin.module.css";
import logo from "./../../img/logor.png";
import profile from "./../../img/profile.png";
const HeaderAdmin = () => {
  return (
    <div className={classes.header}>
      <div className={classes.left}>
        <img src={logo} alt="logo" />
      </div>
      <div className={classes.right}>
        <div className={classes.profile}>
          <img src={profile} alt="profile" />
        </div>
      </div>
    </div>
  );
};
export default HeaderAdmin;
