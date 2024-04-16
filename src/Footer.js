import React from "react";

function Footer({ items }) {
  let completedItem = items.filter((item) => item.isChecked).length;
  return (
    <div className="center">
      {" "}
      {/* Apply centering styles */}
      <p>
        You have {items.length} items in your list, and you already completed{" "}
        {completedItem}
      </p>
    </div>
  );
}

export default Footer;
