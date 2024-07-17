import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as yup from "yup";
import { userResetPassword } from "../../api/userApi";
import Navbar from "../../components/userComponent/Navbar";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import { resetPassSchema } from "../../validations/user/resetPassValidation";

const ResetPassword = () => {
  const { id, token } = useParams();
  const navigate = useNavigate();

 
  const onSubmit = async () => {
    try {
      const res = await userResetPassword(id, token, values.password);
      if (res.status === 200) {
        toast.success(res?.data?.message);
        navigate("/login");
      }
    } catch (error) {
      console.log(error.message);
      toast.error(error.response?.data?.message);
    }
  };
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        password: "",
        cpassword: "",
      },
      validationSchema: resetPassSchema,
      onSubmit,
    });
  return (
    <>
    <Navbar />
      <section className="bg-gray-200 py-10">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-full md:max-w-2xl lg:py-0">
          <div className="w-full p-6 bg-white rounded-lg shadow dark:border sm:max-w-md dark:bg-gray-400 dark:border-gray-200 sm:p-8">
            <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-dark">
              Change Password
            </h2>
            <form
              className="mt-4 space-y-4 lg:mt-5 sm:max-w-md"
              onSubmit={handleSubmit}
            >
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                >
                  New Password
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={values.password}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  className="bg-gray-500 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-300 dark:border-gray-200 dark:placeholder-gray-900 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
                {errors.password && touched.password && (
                  <p className="text-red-600">{errors.password}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="confirm-password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                >
                  Confirm password
                </label>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  name="cpassword"
                  value={values.cpassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="bg-gray-500 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-300 dark:border-gray-300 dark:placeholder-gray-900 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
                {errors.cpassword && touched.cpassword && (
                  <p className="text-red-600">{errors.cpassword}</p>
                )}
              </div>
              <button
                type="submit"
                className="w-full text-white bg-red-600 rounded-full hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium  text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Reset password
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ResetPassword;
