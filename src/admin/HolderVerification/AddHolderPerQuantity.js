import React, { useState } from "react";
import classes from "./AddHolderPerQuantity.module.css";
import { AiOutlineDelete } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
function HolderPerQuantityComponent() {
  const [rows, setRows] = useState([{ quantity: 1, role: "" }]);

  const addRow = () => {
    setRows([...rows, { quantity: 1, role: "" }]);
  };

  const removeRow = (index) => {
    const updatedRows = [...rows];
    updatedRows.splice(index, 1);
    setRows(updatedRows);
  };

  const handleQuantityChange = (index, value) => {
    const updatedRows = [...rows];
    updatedRows[index].quantity = value;
    setRows(updatedRows);
  };

  const handleRoleChange = (index, value) => {
    const updatedRows = [...rows];
    updatedRows[index].role = value;
    setRows(updatedRows);
  };

  return (
    <div>
      <form>
        {rows.map((row, index) => (
          <div key={index} className={classes.inputrow}>
            <span>
              <label>Quanity of NFTs</label>
              <input
                type="number"
                value={row.quantity}
                onChange={(e) => handleQuantityChange(index, e.target.value)}
                placeholder="Enter quantity"
              />
            </span>
            <span>
              <div>
                <label>User Role</label>
                <select
                  value={row.role}
                  onChange={(e) => handleRoleChange(index, e.target.value)}
                >
                  <option value="">Select role</option>
                  <option value="Artist">Artist</option>
                  <option value="Collector">Collector</option>
                  <option value="Curator">Curator</option>
                </select>
              </div>
              <button type="button" onClick={() => removeRow(index)}>
                <AiOutlineDelete />
              </button>
            </span>
          </div>
        ))}
        <div className={classes.btns}>
          <button className={classes.AddNewRow} type="button" onClick={addRow}>
            <AiOutlinePlus />
          </button>
          <button type="submit" className={classes.SubmitRoleNft}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default HolderPerQuantityComponent;
