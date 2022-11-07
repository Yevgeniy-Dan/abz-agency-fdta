import { TextField } from "@mui/material";
import { useFormikContext } from "formik";
import React, { useRef } from "react";

const AppFormInputFile = ({ name }) => {
  const { values, touched, setFieldValue, errors } = useFormikContext();
  const inputFileRef = useRef(null);

  const errorState = Boolean(touched[name] && errors[name]);

  return (
    <TextField
      placeholder="Upload your photo"
      value={values[name]?.name || ""}
      error={errorState}
      inputProps={{ readOnly: true }}
      helperText={touched[name] && errors[name]}
      InputProps={{
        startAdornment: (
          <>
            <button
              onClick={() => {
                inputFileRef.current.click();
              }}
              className={"upload-file-btn " + (errorState ? "danger" : "")}
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
