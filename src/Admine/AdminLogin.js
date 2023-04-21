import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import FormikControl from "../components/ReusableFormField/FormikControl";
import { useAdminLoginMutation } from "../services/profile";
import { ToastContainer, toast } from "react-toastify";
import { getToken, storeToken } from "../services/LocalStorage";
const AdminLogin = () => {
  const navigate = useNavigate();

  //   const handleLogin = () => {
  //     navigate("/admin/dashboard");
  //   };

  // Initail State
  const initialValues = {
    email: "",
    password: "",
  };

  const [adminLogin] = useAdminLoginMutation();

  const onSubmit = async (values, onSubmitProps) => {
    console.log("Form Data", values);
    const res = await adminLogin(values);

    if (res.data.status === "success") {
      console.log(res, "30");
      storeToken(res.data.token);
      navigate("/admin/dashboard");
    }
    if (res.data.status === "failed") {
      toast(res.data.message);
    }
    // Main Form Data
    onSubmitProps.setSubmitting(false); // This set isSubmittion false after save
    onSubmitProps.resetForm(); // Reset Form on submit
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string().required("Required"),
  });
  const token = getToken("token")

  useEffect(() => {
    if (token) {
      navigate("/admin/dashboard");
    }

  }, [token])

  return (
    <>
      <ToastContainer />
      <div
        className="min-h-screen w-full bg-cover
                 bg-blackimg  bg-no-repeat bg-center flex justify-center items-center "
      >
        <span className="text-sm lg:w-4/12 sm:w-7/12 w-10/12  bg-black/30 p-4  backdrop-blur-sm rounded-xl shadow-2xl text-black object-cover">
          <h1 className="flex justify-center items-center p-3 text-white">
            Admin Login
          </h1>

          <div className="flex flex-col gap-4">
            <Formik
              initialValues={initialValues}
              onSubmit={onSubmit}
              validationSchema={validationSchema}
              validateOnMount
              enableReinitialize
            >
              {(formik) => {
                return (
                  <Form className="flex flex-col gap-2   justify-center items-center shadow ">
                    {/* Email */}
                    <FormikControl
                      control="input"
                      label="Email"
                      type="email"
                      name="email"
                      placeholder="Email address"
                    />

                    {/* Password */}
                    <FormikControl
                      control="input"
                      label="Password"
                      type="password"
                      name="password"
                    />

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="border mt-5 bg-blue-700 w-10/12 rounded-sm  p-2 text-white active:bg-green-800 disabled:bg-slate-500"
                      disabled={!formik.isValid || formik.isSubmitting}
                    >
                      Sign in
                    </button>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </span>
      </div>
    </>
  );
};

export default AdminLogin;
