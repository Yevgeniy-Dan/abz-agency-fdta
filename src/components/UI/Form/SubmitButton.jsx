import React from "react";
import { useFormikContext } from "formik";

const SubmitButton = ({ name }) => {
  const { handleSubmit } = useFormikContext();

  return (
    <button type="submit" onClick={handleSubmit}>
      {name}
    </button>
  );
};

export default SubmitButton;
