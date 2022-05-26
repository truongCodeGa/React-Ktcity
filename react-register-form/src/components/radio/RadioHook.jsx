import React from "react";
import { useController } from "react-hook-form";
//Bài 149: Thực hành Register Form với RHF - Custom Radio
const RadioHook = ({ control, ...props }) => {
  const { field } = useController({
    control,
    name: props.name,
    defaultValue: props.value,
  });

  return (
    <label className="cursor-pointer custom-radio">
      <input
        type="radio"
        // defaultChecked={props.defaultChecked}
        checked={props.checked}
        {...field}
        {...props}
        className="hidden"
      />
      <div className="flex w-full h-full bg-white rounded-full"></div>
    </label>
  );
};

export default RadioHook;
