import React from "react";
import InputMask from "react-input-mask";

const MaskedInput = ({ value, onChange,mask,readOnly }) => {
  return <InputMask mask={mask} value={value} onChange={onChange}  readOnly={readOnly}/>;
};

export default MaskedInput;
