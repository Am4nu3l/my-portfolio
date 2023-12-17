import { useState } from "react";

function ListGroups() {
  const itmes = ["amanuel", "elias", "saron", "hewan", "yab"];
  const [selectedItem, setSelectedItem] = useState(-1);

  return (
    <>
      <h1>List Items</h1>
      <ul className="list-group">
        {itmes.map((item, index) => {
          return (
            <li
              key={index}
              className={
                selectedItem === index
                  ? "list-group-item active"
                  : "list-group-item"
              }
              onClick={() => setSelectedItem(index)}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default ListGroups;
