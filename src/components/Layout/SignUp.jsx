import React, { useContext, useState } from "react";
import * as Yup from "yup";

import AppFormRadioGroup from "../UI/Form/AppFormRadioGroup";
import AppFormInputFile from "../UI/Form/AppFormInputFile";
import AppFormTextField from "../UI/Form/AppFormTextField";
import SubmitButton from "../UI/Form/SubmitButton";
import AppForm from "../UI/Form/AppForm";
import AppCurcularProgress from "../UI/Progress/AppCurcularProgress";
import AppErrorMessage from "../UI/Error/AppErrorMessage";
import AuthService from "../../services/AuthService";
import UsersContext from "../../store/users-context";

const getErrorMessages = (message) => {
  const messagesArr = Object.values(message);

  return messagesArr.flat();
};

const initialValues = {
  name: "",
  email: "",
  phone: "",
  position: 1,
  photo: {},
};

const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg"];

const phoneRegExp = "^[+]{0,1}380([0-9]{9})$";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().min(2).max(60).label("Name"),
  email: Yup.string().required().min(2).max(100).email().label("Email"),
  phone: Yup.string()
    .required()
    .matches(phoneRegExp, "Invalid number")
    .label("Phone"),
  position: Yup.number().required().min(1),
  photo: Yup.mixed()
    .test(
      "fileSize",
      "The photo may not be greater than 5 Mbytes.",
      (value) => value.size <= 5 * 1000 * 1000
    )
    .test("fileType", "Image is invalid.", (value) =>
      SUPPORTED_FORMATS.includes(value.type)
    ),
});

const SignUp = () => {
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState(null);

  const ctx = useContext(UsersContext);

  const signUpHandle = async (values) => {
    try {
      setLoading(true);
      await AuthService.register(values);

      setServerError(null);
      const data = await ctx.onGetUsers();

      ctx.assignUsersValue(data.usersData.users, data.usersData, false);
    } catch (error) {
      switch (error.response.status) {
        case 401:
          setServerError("Invalid token. Try again after a while");
          break;
        case 409:
          setServerError(error.response.data.message);
          break;
        case 422:
          setServerError(getErrorMessages(error.response.data.fails));
          break;
        default:
          setServerError("Unknown error");
          break;
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="my-6">
      <h1 className="text-center m-3">Working with POST request</h1>

      <div className="d-flex justify-content-center">
        <AppForm
          validationSchema={validationSchema}
          initialValues={initialValues}
          onSubmit={signUpHandle}
        >
          <div className="d-flex justify-content-center flex-column form">
            <AppFormTextField name="name" label="Your Name" />
            <AppFormTextField name="email" label="Email" />
            <AppFormTextField name="phone" label="Phone" />

            <AppFormRadioGroup value={initialValues.position} />
            <AppFormInputFile name="photo" value={initialValues.photo} />

            <AppErrorMessage error={serverError} />

            <AppCurcularProgress loading={loading} />
            <div className="d-flex justify-content-center">
              <SubmitButton name="Sign Up" />
            </div>
          </div>
        </AppForm>
      </div>
    </div>
  );
};

export default SignUp;
