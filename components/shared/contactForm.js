"use client";

import { useFormik } from "formik";
import * as Yup from "yup";
import Turnstile from "react-turnstile";
import { useState } from "react";
import { Input } from "./input";
import Info from "../icons/info";
import Phone from "../icons/phone";
import Email from "../icons/email";
import Person from "../icons/person";
import { Select } from "./select";
import { Textarea } from "./textarea";
import Message from "../icons/message";
import Button from "./button";
import Send from "../icons/send";
import { contactUsSchema } from "@/form/schema/contactUsSchema";

export default function ContactForm() {
    const [token, setToken] = useState("");

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
            service: "",
            terms: false,
        },

        validationSchema: contactUsSchema,

        onSubmit: async (values, { resetForm }) => {
            if (!token) {
                alert("Please verify captcha");
                return;
            }

            const res = await fetch("/api/contact", {
                method: "POST",
                body: JSON.stringify({ ...values, token }),
            });

            if (res.ok) {
                alert("Message sent!");
                resetForm();
                setToken("");
            } else {
                alert("Error sending message");
            }
        },
    });

    return (
        <form
            onSubmit={ formik.handleSubmit }
            className="w-full grid grid-cols-1 md:grid-cols-2 gap-10"
        >
            {/* Name */ }
            <div>
                <Input 
                className="max-md:text-[14px]"
                    type="text"
                    rounded="full"
                    icon={ <Person className={ 'w-5 h-5 fill-secondary' } /> }
                    placeholder="Name"
                    { ...formik.getFieldProps("name") }
                />
                {/* <input
                    type="text"
                    placeholder="Name"
                    { ...formik.getFieldProps("name") }
                    className="w-full border p-2 rounded"
                /> */}
                { formik.touched.name && formik.errors.name && (
                    <p className="text-light-red text-sm mt-2">{ formik.errors.name }</p>
                ) }
            </div>

            {/* Email */ }
            <div>
                <Input 
                className="max-md:text-[14px]"
                    type="email"
                    rounded="full"
                    icon={ <Email className={ 'w-5 h-5 fill-secondary' } /> }
                    placeholder="Email"
                    { ...formik.getFieldProps("email") }
                />
                {/* <input
                    type="email"
                    placeholder="Email"
                    { ...formik.getFieldProps("email") }
                    className="w-full border p-2 rounded"
                /> */}
                { formik.touched.email && formik.errors.email && (
                    <p className="text-light-red text-sm mt-2">{ formik.errors.email }</p>
                ) }
            </div>

            {/* Phone */ }
            <div>
                <Input 
                className="max-md:text-[14px]"
                    type="text"
                    rounded="full"
                    icon={ <Phone className={ 'w-5 h-5 fill-secondary' } /> }
                    placeholder="Phone"
                    { ...formik.getFieldProps("phone") }
                />
                {/* <input
                    type="text"
                    placeholder="Phone"
                    { ...formik.getFieldProps("phone") }
                    className="w-full border p-2 rounded"
                /> */}
                { formik.touched.phone && formik.errors.phone && (
                    <p className="text-light-red text-sm mt-2">{ formik.errors.phone }</p>
                ) }
            </div>

            {/* Service Select */ }
            <div>
                <Select 
                className="max-md:text-[14px] px-0"
                    { ...formik.getFieldProps("service") }
                    rounded="full" border="thin" >
                    <option value="">Select a Service</option>
                    <option value="us">USA</option>
                    <option value="uk">UK</option>
                    <option value="fr">France</option>
                </Select>
                {/* <select
                    { ...formik.getFieldProps("service") }
                    className="w-full border p-2 rounded"
                >
                    <option value="">Select Service</option>
                    <option value="web">Web Development</option>
                    <option value="design">Design</option>
                    <option value="seo">SEO</option>
                </select> */}
                { formik.touched.service && formik.errors.service && (
                    <p className="text-light-red text-sm mt-2">{ formik.errors.service }</p>
                ) }
            </div>

            {/* Subject */ }
            <div className="md:col-span-2">
                <Input 
                className="max-md:text-[14px]"
                    type="text"
                    rounded="full"
                    icon={ <Info className={'w-5 h-5 fill-secondary'}/> }
                    placeholder="Subject"
                    { ...formik.getFieldProps("subject") }
                />
                {/* <input
                    type="text"
                    placeholder="Subject"
                    { ...formik.getFieldProps("subject") }
                    className="w-full border p-2 rounded"
                /> */}
                { formik.touched.subject && formik.errors.subject && (
                    <p className="text-light-red text-sm mt-2">{ formik.errors.subject }</p>
                ) }
            </div>

            {/* Message */ }
            <div className="md:col-span-2">
                <Textarea 

                className="max-md:text-[14px]"
                              rounded="md"
                              border="thin"
                    icon={ <Message className={ 'w-5 h-5 fill-secondary' } /> }
                    placeholder="Message"
                    rows="4"
                    { ...formik.getFieldProps("message") }

                          />
                {/* <textarea
                    placeholder="Message"
                    rows="4"
                    { ...formik.getFieldProps("message") }
                    className="w-full border p-2 rounded"
                /> */}
                { formik.touched.message && formik.errors.message && (
                    <p className="text-light-red text-sm mt-2">{ formik.errors.message }</p>
                ) }
            </div>

            {/* Terms */ }
            <div className="flex flex-col justify-center gap-2 md:col-span-2">
                <div>
                    <input
                        type="checkbox"
                        { ...formik.getFieldProps("terms") }
                        checked={ formik.values.terms }
                    />
                    <span className="mx-2 text-sm font-primary-light">I agree that my submitted data is being collected and stored.</span>
                </div>
                { formik.touched.terms && formik.errors.terms && (
                    <p className="text-light-red text-sm">{ formik.errors.terms }</p>
                ) }
            </div>


            {/* Turnstile */ }
            <div className="md:col-span-2">
                <Turnstile
                    sitekey={ process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY }
                    onVerify={ (t) => setToken(t) }
                />
            </div>

            {/* Submit */ }
            <Button type="submit" disabled={ formik.isSubmitting } variant="solid" size="sm" className={ "font-[600]" } >
                <Send className={ 'w-5 h-5 fill-primary-dark' } />
                { formik.isSubmitting ? "Sending..." : "Send" }
                      </Button>
            {/* <button
                type="submit"
                disabled={ formik.isSubmitting }
                className="w-full bg-black text-white py-2 rounded disabled:opacity-50"
            >
                { formik.isSubmitting ? "Sending..." : "Send Message" }
            </button> */}
        </form>
    );
}