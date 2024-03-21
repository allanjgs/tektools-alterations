import Error from "../../components/Error/Error";
import classes from "./NotFound.module.css";
const NotFound = () => {
    return(
        <div className={classes.errorTop}>
        <Error />
        </div>
    )
}
export default NotFound;