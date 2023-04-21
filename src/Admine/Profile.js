import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "../components/ReusableFormField/FormikControl";
import {
  useAdminProfileQuery,
  useChangePasswordMutation,
} from "../services/profile";
import { getToken } from "../services/LocalStorage";
import { ToastContainer, toast } from "react-toastify";

const Profile = () => {
  const token = getToken("token");
  const { data } = useAdminProfileQuery(token);
  const [changePassword] = useChangePasswordMutation();

  // Initail State
  const initialValues = {
    oldpass: "",
    newpass: "",
    confirmpass: "",
  };

  const onSubmit = async (values, onSubmitProps) => {
    // console.log("Form Data", values);  // Main Form Data

    const res = await changePassword({ values, token });
    console.log(res);
    if (res.data.status === "success") {
      console.log(res.data.message);
    }
    if (res.data.status === "failed") {
      toast(res.data.message);
    }
    onSubmitProps.setSubmitting(false); // This set isSubmittion false after save
    onSubmitProps.resetForm(); // Reset Form on submit
  };

  // Validation Schema
  const validationSchema = Yup.object({
    oldpass: Yup.string().required("Required"),
    newpass: Yup.string().required("Required"),
    confirmpass: Yup.string()
      .oneOf([Yup.ref("newpass"), ""], "Password must match")
      .required("Required"),
  });

  return (
    <>
      <ToastContainer />

      <div>
        <div className="grid md:grid-cols-2 justify-items-center items-center grid-cols-1 p-3 gap-3">
          <img
            className="max-w-sm w-full h-full rounded-md"
            src={`http://localhost:7001/${data?.pimage}`}
            alt=""
          />
          <div className="grid md:justify-items-start w-full justify-items-center ">
            <div className="flex flex-col  items-center justify-center md:items-start">
              <h1>Samshad </h1>
              <span className="text-ons">{data?.name}</span>
            </div>
          </div>
        </div>

        {/* Confirm Password */}
        <div className="w-11/12 py-5 m-auto">
          <h1>Change Your Password</h1>
          <div>
            <Formik
              initialValues={initialValues}
              onSubmit={onSubmit}
              validationSchema={validationSchema}
              // validateOnMount
              enableReinitialize
            >
              {(formik) => {
                {
                  /* console.log("Formik", formik) */
                }
                return (
                  <Form className="flex flex-col justify-center items-center gap-4 text-gray-400 w-full p-12">
                    {/* Email/Input  */}
                    <FormikControl
                      control="input"
                      type="password"
                      label="Old Password"
                      name="oldpass"
                    />
                    <FormikControl
                      control="input"
                      type="password"
                      label="New Password"
                      name="newpass"
                    />
                    <FormikControl
                      control="input"
                      type="password"
                      label="Confirm Password"
                      name="confirmpass"
                    />

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="border bg-blue-700  p-2 text-white active:bg-green-800 disabled:bg-slate-500"
                      disabled={!formik.isValid || formik.isSubmitting}
                    >
                      Submit
                    </button>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
