import React from "react";

const EditInventoryItem = (props) => {
  console.log(props);
  console.log(props.match.params);
  return (
    <div>
      {props && (
        <>
          <h1>helloooo</h1>
          {/* <p>{inventoryItems.status}</p> */}
        </>
      )}
    </div>
  );
};

export default EditInventoryItem;
