import * as yup from "yup";

export   const resetPassSchema = yup.object().shape({
    password: yup
      .string()
      .min(5, "Password Should Conatain 5-16 Characters")
      .max(16, "Password Should Conatain 5-16 Characters")
      .required("Required"),
    cpassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Password must match")
      .required("Required"),
  });