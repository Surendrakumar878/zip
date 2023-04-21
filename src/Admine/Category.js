import React, { useState } from "react";
import { useAddCategoryMutation } from "../services/profile";
import { getToken } from "../services/LocalStorage";
import { Button } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";

const Category = () => {
  const token = getToken("token");
  const [category, setCat] = useState();
  const [addCategory] = useAddCategoryMutation();
  console.log(category, "71");

  const handleSubmit = async () => {
    const data = { category };
    const res = await addCategory({ data, token });
    console.log(res, "71");
    // onSubmitProps.resetForm(); // Reset Form on submit
    if (res.data.status === "success") {
      toast(res.data.message);
    }
    if (res.data.status === "failed") {
      toast(res.data.message);
    }
  };

  return (
    <div className="flex flex-col gap-5 items-center justify-center duration-300  hover:bg-black/30 rounded-md border-white/30 mt-5" >
      Category
      <input
        type="text"
        className="text-black"
        onChange={(e) => setCat(e.target.value)}
      />
      <Button onClick={handleSubmit}  >
        <div className="px-4 py-2 bg-btn rounded-md " >
          Add Category
        </div>
      </Button>
      <ToastContainer />
    </div>
  );
};

export default Category;
