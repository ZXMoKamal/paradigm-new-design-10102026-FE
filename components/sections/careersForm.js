"use client";

import { useFormik } from "formik";
import * as Yup from "yup";
import { useState, useRef } from "react";
import Turnstile from "react-turnstile";
import { Input } from "../shared/input";
import { Select } from "../shared/select";
import CheckCircle from "../icons/checkCircle";
import UploadCloud from "../icons/uploadCloud";
// import { UploadCloud, CheckCircle, X } from "lucide-react";

export default function CareersForm() {
  const [resumeFile, setResumeFile] = useState(null);
  const [captchaToken, setCaptchaToken] = useState("");
  const fileInputRef = useRef(null);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      country: "",
    },

    validationSchema: Yup.object({
      firstName: Yup.string().min(2).max(50).required("Required"),
      lastName: Yup.string().min(2).max(50).required("Required"),
      email: Yup.string().email("Invalid email").required("Required"),
      phone: Yup.string().min(8).max(15).required("Required"),
      address: Yup.string().min(5).max(100),
      city: Yup.string().min(2).max(50),
      state: Yup.string().min(2).max(50),
      country: Yup.string().min(2).max(50),
    }),

    onSubmit: async (values, { setSubmitting }) => {
      if (!resumeFile) {
        alert("Please upload resume");
        setSubmitting(false);
        return;
      }

      if (!captchaToken) {
        alert("Captcha required");
        setSubmitting(false);
        return;
      }

      const formData = new FormData();

      Object.keys(values).forEach((key) => {
        formData.append(key, values[key]);
      });

      formData.append("resume", resumeFile);
      formData.append("token", captchaToken);

      try {
        const res = await fetch("/api/apply", {
          method: "POST",
          body: formData,
        });

        const data = await res.json();
        console.log(data);
      } catch (err) {
        console.error(err);
      }

      setSubmitting(false);
    },
  });

  const handleFileClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.currentTarget.files[0];

    if (!file) return;

    // Optional: file size limit (5MB)
    if (file.size > 5 * 1024 * 1024) {
      alert("Max file size is 2MB");
      return;
    }

    setResumeFile(file);
  };

  const removeFile = (e) => {
    e.stopPropagation();
    setResumeFile(null);
  };

  return (
    <section className=" w-full xl:w-[1320px]  mx-auto px-5 py-10">
        <h1 className="text-5xl font-primary-light font-bold mb-12 text-center">Apply Now</h1>
    <form onSubmit={formik.handleSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full items-end">

      {/* Inputs */}
    <div>
        <h2 className="text-lg mb-5">Applicant Name *</h2>
         <Input
         type="text"
                      rounded="md"
                      border="thick"
                      label="First"
                      {...formik.getFieldProps("firstName")}
                  />
        {/* <input placeholder="First Name"  className="input" /> */}
        {formik.touched.firstName && formik.errors.firstName && <p className="text-light-red">{formik.errors.firstName}</p>}
    </div>
    <div>
           <Input
         type="text"
                      rounded="md"
                      border="thick"
                      label="Last"
                      {...formik.getFieldProps("lastName")}
                  />
        {/* <input placeholder="Last Name" {...formik.getFieldProps("lastName")} className="input" /> */}
        {formik.touched.lastName && formik.errors.lastName && <p className="text-light-red">{formik.errors.lastName}</p>}
    </div>
    <div className="lg:col-span-2">
        <h2 className="text-lg mb-5">Applicant Email *</h2>
         <Input
         type="email"
                      rounded="md"
                      border="thick"
                      {...formik.getFieldProps("email")}
                  />
        {/* <input type="email" placeholder="Email" {...formik.getFieldProps("email")} className="input" /> */}
        {formik.touched.email && formik.errors.email && <p className="text-light-red">{formik.errors.email}</p>}
    </div>
    <div className="lg:col-span-2">
        <h2 className="text-lg mb-5">Applicant Phone *</h2>
        <Input
         type="text"
                      rounded="md"
                      border="thick"
                      {...formik.getFieldProps("phone")}
                  />
        {/* <input placeholder="Phone" {...formik.getFieldProps("phone")} className="input" /> */}
        {formik.touched.phone && formik.errors.phone && <p className="text-light-red">{formik.errors.phone}</p>}
    </div>
    <div className="lg:col-span-2">
        <h2 className="text-lg mb-5">Address</h2>
                <Input
         type="text"
                      rounded="md"
                      border="thick"
                      label="Address Line 1"
                      {...formik.getFieldProps("address")}
                  />
        {/* <input placeholder="Address" {...formik.getFieldProps("address")} className="input" /> */}
        {formik.touched.address && formik.errors.address && <p className="text-light-red">{formik.errors.address}</p>}
    </div>
    <div>
<Input
         type="text"
                      rounded="md"
                      border="thick"
                      label="City"
                      {...formik.getFieldProps("city")}
                  />
        {/* <input placeholder="City" {...formik.getFieldProps("city")} className="input" /> */}
        {formik.touched.city && formik.errors.city && <p className="text-light-red">{formik.errors.city}</p>}
    </div>
    <div>
        <Input
         type="text"
                      rounded="md"
                      border="thick"
                      label="State / Province / Region"
                      {...formik.getFieldProps("state")}
                  />
        {/* <input placeholder="State" {...formik.getFieldProps("state")} className="input" /> */}
        {formik.touched.state && formik.errors.state && <p className="text-light-red">{formik.errors.state}</p>}
    </div>
    <div>
        <Select 
            {...formik.getFieldProps("country")}
                      label="Country"
            rounded="md" border="thick" >
            <option value="">Select a Service</option>
            <option value="us">USA</option>
            <option value="uk">UK</option>
            <option value="fr">France</option>
        </Select>
        {/* <input placeholder="Country" {...formik.getFieldProps("country")} className="input" /> */}
        {formik.touched.country && formik.errors.country && <p className="text-light-red">{formik.errors.country}</p>}
    </div>

      {/* ✅ Custom File Upload */}
      <div
        onClick={handleFileClick}
        className={`border-2 border-dashed rounded-lg p-6 cursor-pointer transition relative lg:col-span-2
          ${resumeFile ? "border-light-green bg-green-50" : "border-gray-300 hover:border-light-blue"}
        `}
      >
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
        />

        <div className="flex flex-col items-center justify-center gap-2 text-center lg:col-span-2">
          
          {/* Icon */}
          {resumeFile ? (
            <CheckCircle className="w-10 h-10 fill-light-green" />
          ) : (
            <UploadCloud className="w-10 h-10 fill-light-blue" />
          )}

          {/* Text */}
          {!resumeFile ? (
            <p className="text-light-blue">Click to upload your resume</p>
          ) : (
            <p className="text-light-green font-medium">{resumeFile.name}</p>
          )}

          <span className="text-sm text-primary">PDF, DOC, DOCX (max 5MB)</span>
        </div>

        {/* Remove Button */}
        {resumeFile && (
          <button
            type="button"
            onClick={removeFile}
            className="absolute top-2 right-2 text-light-red"
          >
            <span X size={18} />
          </button>
        )}
        {/* File Error */}
        {!resumeFile && formik.submitCount > 0 && (
            <p className="text-light-red text-sm">Resume is required</p>
        )}
      </div>


      {/* ✅ Turnstile */}
      <div className="lg:col-span-2">
        <Turnstile
            sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
            onVerify={(token) => setCaptchaToken(token)}
            onExpire={() => setCaptchaToken("")}
        />
        </div>
      {/* Submit */}
      <div className="lg:col-span-2">
        <button
            type="submit"
            disabled={formik.isSubmitting}
            className="bg-secondary text-primary-dark font-primary-medium px-5 py-2 rounded "
        >
            {formik.isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </div>

    </form>
    </section>
  );
}