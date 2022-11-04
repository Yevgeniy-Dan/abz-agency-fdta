import React from "react";
import { Formik } from "formik";

const AppForm = ({
  initialValues,
  validationSchema,
  onSubmit = (f) => f,
  children,
}) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={async (values, actions) => {
        const submitRes = await onSubmit(values);
        console.log(submitRes);
        actions.resetForm({
          values: {
            ...initialValues,
          },
        });
      }}
      validationSchema={validationSchema}
    >
      {() => {
        return <>{children}</>;
      }}
    </Formik>
  );
};

export default AppForm;
