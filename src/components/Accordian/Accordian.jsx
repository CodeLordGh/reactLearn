// Usefull imports for this accordian app
import { useState } from "react";
import classes from "./Accordian.module.css";
import data from "./data.js";

const Accordian = () => {
  // Declaring state variables
  const [selected, setSelected] = useState(null);
  const [multiSected, setMultiSelected] = useState([]);
  const [multiSelection, setMultiSelection] = useState(false);

  // function to handle single selection
  function handleClick(id) {
    // Set the clicked question if not already
    setSelected(id === selected ? null : id);
  }
  //function to handle multiple selection
  function handleMultiSelection(dataId) {
    let copyData = [...multiSected];
    let indexOfDataId = copyData.indexOf(dataId);

    if (indexOfDataId === -1) {
      copyData.push(dataId);
    } else copyData.splice(dataId, 1);

    setMultiSelected(copyData);
  }

  return (
    <div className={classes.container}>
      <button onClick={() => setMultiSelection(!multiSelection)}>
        Multi-Selection
      </button>
      {data && data.length > 0 ? (
        data.map((item) => (
          <div
            key={item.id}
            onClick={
              multiSelection
                ? () => handleMultiSelection(item.id)
                : () => handleClick(item.id)
            }
            className={classes.content}
          >
            {item.question} +
            {multiSelection ? (
              multiSected.indexOf(item.id) !== -1 && (
                <div className={classes.content}> {item.answer} </div>
              )
            ) : selected === item.id ? (
              <div className={classes.content}> {item.answer} </div>
            ) : (
              ""
            )}
          </div>
        ))
      ) : (
        <div>No data found!</div>
      )}
    </div>
  );
};

export default Accordian;
