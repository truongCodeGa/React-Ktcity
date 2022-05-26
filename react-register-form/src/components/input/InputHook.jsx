import React from "react";
import { useController } from "react-hook-form";
//Bài 148: Thực hành Register Form với RHF - Custom Input
const InputHook = ({ control, ...props }) => {
  const { field } = useController({
    control,
    name: props.name,
    defaultValue: "",
  });

  return (
    <input
      className="p-4 border border-gray-100 rounded-lg 
  bg-white outline-none transition-all focus:border-blue-600"
      {...field}
      {...props}
    ></input>
  );
};

export default InputHook;
