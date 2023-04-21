import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./ReusableFormField/FormikControl";
import { useAddAppointmentMutation } from "../services/profile";
// import { getToken } from "../services/LocalStorage";
import { ToastContainer, toast } from "react-toastify";

const checkboxOptions = [
  { key: "Branding", value: "branding", icon: "GiSwordBrandish" },
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

// Initail State
const initialValues = {
  fname: "",
  lname: "",
  email: "",
  phone: "",
  description: "",
  service: "",
  budget: "",
  company: "",
  date: "",
  doc: "",
};

// Validation Schema
const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email formate").required("Required"),
  description: Yup.string().required("Required"),
  fname: Yup.string().required("Required"),
  lname: Yup.string().required("Required"),
  phone: Yup.string().required("Required"),
});

const Appointment = () => {
  const [postAppointment] = useAddAppointmentMutation();

  const onSubmit = async (values, onSubmitProps) => {
    console.log("Form Data", values); // Main Form Data
    const value = new FormData();
    value.append("fname", values.fname);
    value.append("lname", values.lname);
    value.append("email", values.email);
    value.append("phone", values.phone);
    value.append("description", values.description);
    value.append("service", values.service);
    value.append("budget", values.budget);
    value.append("company", values.company);
    value.append("date", values.date);
    value.append("doc", values.doc);

    console.log(value.get("service"), "service");
    console.log(value.get("email"), "email");
    // append(value)

    const res = await postAppointment(value);

    console.log(res, "71");
    // onSubmitProps.resetForm(); // Reset Form on submit
    if (res.data.status === "success") {
      toast(res.data.message);
    }
    if (res.data.status === "failed") {
      toast(res.data.message);
    }

    onSubmitProps.setSubmitting(false); // This set isSubmittion false after save
    //   onSubmitProps.resetForm(); // Reset Form on submit
  };

  const [formValues, setFormValues] = useState(null);

  return (
    <>
      <ToastContainer />
      <div>
        <Formik
          initialValues={formValues || initialValues}
          onSubmit={onSubmit}
          // validationSchema={validationSchema}
          // validateOnMount
          enableReinitialize
        >
          {(formik) => {
            return (
              <Form className="flex flex-col justify-center items-center gap-5 w-full ">

                {/* FirstName/Input  */}
                <FormikControl
                  control="checkboxcustom"
                  label="Select Service"
                  name="service"
                  options={checkboxOptions}
                />


                <div className=" grid grid-cols-1 md:grid-cols-2 gap-2 w-11/12 justify-items-center justify-center" >
                  {/* FirstName/Input  */}
                  <FormikControl
                    control="input"
                    type="text"
                    label="First Name"
                    name="fname"
                    placeholder="Enter Your First Name"
                  />

                  {/* lastName/Input  */}
                  <FormikControl
                    control="input"
                    type="text"
                    label="Last Name"
                    name="lname"
                    placeholder="Enter Your Last Name"
                  />
                </div>


                <div className=" grid grid-cols-1 md:grid-cols-2 gap-2 w-11/12 justify-items-center justify-center" >
                  {/* Email/Input  */}
                  <FormikControl
                    control="input"
                    type="email"
                    label="Email"
                    name="email"
                    placeholder="Enter Your Email"
                  />
                  {/* Email/Input  */}
                  <FormikControl
                    control="input"
                    type="number"
                    label="Phone Number"
                    name="phone"
                    placeholder="Enter Your phone Number"
                  />
                </div>


                <div className=" grid grid-cols-1 md:grid-cols-2 gap-2 w-11/12 justify-items-center justify-center" >

                  {/* lastName/Input  */}
                  <FormikControl
                    control="input"
                    type="text"
                    label="Company Name"
                    name="company"
                    placeholder="Enter Your Company Name"
                  />


                  {/* lastName/Input  */}
                  <FormikControl
                    control="input"
                    type="text"
                    label="Estimate Budget"
                    name="budget"
                    placeholder="Enter Your Budget"
                  />
                </div>


                <div className=" grid grid-cols-1 md:grid-cols-2 gap-2 w-11/12 justify-items-center justify-center" >

                  {/* TextArea */}
                  <FormikControl
                    control="date"
                    label="Select Time & Date"
                    name="date"
                  />

                  {/* Email/Input  */}
                  <div className="row-span-2 " >
                    <FormikControl
                      control="image"
                      type="file"
                      label="Upload your Document If Any"
                      name="doc"
                    />
                  </div>




                </div>

                {/* TextArea */}
                <FormikControl
                  control="textarea"
                  label="How Can We Help You"
                  name="description"
                  placeholder="Your Requirments"
                />



                {/* Submit Button */}
                <button
                  type="submit"
                  className="border bg-btn  p-2 my-2 text-white active:bg-green-800 disabled:bg-slate-500 rounded"
                  disabled={!formik.isValid || formik.isSubmitting}
                >
                  Book Now
                </button>
              </Form>
            );
          }}
        </Formik>
      </div>
    </>
  );
};

export default Appointment;
