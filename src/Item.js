import React, { useState } from "react";
import ItemList from "./ItemList";

function Item({ itemObj, onRemove, onToggleChecked }) {
  const [isChecked, setIsChecked] = useState(true);
  const handleRemoveItem = () => {
    onRemove(itemObj.id);
  };
  const handleItemsChecked = () => {
    setIsChecked(!isChecked);
    itemObj.isChecked = !isChecked;
  };

  return (
    <div className="mb-2">
      <li className="list-group-item d-flex justify-content-between align-items-center mb-3">
        <div>
          {itemObj.quantity} {itemObj.name}
        </div>
        <div>
          <button
            onClick={handleRemoveItem}
            className="delete-btn btn-danger rounded-circle"
            style={{ backgroundColor: "red", color: "white" }}
          >
            <i className="fas fa-trash"></i>
          </button>
          <button
            onClick={onToggleChecked}
            className="check-btn btn-success  rounded-circle "
            style={{ backgroundColor: "green", color: "white" }}
          >
            {itemObj.isChecked ? (
              <i className="fas fa-times"></i>
            ) : (
              <i className="fas fa-check"></i>
            )}
          </button>
        </div>
      </li>
    </div>
  );
}

export default Item;
