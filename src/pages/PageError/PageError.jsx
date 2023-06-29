import React from "react";
import "./PageError.css";

const PageError = () => {
  return (
    <div id="errorDiv">
      <div className="world">
        <div className="forward">
          <Box />
        </div>
        <Rail />
      </div>
    </div>
  );
};

const Box = () => {
  const walls = [];
  for (let i = 0; i < 6; i++) {
    walls.push(<div className="wall" key={i}></div>);
  }

  return <div className="box">{walls}</div>;
};

const Rail = () => {
  const stamps = [];
  for (let i = 0; i < 10; i++) {
   
    stamps.push(
      <div className="stamp zero" key={`zero-${i}`}>
       404
      </div>
    );
  }

  return <div className="rail">{stamps}</div>;
};

export default PageError;
