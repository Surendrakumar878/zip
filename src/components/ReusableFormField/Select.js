import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";

const Select = (props) => {
  const { label, name, options, ...rest } = props;
  return (
    <div className="flex flex-col gap-1 w-10/12 text-gray-500">
      <label htmlFor={name}> {label} </label>
      <Field as="select" id={name} name={name} {...rest}>
        {options.map((options) => {
          return (
            <option
              className="text-black"
              key={options.value}
              value={options.value}
            >
              {options.key}
            </option>
          );
        })}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default Select;
