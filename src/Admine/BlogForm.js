import React, { useState, useRef } from "react";
import { Formik, Form, FieldArray, Field } from "formik";
import * as Yup from "yup";
import FormikControl from "../components/ReusableFormField/FormikControl";
import { useAddBlogMutation, useGetCategoryQuery } from "../services/profile";
import { ToastContainer, toast } from "react-toastify";
import { getToken } from "../services/LocalStorage";

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

const BlogForm = () => {


  // Initail State
  const initialValues = {
    mainTitle: "",
    mainTitleImg: "",
    heading: "",
    title1: "",
    title2: "",
    title3: "",
    title4: "",
    title5: "",
    title1Content: "",
    title2Content: "",
    title3Content: "",
    title4Content: "",
    title5Content: "",
    title1img: "",
    title2img: "",
    title3img: "",
    category: "",
    title4img: "",
    title5img: "",
    readBy: "",
    duration: "",
    keyTakeWays: ['']
  };
  const token = getToken("token");
  const [postBlog] = useAddBlogMutation();
  const { data } = useGetCategoryQuery();


  const options = data?.map(({ category }) => {
    return {
      value: category,
      key: category,
    };
  });

  console.log(options, "60")
  const reactselectOptions = [
    { value: "", key: "markeing" },
    { value: "markeing", key: "markeing" },
    { value: "SEO", key: "SEO" },
    { value: "desing", key: "desing" },
  ];


  const onSubmit = async (values, onSubmitProps) => {
    console.log("Form Data", values); // Main Form Data
    const {
      mainTitle,
      mainTitleImg,
      heading,
      title1,
      title2,
      title3,
      title4,
      title5,
      title1Content,
      title2Content,
      title3Content,
      title4Content,
      title5Content,
      title1img,
      title2img,
      title3img,
      title4img,
      title5img,
      readBy,
      category,
      duration,
      keyTakeWays,
    } = values;
    const value = new FormData();

    value.append("mainTitle", mainTitle);
    value.append("mainTitleImg", mainTitleImg);
    value.append("heading", heading);
    value.append("title1", title1);
    value.append("title2", title2);
    value.append("title3", title3);
    value.append("title4", title4);
    value.append("title5", title5);
    value.append("title1Content", title1Content);
    value.append("title2Content", title2Content);
    value.append("title3Content", title3Content);
    value.append("title4Content", title4Content);
    value.append("title5Content", title5Content);
    value.append("title1img", title1img);
    value.append("title2img", title2img);
    value.append("title3img", title3img);
    value.append("title4img", title4img);
    value.append("title5img", title5img);
    value.append("readBy", readBy);
    value.append("category", category);
    value.append("duration", duration);
    value.append('keyTakeWays', JSON.stringify(keyTakeWays))
    console.log(title1img,
      title2img,
      title3img,
      title4img,
      title5img,
      mainTitleImg, "123")
    // if (value && category && mainTitle && title1img && title2img && title3img && title4img && title5img) {
    if (value && category && mainTitle && title1img && title2img && title3img && title4img && title5img) {
      const res = await postBlog({ value, token });

      console.log(res, "71");
      if (res.data.status === "success") {
        toast(res.data.message);
      }
      if (res.data.status === "failed") {
        toast(res.data.message);
      }
      onSubmitProps.resetForm();
      window.location.reload(); // Reset Form on submit
      onSubmitProps.setSubmitting(false); // This set isSubmittion false after save
    }
    else {
      toast("all fileds are requiered");

    }
  };

  // Validation Schema
  const validationSchema = Yup.object({
    mainTitle: Yup.string().required("Required"),
    mainTitleImg: Yup.string().required("Required"),
    heading: Yup.string().required("Required"),
    title1: Yup.string().required("Required"),
    title2: Yup.string().required("Required"),
    title3: Yup.string().required("Required"),
    title4: Yup.string().required("Required"),
    title5: Yup.string().required("Required"),
    title1Content: Yup.string().required("Required"),
    title2Content: Yup.string().required("Required"),
    title3Content: Yup.string().required("Required"),
    title4Content: Yup.string().required("Required"),
    title5Content: Yup.string().required("Required"),
    title1img: Yup.string().required("Required"),
    title2img: Yup.string().required("Required"),
    title3img: Yup.string().required("Required"),
    title4img: Yup.string().required("Required"),
    title5img: Yup.string().required("Required"),
    readBy: Yup.string().required("Required"),
    category: Yup.string().required("Required"),
    duration: Yup.string().required("Required"),
    keyTakeWays: Yup.array().required("Required"),
  });


  return (
    <>
      <ToastContainer />
      <div>
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
              <Form className="grid grid-cols-2 text-gray-600 gap-10 w-full hover:bg-black/70 p-4 rounded-lg duration-500 ">

                <div className="flex flex-col justify-center items-center col-span-2 w-full gap-4" >


                  {/* Main Title/Input  */}
                  <FormikControl
                    control="select"

                    // type="text"
                    label="Category"
                    name="category"
                    options={options ? options : reactselectOptions}
                  />

                  {/* Main Title/Input  */}
                  <FormikControl
                    control="input"
                    type="text"
                    label="Main Title"
                    name="mainTitle"
                  />

                  {/* Heading Image/Input  */}
                  <FormikControl
                    control="input"
                    type="text"
                    label="Heading"
                    name="heading"
                  />



                  <FormikControl
                    control="input"
                    type="number"
                    label="Duration"
                    name="duration"
                  />

                  {/* ReadBy/Input  */}
                  <FormikControl
                    control="input"
                    type="number"
                    label="Read By"
                    name="readBy"
                  />

                  {/* MainTitle Image/Input */}
                  <FormikControl
                    control="image"
                    type="file"
                    label="Main Title Image"
                    name="mainTitleImg"
                  />

                </div>

                {/* Titles */}
                <div className="flex flex-col justify-center items-center gap-4" >
                  {/* Title 1/Input  */}
                  <FormikControl
                    control="input"
                    type="text"
                    label="Title 1"
                    name="title1"
                  />

                  {/* Title 2/Input  */}
                  <FormikControl
                    control="input"
                    type="text"
                    label="Title 2"
                    name="title2"
                  />

                  {/* Title 3/Input  */}
                  <FormikControl
                    control="input"
                    type="text"
                    label="Title 3"
                    name="title3"
                  />

                  {/* Title 4/Input  */}
                  <FormikControl
                    control="input"
                    type="text"
                    label="Title 4"
                    name="title4"
                  />

                  {/* Title 5/Input  */}
                  <FormikControl
                    control="input"
                    type="text"
                    label="Title 5"
                    name="title5"
                  />
                </div>

                {/* Title Contents */}
                <div className="flex flex-col justify-center items-center gap-4" >
                  {/* Title 1 Content/Input  */}
                  <FormikControl
                    control="input"
                    type="text"
                    label="Title 1 Content"
                    name="title1Content"
                  />

                  {/* Title 2 Content/Input  */}
                  <FormikControl
                    control="input"
                    type="text"
                    label="Title 2 Content"
                    name="title2Content"
                  />

                  {/* Title 3 Content/Input  */}
                  <FormikControl
                    control="input"
                    type="text"
                    label="Title 3 Content"
                    name="title3Content"
                  />

                  {/* Title 4 Content/Input  */}
                  <FormikControl
                    control="input"
                    type="text"
                    label="Title 4 Content"
                    name="title4Content"
                  />

                  {/* Title 5 Content/Input  */}
                  <FormikControl
                    control="input"
                    type="text"
                    label="Title 5 Content"
                    name="title5Content"
                  />

                </div>

                {/* Title Images */}
                <div className="flex flex-col justify-center items-center col-span-2 gap-4" >
                  {/* Title 1 Image/Input  */}
                  <FormikControl
                    control="image"
                    type="file"
                    label="Title 1 Image"
                    name="title1img"
                  />

                  {/* Title 2 Image/Input  */}
                  <FormikControl
                    control="image"
                    type="file"
                    label="Title 2 Image"
                    name="title2img"
                  />

                  {/* Title 3 Image/Input  */}
                  <FormikControl
                    control="image"
                    type="file"
                    label="Title 3 Image"
                    name="title3img"
                  />

                  {/* Title 4 Image/Input  */}
                  <FormikControl
                    control="image"
                    type="file"
                    label="Title 4 Image"
                    name="title4img"
                  />

                  {/* Title 5 Image/Input  */}
                  <FormikControl
                    control="image"
                    type="file"
                    label="Title 5 Image"
                    name="title5img"
                  />
                </div>

                {/* Dynamic Fields  */}
                {/* FieldArray */}
                {/* User Render Porps Pattern */}
                <div className="flex justify-center items-start w-10/12 m-auto text-gray-400 flex-col" >
                  <label htmlFor="keyTakeWays">Key Take Ways</label>
                  <FieldArray name='keyTakeWays' >
                    {
                      (fieldArrayProps) => {
                        {/* console.log("Field Array Props", fieldArrayProps) */ }
                        const { push, remove, form } = fieldArrayProps
                        const { values } = form
                        const { keyTakeWays } = values
                        return (
                          <div className="flex  flex-col gap-2"   >
                            {
                              keyTakeWays.map((keyTakeWays, index) => (
                                <div key={index}>
                                  <Field className="border " name={`keyTakeWays[${index}]`} />
                                  {
                                    index > 0 &&
                                    <button className='border active:bg-green-500 px-4' type="button" onClick={() => remove(index)} > - </button>
                                  }
                                  <button className='border active:bg-green-500 px-4' type="button" onClick={() => push("")} > + </button>

                                </div>
                              ))
                            }
                          </div>
                        )
                      }
                    }
                  </FieldArray>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="border bg-btn col-span-2 p-2 my-2 text-white active:bg-green-800 disabled:bg-slate-500"
                  disabled={!formik.isValid || formik.isSubmitting}
                >
                  Add Blog
                </button>
              </Form>
            );
          }}
        </Formik>
      </div>
    </>
  );
};

export default BlogForm;
