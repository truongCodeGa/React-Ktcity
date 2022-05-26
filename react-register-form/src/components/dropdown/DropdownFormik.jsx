import { Field, useField } from "formik";
import React, { useEffect, useRef, useState } from "react";
import useClickOutSide from "../../hook/useClickOutSide";
//Bài 165: Thực hành Register Form với Formik - Custom Dropdown
//Bài 166: Thực hành Register Form với Formik - Lấy giá trị từ Dropdown
const DropdownFormik = ({
  labelText,
  name,
  data,
  dropdownLabel = "Select your job",
  setValue,
}) => {
  const [field, meta] = useField({ name });
  const [label, setLabel] = useState(dropdownLabel);
  const { show, setShow, nodeRef } = useClickOutSide();

  //   console.log(jobValue);
  const handleClickDropdownItem = (e) => {
    setValue(name, e.target.dataset.value);
    setShow(false);
    setLabel(e.target.textContent); // hien thi ten option select
  };

  useEffect(() => {
    if (field.value === "") setLabel(dropdownLabel);
  }, [field.value]);
  return (
    <div className="flex  flex-col gap-3 mb-4">
      <label className="cursor-pointer">{labelText}</label>
      <div className="relative" ref={nodeRef}>
        <div
          className="p-5 rounded-lg border 
      bg-white items-center justify-between
      border-gray-200 cursor-pointer"
          onClick={() => setShow(!show)}
        >
          <div className="flex items-center">
            <span>{label}</span>
            <svg
              className="ml-auto"
              width="10"
              height="7"
              viewBox="0 0 10 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.999999 1L4.16795 5.75193C4.56377 6.34566 5.43623 6.34566 5.83205 5.75192L9 1"
                stroke="#292D32"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeDasharray="0.2 0.2"
              />
            </svg>
          </div>
        </div>
        <div
          className={`absolute top-full left-0 w-full
       rounded-lg bg-white ${show ? "" : "opacity-0 invisible"}`}
        >
          {data &&
            data.length > 0 &&
            data.map((item) => (
              <div
                className="p-5 cursor-pointer hover:bg-gray-200 "
                onClick={handleClickDropdownItem}
                data-value={item.value} // => e.target.dataset.value
                key={item.id}
              >
                {item.text}
              </div>
            ))}
        </div>
      </div>
      {meta.touched && meta.error && (
        <p className="text-red-500 text-sm">{meta.error}</p>
      )}
    </div>
  );
};

export default DropdownFormik;
