import { useField } from "formik";
import React from "react";
//Bài 163: Thực hành Register Form với Formik - Custom Radio
const RadioFormik = (props) => {
  const [field] = useField(props);
  return (
    <div className="flex items-center gap-x-4">
      <label className="cursor-pointer custom-radio">
        <input
          type="radio"
          checked={props.checked}
          {...field}
          {...props}
          className="hidden"
        />
        <div className="flex w-full h-full bg-white rounded-full"></div>
      </label>
      <span>{props.label}</span>
    </div>
  );
};

export default RadioFormik;
