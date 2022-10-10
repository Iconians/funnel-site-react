import React from "react";
import "./InputBase.css"

const InputBase = ({open}) => (

  <input className="input-root" type="button" value="Schedule" onClick={open} />
);

export default InputBase;