
import classes from "./Tab1.module.css";
const TicketSystem = () => {
  return (
    <div>
      <div className={classes.FormData}>
      <label for="message">Message</label>
      <textarea placeholder="Message" />
        <div className={classes.row}>
          <span>
            <label for="roles">Choose a role</label>
            <select id="roles" name="roles">
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="manager">Manager</option>
              <option value="analyst">Analyst</option>
            </select>
          </span>
          <span>
            <label for="input1">Reason 1</label>
            <input type="text" placeholder="Reason 1" />
          </span>
        </div>
        <div className={classes.row}>
        <span>
            <label for="input1">Reason 2</label>
            <input type="text" placeholder="Reason 2" />
          </span>
          <span>
            <label for="input1">Reason 3</label>
            <input type="text" placeholder="Reason 3" />
          </span>
        </div>
        <button>Submit</button>
      </div>
    </div>
  );
};
export default TicketSystem;
