import PollTimer from "../PollSystem/PollTimer";
import classes from "./GiveAway.module.css";
const GiveAway = () => {
  return (
    <form>
      <p>GiveAway</p>
      <div className={classes.FormData}>
        <div className={classes.row}>
          <span>
            <label for="giveItem">Item To Give</label>
            <input type="text" placeholder="Item To Give" required />
          </span>
          <span>
            <label for="quantityWinner">Quantity of Winners</label>
            <input type="number" placeholder="Quantity of Winners" required />
          </span>
        </div>
        <div className={classes.row}>
          <span>
            <label for="roles">Allowed Role</label>
            <select id="roles" name="roles">
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="manager">Manager</option>
              <option value="analyst">Analyst</option>
            </select>
          </span>
          <span>
            <label for="GiveawayChannel">Giveaway Channel</label>
            <select id="roles" name="roles">
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="manager">Manager</option>
              <option value="analyst">Analyst</option>
            </select>
          </span>
        </div>
        <div className={classes.row}>
          <span>
            <PollTimer />
          </span>
        </div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};
export default GiveAway;
