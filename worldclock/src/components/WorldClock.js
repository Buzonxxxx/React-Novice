import React from "react";

const WorldClock = ({ inputTime, onInputChange }) => {
  return (
    <div>
      <input
        type="text"
        value={inputTime}
        onChange={e => onInputChange(e.target.value)}
      />
      <div>{new Date(inputTime).toString()}</div>
    </div>
  );
};

export default WorldClock;
