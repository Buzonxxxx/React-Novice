import React from "react";

const UserInput = ({submit, change, value}) => {
  const inputStyle = {
    width: "500px",
    lineHeight: "50px",
    border: "solid blue 1px",
    margin: "10px auto",
    background: "linear-gradient(#eee, #fff)",
    textAlign: "center",
    fontSize: "20px"
  };
  return (
    <form style={{ textAlign: "center" }} onSubmit={submit}>
      <input
        style={inputStyle}
        type="text"
        onChange={change}
        value={value}
        placeholder="add new task here"
      />
      <br />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default UserInput;
