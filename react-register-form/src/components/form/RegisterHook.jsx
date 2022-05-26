import React, { useState } from "react";
//Bài 147: Thực hành Register Form với RHF - Styling
//Bài 154,155: Thực hành Register Form với RHF - Validation phần 1,2
//Bài 156: Thực hành Register Form với RHF - Form submitting
//Bài 157,158: Thực hành Register Form với RHF - Form reset phần 1,2
import { useController, useForm, useWatch } from "react-hook-form";
import CheckboxHook from "../checkbox/CheckboxHook";
import DropdownHook from "../dropdown/DropdownHook";
import InputHook from "../input/InputHook";
import RadioHook from "../radio/RadioHook";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  username: yup.string().required("Please enter your username"),
  email: yup
    .string()
    .email("Please enter valid email address")
    .required("Please enter your email address"),
  password: yup
    .string()
    .min(8, "Your password must be at least 8 characters or greater")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      {
        message:
          "your password must have at least 1 uppercase, 1 lowercase ,1 spelcial",
      }
    )

    .required("Please enter your password"),
  gender: yup.string().required("please select your gender"),

  job: yup
    .string()
    .required("please select your job")
    .oneOf(["teacher", "developer", "dortor"]),
  terms: yup.boolean().required("Please accept the terms and condition"),
});

const dropdownData = [
  {
    id: 1,
    value: "teacher",
    text: "teacher",
  },
  {
    id: 2,
    value: "developer",
    text: "Developer",
  },
  {
    id: 3,
    value: "dortor",
    text: "Dortor",
  },
];

const RegisterHook = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isSubmitting, isSubmitSuccessful },
    setValue,
    getValues,
    reset,
    watch,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
    defaultValues: {
      gender: "male",
    },
  });
  console.log(isSubmitSuccessful);
  const onSubmitHandler = (values) => {
    if (!isValid) return;
    return new Promise((resolve) => {
      //load submit
      setTimeout(() => {
        resolve();
        console.log(values);
        reset({
          username: "",
          email: "",
          password: "",
          gender: "male",
          job: "",
          terms: false,
        }); // reset form
      }, 3000);
    });
  };
  const watchGender = watch("gender");
  console.log(watchGender);
  return (
    <form
      onSubmit={handleSubmit(onSubmitHandler)}
      className="max-w-[300px] mx-auto my-10"
      autoComplete="off"
    >
      <div className="flex  flex-col gap-3 mb-4">
        <label htmlFor="username" className="cursor-pointer">
          Username
        </label>
        <InputHook
          id="username"
          name="username"
          placeholder="Enter your username"
          control={control}
          type="text"
        ></InputHook>
        {errors.username && (
          <p className="text-red-500 text-sm">{errors.username.message}</p>
        )}
      </div>
      {/* emaill */}
      <div className="flex  flex-col gap-3  mb-4">
        <label htmlFor="email" className="cursor-pointer">
          Email addrees
        </label>
        <InputHook
          id="email"
          name="email"
          placeholder="Enter your email"
          control={control}
          type="email"
        ></InputHook>

        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
      </div>
      {/* password */}
      <div className="flex  flex-col gap-3 mb-4">
        <label htmlFor="password" className="cursor-pointer">
          Password
        </label>
        <InputHook
          id="password"
          name="password"
          placeholder="Enter your password"
          control={control}
          type="password"
        ></InputHook>

        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password.message}</p>
        )}
      </div>
      <div className="flex  flex-col gap-3 mb-4">
        <label className="cursor-pointer">Gender</label>
        <div className="flex items-center gap-5 ml-[4.6px]">
          <div className="flex items-center gap-x-4">
            <RadioHook
              control={control}
              value="male"
              // defaultChecked={true}
              name="gender"
              checked={watchGender === "male"}
            ></RadioHook>
            <span>Male</span>
          </div>
          <div className="flex items-center gap-x-4">
            <RadioHook
              control={control}
              value="female"
              name="gender"
              checked={watchGender === "female"}
            ></RadioHook>
            <span>Female</span>
          </div>
        </div>
        {errors.gender && (
          <p className="text-red-500 text-sm">{errors.gender.message}</p>
        )}
      </div>
      <div className="flex  flex-col gap-3 mb-4">
        <label className="cursor-pointer">Are you</label>
        <DropdownHook
          control={control}
          name="job"
          setValue={setValue}
          data={dropdownData}
          dropdownLabel="select your job"
        ></DropdownHook>
        {errors.job && (
          <p className="text-red-500 text-sm">{errors.job.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-3 mb-4">
        <CheckboxHook
          control={control}
          name="terms"
          text="I accept the terms and conditions"
        ></CheckboxHook>
        {errors.terms && (
          <p className="text-red-500 text-sm">{errors.terms.message}</p>
        )}
      </div>
      <button
        className={`text-white font-semibold w-full p-4 
        rounded-lg bg-blue-500 ${isSubmitting ? "opacity-50" : ""}`}
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <div
            className="w-5 h-5 rounded-full 
        border-t-transparent mx-auto animate-spin
        border-2 border-white"
          ></div>
        ) : (
          "Submit"
        )}
      </button>
    </form>
  );
};

export default RegisterHook;
