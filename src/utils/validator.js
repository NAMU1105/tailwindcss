import * as Yup from "yup";

// error message에는 LocalizedStrings배열에 해당하는 키값을 넣어준다.
export const LoginSchema = Yup.object().shape({
  strEmail: Yup.string().email("invalidEmail").required("required"),
  strPassword: Yup.string().required("required"),
});
export const SignupSchema = Yup.object().shape({
  strEmail: Yup.string().email("invalidEmail").required("required"),
  strPassword: Yup.string()
    .min(10, "tooShort")
    .max(15, "tooLong")
    .required("required"),
  strFirstName: Yup.string()
    .min(2, "tooShort")
    .max(50, "tooLong")
    .required("required"),
  strLastName: Yup.string()
    .min(2, "tooShort")
    .max(50, "tooLong")
    .required("required"),
  isAgreed: Yup.boolean().required("required").oneOf([true], "mustAgree"),
});
export const ConfirmEmailSchema = Yup.object().shape({
  strConfirmEmailFirst: Yup.string().required("required"),
  strConfirmEmailSecond: Yup.string().required("required"),
  strConfirmEmailThird: Yup.string().required("required"),
  strConfirmEmailFourth: Yup.string().required("required"),
  strConfirmEmailFifth: Yup.string().required("required"),
  strConfirmEmailSixth: Yup.string().required("required"),
});
