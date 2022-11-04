import { TextField } from "@mui/material";
import { useFormikContext } from "formik";
import React from "react";

const AppFormTextField = ({ name, ...props }) => {
  const { values, handleChange, setFieldTouched, touched, errors } =
    useFormikContext();

  return (
    <TextField
      value={values[name]}
      onChange={handleChange(name)}
      onBlur={() => setFieldTouched(name)}
      helperText={
        (touched[name] && errors[name]) ||
        (name === "phone" && "+38 (XXX) XXX-XX-XX")
      }
      error={Boolean(touched[name] && errors[name])}
      {...props}
    />
  );
};

export default AppFormTextField;
