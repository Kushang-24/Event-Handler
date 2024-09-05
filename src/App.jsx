import React, { useState } from "react";

const App = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [h2Style, setH2Style] = useState({});
  const [stylesApplied, setStylesApplied] = useState(false);
  
  const hide = () => {
    setIsVisible(false);
  };

  const show = () => {
    setIsVisible(true);
  };

  const toggle = () => {
    setIsVisible(prev => !prev);
  };

  const addStyleToH2 = () => {
    if (stylesApplied) {
      setH2Style({});
    } else {
      setH2Style({
        color: "gray",
        fontWeight: "bold",
        fontSize: "40px",
      });
    }
    setStylesApplied(prev => !prev);
  };

  return (
    <>
      <div>
        <h1 style={{ display: isVisible ? "block" : "none" }}>
          Click buttons to change my visibility
        </h1>
        <button className="me-3 mt-3" onClick={hide}>Hide</button>
        <button className="me-3 mt-3" onClick={show}>Show</button>
        <button className="me-3 mt-3" onClick={toggle}>Toggle</button>
      </div>
      <div>
      <h2 className="mt-5" onClick={addStyleToH2} style={h2Style}>
        Click me to toggle styles
      </h2>
      </div>
    </>
  );
};

export default App;
