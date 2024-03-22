import React, { useState,useEffect } from "react";
import { useDispatch } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { editUser } from "../Actions/user";
const EditUserModal = (props) => {
  const [showModal, setShowModal] = useState(false);

  const [file, setFile] = useState();
  const [reviewImg, setReviewImg] = useState();
  const dispatch = useDispatch();
  const schema = yup.object().shape({
    email: yup.string().required("This field is required"),
    name: yup.string().required("This field is required"),
  });
  const {
    control, clearErrors,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: props.email,
      name: props.name,
      photo: file,
    },
    criteriaMode: "all",
    shouldFocusError: true,
    resolver: yupResolver(schema),

  });

  const onSubmitHandler = (data) => {
    const newData = {
      id: props.id,
      photo: reviewImg,
      email: data.email,
      name: data.name,
    };

    dispatch(editUser(newData));
    setShowModal(false);
  };
  useEffect(() => {
    clearErrors();
    if (!file) {
      setReviewImg(null);
      return;
    }
    const objUrl = URL.createObjectURL(file);
    setReviewImg(objUrl);
    return () => URL.revokeObjectURL(objUrl);
  }, [file]);

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setFile(null);
      return;
    }
    setFile(e.target.files[0]);
    setReviewImg(e.target.files[0].name);
  };
  return (
    <div>
      <button onClick={() => setShowModal(true)}>
        <a
          href="#"
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline mr-2"
        >
          Edit
        </a>
      </button>
      {showModal ? (
        <div className="absolute top-0 left-0 z-[999] w-full h-screen bg-slate-300 bg-opacity-50 flex items-center">
          <div className="m-auto z-50 justify-center items-center">
            <div className="relative p-4 w-full max-w-md max-h-full">
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Edit User
                  </h3>
                  <button
                    type="button"
                    className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    data-modal-hide="authentication-modal"
                    onClick={() => {
                      setShowModal(false);
                    }}
                  >
                    <svg
                      className="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>

                <div className="p-4 md:p-5">
                  <form
                    className="space-y-4"
                    onSubmit={handleSubmit(onSubmitHandler
                      
                    )}
                  >
                    <div>
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Enter email
                      </label>
                      <Controller
                        name="email"
                        defaultValue={props.email}
                        control={control}
                        render={({ field: { value, onChange, ref } }) => (
                          <input
                            type="text"
                            className="bg-gray-50 border placeholder-slate-400 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            value={value}
                            ref={ref}
                            onChange={onChange}
                          />
                        )}
                      />
                      {errors.email && (
                        <p className=" text-red-500">{errors.email.message}</p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="name"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Enter name
                      </label>
                      <Controller
                        name="name"
                        control={control}
                        render={({ field: { value, onChange, ref } }) => (
                          <input
                            type="text"
                            className="bg-gray-50 border placeholder-slate-400 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            value={value}
                            ref={ref}
                            onChange={onChange}
                          />
                        )}
                      />
                      {errors.name && (
                        <p className=" text-red-500">{errors.name.message}</p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="photo"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Enter photo
                      </label>
                      <Controller
                        name="photo"
                        control={control}
                        render={({ field: { ref } }) => (
                          <input
                            type="file"
                            className="bg-gray-50 border placeholder-slate-400 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"

                            ref={ref}
                            onChange={onSelectFile}
                          />
                        )}
                      />
                    </div>
                    <div className="w-full h-20">
                      <img className="h-20 border" src={reviewImg} alt="" />
                    </div>
                    <button
                      type="submit"
                      className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Update
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default EditUserModal;
