import React from "react";
import { useAppContext } from "../../providers/app.provider";
import "./InputBase.css";

const InputBase = () => {
  const { handleOpen } = useAppContext();
  return (
    <input
      className="input-root"
      type="button"
      value="Schedule"
      onClick={handleOpen}
    />
  );
};

export default InputBase;
