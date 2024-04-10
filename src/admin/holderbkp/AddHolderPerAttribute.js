import React, { useState } from "react";
import classes from "./AddHolderPerAttribute.module.css";
import { AiOutlineDelete } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
function HolderPerAttributeComponent() {
  const [rows, setRows] = useState([{ attributeName:"",attributeValue: "", role: "" }]);

  const addRow = () => {
    setRows([...rows, { attributeName:"",attributeValue: "", role: "" }]);
  };

  const removeRow = (index) => {
    const updatedRows = [...rows];
    updatedRows.splice(index, 1);
    setRows(updatedRows);
  };

  const handleAttributeValueChange = (index, value) => {
    const updatedRows = [...rows];
    updatedRows[index].attributeValue = value;
    setRows(updatedRows);
  };

  const handleRoleChange = (index, value) => {
    const updatedRows = [...rows];
    updatedRows[index].role = value;
    setRows(updatedRows);
  };

  const handleAttributeChange = (index, value) => {
    const updatedRows = [...rows];
    updatedRows[index].attributeName = value;
    setRows(updatedRows);
  };

  return (
    <div>
      <form>
        {rows.map((row, index) => (
          <div key={index} className={classes.inputrow}>
            <span>
            <label>Metadata Attribute</label>
            <select
                  value={row.role}
                  onChange={(e) => handleAttributeChange(index, e.target.value)}
                >
                  <option value="">Select Attribute</option>
                  <option value="Background">Background</option>
                  <option value="Hair">Hair</option>
                  <option value="Face">Face</option>
                </select>
            </span>
            <span>
              <label>Attribute Value</label>
              <input
                type="text"
                value={row.quantity}
                onChange={(e) => handleAttributeValueChange(index, e.target.value)}
                placeholder="Attribute Value"
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

export default HolderPerAttributeComponent;
