import React, { useEffect, useRef, useState } from "react";
import { useWatch } from "react-hook-form";
import useClickOutSide from "../../hook/useClickOutSide";
//Bài 151: Thực hành Register Form với RHF - Custom Dropdown phần 1
//Bài 152: Thực hành Register Form với RHF - Custom Dropdown phần 2
// /Bài 153: Thực hành Register Form với RHF - Custom Dropdown phần 3
////Bài 157,158: Thực hành Register Form với RHF - Form reset phần 1,2
const DropdownHook = ({
  control,
  setValue,
  name,
  data,
  dropdownLabel = "Select your job",
}) => {
  const { show, setShow, nodeRef } = useClickOutSide();
  const dropdownValue = useWatch({
    control,
    name: "job",
    defaultValue: "",
  });
  //   console.log(jobValue);
  const handleClickDropdownItem = (e) => {
    setValue(name, e.target.dataset.value);
    setShow(false);
    setLabel(e.target.textContent); // hien thi ten option select
  };
  const [label, setLabel] = useState(dropdownLabel);

  useEffect(() => {
    if (dropdownValue === "") setLabel(dropdownLabel);
  }, [dropdownValue]);
  return (
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
        {data.map((item) => (
          <div
            className="p-5 cursor-pointer hover:bg-gray-200 "
            onClick={handleClickDropdownItem}
            data-value={item.value}
            key={item.id}
          >
            {item.text}
          </div>
        ))}
        {/* <div
          className="p-5 cursor-pointer hover:bg-gray-200 "
          onClick={handleClickDropdownItem}
          data-value="Teacher"
        >
          Teacher
        </div>
        <div
          className="p-5 cursor-pointer hover:bg-gray-200 "
          onClick={handleClickDropdownItem}
          data-value="Developer"
        >
          Developer
        </div>
        <div
          className="p-5 cursor-pointer hover:bg-gray-200 "
          onClick={handleClickDropdownItem}
          data-value="Doctor"
        >
          Doctor
        </div> */}
      </div>
    </div>
  );
};

export default DropdownHook;
