import { useState } from "react";
import HolderPerQuantityComponent from "./AddHolderPerQuantity";
import HolderPerAttributeComponent from "./AddHolderPerAttribute";

import classes from "./Tab4.module.css";

const HolderVerification = () => {
  const [showUploadButton, setShowUploadButton] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const handleDropdownChange = (event) => {
    const value = event.target.value;
    setSelectedOption(value);
    setShowUploadButton(value === "yes");
  };

  const handleFileUpload = (event) => {
    // Handle the file upload logic here
    console.log("File uploaded:", event.target.files[0]);
  };
  return (
    <div>
      <div className={classes.FormData}>
        <p><h3>HOLDER VERIFICATION</h3></p>
        <label for="input1">Creator Address</label>
        <input type="text" placeholder="Creator Address" />
        <div className={classes.row}>
          <span>
            <label for="hashlist">Hash List</label>
            <select
              id="hashlist"
              name="hashlist"
              value={selectedOption}
              onChange={handleDropdownChange}
            >
              <option value="no">No</option>
              <option value="yes">Yes</option>
            </select>
          </span>
          <span>
            <label for="roles">Roles</label>
            <select id="roles" name="roles">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </span>
        </div>
        <div  className={classes.row}>
          <span>
            {showUploadButton && (
              <div>
                <input type="file" onChange={handleFileUpload} />
              </div>
            )}
          </span>
        </div>
        <p className={classes.para}><h3>NOTIFICATION</h3></p>
        <div className={classes.row}>
          <span>
            <label for="sales">Sales</label>
            <select id="sales" name="sales">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </span>
          <span>
            <label for="listings">Listings</label>
            <select id="listings" name="listings">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </span>
        </div>
        <div className={classes.row}>
          <span>
            <label for="minting">Minting</label>
            <select id="minting" name="minting">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </span>
        </div>
        <button>Submit</button>
      </div>
      <div className={classes.rolePerQuantity}>
        <p><h3>Role Per Quantity</h3></p>
        <HolderPerQuantityComponent />
      </div>
      <div className={classes.rolePerQuantity}>
        <p><h3>Role Per Attribute</h3></p>
        <HolderPerAttributeComponent />
      </div>
    </div>
  );
};
export default HolderVerification;
