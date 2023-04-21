import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./ReusableFormField/FormikControl";
import { useAddEnquiryMutation } from "../services/profile";
import { ToastContainer, toast } from "react-toastify";
import saly from '../assets/Saly-36.png'
import path from '../assets/Path 78017.png'
import fish from '../assets/Saly-1.png'
import bgimg from '../assets/BG Assets.png'

const checkboxOptions = [
  { key: "Branding", value: "branding" },
  { key: "Content Writing", value: "contentwriting" },
  { key: "Guest Posting", value: "guestposting" },
  { key: "Google ads", value: "googleads" },
  { key: "Local SEO", value: "localseo" },
  { key: "UI & UX", value: "ui&ux" },
  { key: "WebSite Development", value: "websitedevelopment" },
  { key: "WebSite Designing", value: "websitedesigning" },
  { key: "Search Engine Optimization", value: "SEO" },
  { key: "Social Media Marketing", value: "socialmediamarketing" },
];

const HomePopup = ({ visible, onClose }) => {
  const [postEnquiry] = useAddEnquiryMutation();
  if (!visible) return null;
  const handleOnClose = (e) => {
    if (e.target.id === "container") onClose();
  };

  // Initail State
  const initialValues = {
    email: "",
    service: [],
  };

  // Validation Schema
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email formate").required("Required"),
    service: Yup.array().required("Required"),
  });

  const onSubmit = async (values, onSubmitProps) => {
    console.log("Form Data", values); // Main Form Data

    const res = await postEnquiry(values);
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
      <ToastContainer />
      <div
        id="container"
        onClick={handleOnClose}
        className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center h-[100vh] "
      >
        <div className="bg-[#D8F4FF] p-3 rounded-md flex  flex-col md:justify-center justify-start items-center text-center w-10/12 m-auto gap-3  h-[80vh] overflow-auto bg-pop bg-contain">
          <img src="logo.svg" className="w-32" alt="" />

          <div className="flex items-end  relative gap-10 p-5 pt-10  " >
            <span className="text-4xl font-black" >"W</span>
            <img src={saly} className="h-20 absolute w-20 left-1/2  -translate-x-1/2 " alt="" />
            <img src={path} className="h-12 absolute w-12 left-1/2  -top-7  translate-x-1/2 " alt="" />
            <img src={fish} className="h-14 absolute w-12 left-2/3  -top-10  translate-x-1/2 " alt="" />
            <span className="text-4xl font-black" >W"</span>

          </div>

          <p className="text-sm">
            Having You In Our Company Is A Great Honor! Indeed, All Of Us Here
            Are Very Excited To Work With You.
          </p>

          <h2 className="text-2xl font-bold">What Service You Are Looking?</h2>

          <span className="text-ons text-sm font-semibold">
            We Could Definitely Help You To Grow in
          </span>

          {/* Form */}
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
            // validateOnMount
            enableReinitialize
          >
            {(formik) => {
              console.log("Formik", formik);
              return (
                <Form className="flex flex-col justify-center items-center gap-2 w-full ">
                  {/* Service  */}
                  <FormikControl
                    control="checkbox"
                    label="Select Service"
                    name="service"
                    options={checkboxOptions}
                  />

                  <div className="flex items-end  " >

                    {/* Email/Input  */}
                    <FormikControl
                      control="input"
                      type="email"
                      label="Email"
                      name="email"
                    />

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="border bg-btn  p-2  text-white active:bg-green-800 disabled:bg-slate-500"
                      disabled={!formik.isValid || formik.isSubmitting}
                    >
                      Submit
                    </button>
                  </div>

                </Form>
              );
            }}
          </Formik>

          <button
            onClick={onClose}
            className=" text-ons flex flex-col justify-center items-center group text-xs"
          >
            <span className="group-hover:text-xl duration-300">Skip</span>
            <span className="group-hover:text-xl duration-300">
              GO TO HOME TO EXPLORE MORE
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default HomePopup;
