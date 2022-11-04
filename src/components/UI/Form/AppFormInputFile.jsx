import { TextField } from "@mui/material";
import { useFormikContext } from "formik";
import React, { useEffect, useRef } from "react";

const AppFormInputFile = ({ name }) => {
  const {
    values,
    handleChange,
    touched,
    setFieldValue,
    errors,
    setFieldTouched,
  } = useFormikContext();
  const inputFileRef = useRef(null);

  return (
    <TextField
      placeholder="Upload your photo"
      value={values[name]?.name || ""}
      error={Boolean(touched[name] && errors[name])}
      inputProps={{ readOnly: true }}
      helperText={touched[name] && errors[name]}
      InputProps={{
        startAdornment: (
          <>
            <button
              onClick={() => {
                inputFileRef.current.click();
              }}
              className="upload-file-btn"
            >
              Upload
            </button>
            <input
              onChange={(v) => {
                setFieldValue("photo", v.currentTarget.files[0]);
              }}
              ref={inputFileRef}
              type="file"
              hidden
            />
          </>
        ),
      }}
    />
  );
};

export default AppFormInputFile;
