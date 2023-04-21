import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./ReusableFormField/FormikControl";
import { useAddContactUsMutation } from "../services/profile";
import { ToastContainer, toast } from "react-toastify";

// Initail State
const initialValues = {
  fname: "",
  lname: "",
  email: "",
  phone: "",
  description: "",
};

const ContactUsForm = () => {
  const [formValues, setFormValues] = useState(null);

  // Validation Schema
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email formate").required("Required"),
    description: Yup.string().required("Required"),
    fname: Yup.string().required("Required"),
    lname: Yup.string().required("Required"),
    phone: Yup.string().required("Required"),
  });

  const [postContactUs] = useAddContactUsMutation();

  const onSubmit = async (values, onSubmitProps) => {
    console.log("Form Data", values); // Main Form Data

    const res = await postContactUs(values);
    console.log(res, "71");
    // onSubmitProps.resetForm(); // Reset Form on submit
    if (res.data.status === "success") {
      toast(res.data.message);
    }
    if (res.data.status === "failed") {
      toast(res.data.message);
    }
    onSubmitProps.setSubmitting(false); // This set isSubmittion false after save
    onSubmitProps.resetForm(); // Reset Form on submit
  };

  return (
    <>
      <div className="flex flex-col gap-4 w-10/12 m-auto">
        <h2 className="text-xl  font-thin">GET IN TOUCH</h2>

        <hr className="border border-btn " />

        <h1 className="text-3xl font-bold">
          Let's Level Up Your Brand Togehter
        </h1>

        <Formik
          initialValues={formValues || initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
          // validateOnMount
          enableReinitialize
        >
          {(formik) => {
            console.log("Formik", formik);
            return (
              <Form className="flex flex-col justify-center items-center gap-1 w-full ">
                {/* FirstName/Input  */}
                <FormikControl
                  control="input"
                  type="text"
                  label="First Name"
                  name="fname"
                />

                {/* lastName/Input  */}
                <FormikControl
                  control="input"
                  type="text"
                  label="Last Name"
                  name="lname"
                />

                {/* Email/Input  */}
                <FormikControl
                  control="input"
                  type="email"
                  label="Email"
                  name="email"
                />

                {/* Email/Input  */}
                <FormikControl
                  control="input"
                  type="number"
                  label="Phone Number"
                  name="phone"
                />

                {/* TextArea */}
                <FormikControl
                  control="textarea"
                  label="How Can We Help You"
                  name="description"
                />

                {/* Submit Button */}
                <button
                  type="submit"
                  className="border bg-btn  p-2 my-2 text-white active:bg-green-800 disabled:bg-slate-500"
                  disabled={!formik.isValid || formik.isSubmitting}
                >
                  Send Message
                </button>
              </Form>
            );
          }}
        </Formik>
        <ToastContainer />
      </div>
    </>
  );
};

export default ContactUsForm;
