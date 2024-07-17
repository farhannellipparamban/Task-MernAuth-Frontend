import { useFormik } from 'formik'
import React from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { loginVerification } from '../../api/userApi'
import { toast } from 'react-toastify'
import { userLogin } from '../../reduxStore/slices/userSlice'
import { loginSchema } from '../../validations/user/loginValidation'

const UserLogin = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const {values,errors,touched,handleBlur,handleChange,handleSubmit} = useFormik({
    initialValues:{
      email:"",
      password:"",
    },
    validationSchema: loginSchema,
    onSubmit,
  })

  async function onSubmit() {
    try {
      const res = await loginVerification(values);
      if (res?.status === 200) {
        const { token, user } = res.data;
        localStorage.setItem("userToken", token);
        dispatch(
          userLogin({
            token: token,
            user: user,
          })
        );
        toast.success(res?.data?.message);
        navigate("/");
      }
    } catch (error) {
      toast.error(error.response?.data?.message);
    }
  }

  return (
    <>
      <div className="flex justify-center items-center font-[sans-serif] text-[#333] h-full min-h-screen p-4">
          <div className="max-w-md w-full mx-auto">
            <form
              onSubmit={handleSubmit}
              className="bg-opacity-70 bg-white rounded-2xl p-6 shadow-[0_2px_16px_-3px_rgba(6,81,237,0.3)]"
            >
              <div className="mb-10">
                <h3 className="text-3xl font-extrabold">Sign in</h3>
              </div>
              <div className="mb-6">
                <div className="relative flex flex-col">
                  <input
                    name="email"
                    type="email"
                    placeholder="Enter email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="bg-transparent text-sm border-b border-[#333] px-2 py-3 outline-none placeholder:text-[#333]"
                  />
                  {errors.email && touched.email && (
                    <p className="text-red-600 mt-1">{errors.email}</p>
                  )}
                </div>
              </div>
              <div className="mb-6">
                <div className="relative flex flex-col">
                  <input
                    name="password"
                    type="password"
                    placeholder="Enter password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="bg-transparent text-sm border-b border-[#333] px-2 py-3 outline-none placeholder:text-[#333]"
                  />
                  {errors.password && touched.password && (
                    <p className="text-red-600 mt-1">{errors.password}</p>
                  )}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#333"
                    stroke="#333"
                    className="w-[18px] h-[18px] absolute right-2 cursor-pointer"
                    viewBox="0 0 128 128"
                  >
                    <path
                      d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
                      data-original="#000000"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="flex items-center justify-between gap-2 mb-6">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 shrink-0 border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-3 block text-sm">
                    Remember me
                  </label>
                </div>
                <div>
                  <Link
                    to="/forgetPassword"
                    className="text-sm font-semibold hover:underline"
                  >
                    Forgot Password?
                  </Link>
                </div>
              </div>
              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full py-2.5 px-4 text-sm font-semibold rounded-full text-white bg-[#ff0808] hover:bg-[#ff4848] focus:outline-none"
                >
                  Sign in
                </button>
                <p className="text-sm text-center mt-6">
                  Don't have an account{" "}
                  <Link
                    to="/signup"
                    className="text-blue-500 hover:underline ml-1 whitespace-nowrap"
                  >
                    Register here
                  </Link>
                </p>
              </div>
              <hr className="my-6 border-gray-500" />
              <div className="space-x-8 flex justify-center">
                
              </div>
            </form>
          </div>
        </div>
    </>
  )
}

export default UserLogin
