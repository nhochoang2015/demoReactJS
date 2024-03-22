import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ShowPass from "../ShowPass";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
import { useDispatch } from "react-redux";
import * as yup from "yup";
import { getLogin } from "../../Actions/login";
const Login = () => {
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked(!checked);
  };

  const dispatch = useDispatch();
  const schema = yup.object().shape({
    email: yup.string().required("This field is required"),
    password: yup.string().required("This field is required").min(5).max(16),
  });
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    criteriaMode: "all",
    shouldFocusError: true,
    resolver: yupResolver(schema),
  });
  const onHandleSubmit = (data) => {
    dispatch(getLogin(data));
    console.log(data);
  };
  return (
    <div className="!w-full !h-full flex items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="mt-12 ml-auto mr-auto bg-white rounded-lg shadow-md dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 ">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Sign in to your account
          </h1>
          <form
            className="space-y-4 md:space-y-6"
            onSubmit={handleSubmit(onHandleSubmit)}
          >
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <Controller
                name="email"
                control={control}
                render={({ field: { value, onChange, ref } }) => (
                  <input
                    type='text'
                    className="bg-gray-50 border placeholder-slate-400 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={value}
                    ref={ref}
                    onChange={onChange}
                  />
                )}
              />
              {errors.email && (
                <p className=" text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Password
              </label>
              <Controller
                name="password"
                control={control}
                render={({ field: { value, onChange, ref } }) => (
                  <input
                    type='password'
                    className="bg-gray-50 border placeholder-slate-400 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={value}
                    ref={ref}
                    onChange={onChange}
                  />
                )}
              />
                {errors.password && <p className=' text-red-500'>{errors.password.message}</p>}
              <div className="justify-end flex mt-2 mb-2">
                <label className="inline-flex items-center cursor-pointer">
                  {checked ? "Hide password" : "Show password"}
                  <input
                    type="checkbox"
                    value={checked}
                    className="sr-only peer"
                    onChange={handleChange}
                  />
                  <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                </label>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    aria-describedby="remember"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    required=""
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="remember"
                    className="text-gray-500 dark:text-gray-300"
                  >
                    Remember me
                  </label>
                </div>
              </div>
              <a
                href="#"
                className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                htmlForgot password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full text-white bg-blue-700 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Sign in
            </button>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              Don’t have an account yet?{" "}
              <Link
                className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                to="/register"
              >
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
