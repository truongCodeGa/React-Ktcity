import { useField } from "formik";
import React from "react";

//Bài 162: Thực hành Register Form với Formik - Custom Input
const InputFormik = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="flex  flex-col gap-3 mb-4">
      <label htmlFor={props.id} className="cursor-pointer">
        {label}
      </label>
      <input
        className="p-4 border border-gray-100 rounded-lg 
  bg-white outline-none transition-all focus:border-blue-600"
        {...field}
        {...props}
      />
      {meta.touched && meta.error && (
        <p className="text-red-500 text-sm">{meta.error}</p>
      )}
    </div>
  );
};

export default InputFormik;
