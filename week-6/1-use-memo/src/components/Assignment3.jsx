import React, { useState, useMemo, useCallback } from "react";
// You have been given a list of items you shopped from the grocery store
// You need to calculate the total amount of money you spent

export const Assignment3 = () => {
  const [items, setItems] = useState([
    { name: "Chocolates", value: 10 },
    { name: "Chips", value: 20 },
    { name: "Onion", value: 30 },
    { name: "Tomato", value: 30 },
    { name: "Tomato", value: 30 },
    // Add more items as needed
  ]);

  // Your code starts here
  const totalValue = useMemo(() => {
    let sum = 0;
    for (let i = 0; i < items.length; i++) {
      sum += items[i].value;
    }
    return sum;
  }, [items]);

  function addItem() {
    setItems([
      ...items,
      {
        name: "Vanilla",
        value: 90,
      },
    ]);
  }
  function AddItem(props) {
    return (
      <div>
        <h4>{props.name}</h4>
        <h4>{props.value}</h4>
      </div>
    );
  }
  console.log("Assignment 3 re-rendered");
  return (
    <div>
      <div>
        <button onClick={addItem}>Add something</button>
      </div>
      {items.map((singleItem) => {
        return (
          <AddItem name={singleItem.name} value={singleItem.value}></AddItem>
        );
      })}
      <p>Total Value: {totalValue}</p>
    </div>
  );
};
