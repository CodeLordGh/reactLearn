import { useState } from "react";
import classes from "./RandomColor.module.css";
const RandomColor = () => {
  const random = [1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];

  const [color, setColor] = useState("#d9d9dd");
  const [colorType, setColorType] = useState(false);
  //   let randomPicked = "#";
  const randomNum = (length) => Math.floor(Math.random() * length);

  const handleHex = () => {
    let randomPicked = "#";
    for (let i = 0; i < 6; i++) {
      randomPicked += random[randomNum(random.length)];
    }
    setColor(randomPicked);
  };
  const handleRgb = () => {
    const r = randomNum(256);
    const g = randomNum(256);
    const b = randomNum(256);

    const rgb = `rgb(${r}, ${g}, ${b})`;
    setColor(rgb);
  };
  return (
    <div
      className={classes.container}
      style={{ width: "100vw", height: "100vh", backgroundColor: color }}
    >
      <h2>Random Color Generator</h2>
      {/* <span>Click down</span> */}
      <h4
        className={classes.colorType}
        onClick={() => setColorType(!colorType)}
      >
        Change Color Type
      </h4>
      <button onClick={colorType ? () => handleRgb() : () => handleHex()}>
        Change Color
      </button>
      {colorType ? <h4>RGB</h4> : <h4>HEX</h4>}
      {colorType ? <h1>{color}</h1> : <h1>{color}</h1>}
    </div>
  );
};

export default RandomColor;
