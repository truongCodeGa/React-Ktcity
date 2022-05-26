import React from "react";
import InputFormik from "../input/InputFormik";
import { Formik, Form, useField } from "formik";
import * as yup from "yup";
import RadioFormik from "../radio/RadioFormik";
import CheckboxFormik from "../checkbox/CheckboxFormik";
import DropdownFormik from "../dropdown/DropdownFormik";
//Bài 159,160: Thực hành Register Form với Formik - Setup phần 1,2
//Bài 161: Thực hành Register Form với Formik - Validation
//Bài 167: Thực hành Register Form với Formik - Reset form
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

const RegisterFormik = () => {
  return (
    <Formik
      initialValues={{
        username: "",
        email: "",
        password: "",
        gender: "male",
        job: "",
        terms: false,
      }}
      validationSchema={yup.object({
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
        gender: yup
          .string()
          .required("please select your gender")
          .oneOf(["male", "female", "You can only select male or female"]),
        job: yup
          .string()
          .required("please select your job")
          .oneOf(["teacher", "developer", "dortor"]),
        terms: yup
          .boolean()
          .oneOf([true], "Please check the terms and condition"),
      })}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          setSubmitting(false);
          resetForm();
        }, 3000);
      }}
    >
      {(formik) => {
        {
          /* console.log("RegisterFormik", formik); */
        }
        const watchGender = formik.values.gender;
        return (
          <form
            onSubmit={formik.handleSubmit}
            className="max-w-[300px] mx-auto my-10"
            autoComplete="off"
          >
            <InputFormik
              name="username"
              placeholder="Enter your username"
              id="username"
              label="username"
              type="text"
            ></InputFormik>
            <InputFormik
              name="email"
              placeholder="Enter your email address"
              id="email"
              label="Email address"
              type="email"
            ></InputFormik>
            <InputFormik
              name="password"
              placeholder="Enter your password"
              id="password"
              label="Password"
              type="password"
            ></InputFormik>
            <div className="flex  flex-col gap-3 mb-4">
              <label className="cursor-pointer">Gender</label>
              <div className="flex items-center gap-5 ml-[4.6px]">
                <RadioFormik
                  value="male"
                  name="gender"
                  checked={watchGender === "male" || ""}
                  label="Male"
                ></RadioFormik>
                <RadioFormik
                  value="female"
                  name="gender"
                  checked={watchGender === "female" || ""}
                  label="Female"
                ></RadioFormik>
              </div>
            </div>
            <DropdownFormik
              data={dropdownData}
              labelText="Select your job"
              name="job"
              setValue={formik.setFieldValue}
            ></DropdownFormik>
            <CheckboxFormik name="terms">
              I accept the terms and conditions
            </CheckboxFormik>
            <button
              type="submit"
              disabled={formik.isSubmitting}
              className="text-white font-semibold w-full p-4 
        rounded-lg bg-blue-500"
            >
              {formik.isSubmitting ? (
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
      }}
    </Formik>
  );
};
export default RegisterFormik;
