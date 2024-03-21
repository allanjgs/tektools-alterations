import MultipleOptionInput from "./MultipleOptionInput";
import PollTimer from "./PollTimer";
import classes from "./Tab5.module.css";

const PollSystem = () => {
  return (
    <div>
      <div className={classes.FormData}>
        <p>Voting Setup</p>
        <div className={classes.row}>
          <span>
            <label for="Polls">Select Channel for Polls to appear</label>
            <select id="Polls" name="Polls">
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="manager">Manager</option>
              <option value="analyst">Analyst</option>
            </select>
          </span>
          <span>
            <label for="createPoll">Select Role(s) that can create polls</label>
            <select id="createPoll" name="createPoll">
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="manager">Manager</option>
              <option value="analyst">Analyst</option>
            </select>
          </span>
        </div>
        <div className={classes.row}>
          <span>
            <label for="respondPoles">
              Select Role(s) that can respond to polls
            </label>
            <select id="respondPoles" name="respondPoles">
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="manager">Manager</option>
              <option value="analyst">Analyst</option>
            </select>
          </span>
        </div>
        <button>Submit</button>
      </div>
      {/* section 2=========== */}
      <div className={classes.FormData}>
        <p style={{marginTop:"40px"}}>Create Poll</p>
        <div className={classes.row}>
          <span>
            <label for="question">Question</label>
            <select id="question" name="question">
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="manager">Manager</option>
              <option value="analyst">Analyst</option>
            </select>
          </span>
          <span>
            {/* <label for="createPoll">Select Role(s) that can create polls</label> */}
             <MultipleOptionInput />
          </span>
        </div>
        <div className={classes.row}>
          <span>
           <PollTimer />
          </span>
        </div>
        <button>Submit</button>
      </div>
    </div>
  );
};
export default PollSystem;
