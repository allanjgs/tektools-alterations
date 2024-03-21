import classes from './UserVerification.module.css';
const UserVerification = () => {
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
      </div>
      <button>Save</button>
    </div>
  </div>
  );
};
export default UserVerification;
