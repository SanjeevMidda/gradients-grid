import React, { useEffect, useState } from "react";

const Color = () => {
  let randomColor = () => {
    let colorOne = Math.floor(Math.random() * 255);
    let colorTwo = Math.floor(Math.random() * 255);
    let colorThree = Math.floor(Math.random() * 255);

    return `rgb(${colorOne}, ${colorTwo}, ${colorThree})`;
  };

  const [colorSelected, setColorSelected] = useState(
    `linear-gradient(${randomColor()}, ${randomColor()})`
  );

  let colorStyles = {
    background: colorSelected,
  };

  let newColor = () => {
    setColorSelected(`linear-gradient(${randomColor()}, ${randomColor()})`);
  };

  useEffect(() => {
    setInterval(newColor, 1);
  }, []);
  return (
    <div className="color" style={colorStyles} onClick={newColor}>
      {/* Color */}
    </div>
  );
};

export default Color;
