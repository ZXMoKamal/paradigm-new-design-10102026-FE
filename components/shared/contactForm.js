"use client";

import { useFormik } from "formik";
import * as Yup from "yup";
import Turnstile from "react-turnstile";
import { useEffect, useState } from "react";

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
import { getServices } from "@/api/services";
import { toast } from "sonner";

export default function ContactForm() {
    const [services, setServices] = useState([]);

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
            service: "",
            terms: false,
            token: "",
        },

        validationSchema: contactUsSchema,

        onSubmit: async (values, { resetForm }) => {
            try {
                const res = await fetch(process.env.NEXT_PUBLIC_API_URL+"/contactUs.php", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(values),
                });

                if (res.ok) {
                    toast.success("Message sent!");
                    // const s = await res.text();
                    // console.log(s);
                    resetForm();
                } else {
                    // const s = await res.text();
                    // console.log(s);
                    toast.error("Error sending message");
                }
            } catch (error) {
                console.error(error);
                alert("Error sending message");
            }
        },
    });

    useEffect(() => {
        const loadServices = async () => {
            const services = await getServices();
            setServices(services);
        };

        loadServices();
    }, []);

    return (
        <form
            onSubmit={formik.handleSubmit}
            className="w-full grid grid-cols-1 md:grid-cols-2 gap-10"
        >
            {/* Name */}
            <div>
                <Input
                    className="max-md:text-[14px]"
                    type="text"
                    rounded="full"
                    icon={<Person className="w-5 h-5 fill-secondary" />}
                    placeholder="Name"
                    {...formik.getFieldProps("name")}
                />

                {formik.touched.name && formik.errors.name && (
                    <p className="text-red-500 text-sm mt-2">
                        {formik.errors.name}
                    </p>
                )}
            </div>

            {/* Email */}
            <div>
                <Input
                    className="max-md:text-[14px]"
                    type="email"
                    rounded="full"
                    icon={<Email className="w-5 h-5 fill-secondary" />}
                    placeholder="Email"
                    {...formik.getFieldProps("email")}
                />

                {formik.touched.email && formik.errors.email && (
                    <p className="text-red-500 text-sm mt-2">
                        {formik.errors.email}
                    </p>
                )}
            </div>

            {/* Phone */}
            <div>
                <Input
                    className="max-md:text-[14px]"
                    type="text"
                    rounded="full"
                    icon={<Phone className="w-5 h-5 fill-secondary" />}
                    placeholder="Phone"
                    {...formik.getFieldProps("phone")}
                />

                {formik.touched.phone && formik.errors.phone && (
                    <p className="text-red-500 text-sm mt-2">
                        {formik.errors.phone}
                    </p>
                )}
            </div>

            {/* Service */}
            <div>
                <Select
                    className="max-md:text-[14px] px-0"
                    {...formik.getFieldProps("service")}
                    rounded="full"
                    border="thin"
                >
                    <option value="">Select a Service</option>

                    {services.map((service, index) => (
                        <option key={index + 1} value={service.id}>
                            {service.title}
                        </option>
                    ))}
                </Select>

                {formik.touched.service && formik.errors.service && (
                    <p className="text-red-500 text-sm mt-2">
                        {formik.errors.service}
                    </p>
                )}
            </div>

            {/* Subject */}
            <div className="md:col-span-2">
                <Input
                    className="max-md:text-[14px]"
                    type="text"
                    rounded="full"
                    icon={<Info className="w-5 h-5 fill-secondary" />}
                    placeholder="Subject"
                    {...formik.getFieldProps("subject")}
                />

                {formik.touched.subject && formik.errors.subject && (
                    <p className="text-red-500 text-sm mt-2">
                        {formik.errors.subject}
                    </p>
                )}
            </div>

            {/* Message */}
            <div className="md:col-span-2">
                <Textarea
                    className="max-md:text-[14px]"
                    rounded="md"
                    border="thin"
                    icon={<Message className="w-5 h-5 fill-secondary" />}
                    placeholder="Message"
                    rows="4"
                    {...formik.getFieldProps("message")}
                />

                {formik.touched.message && formik.errors.message && (
                    <p className="text-red-500 text-sm mt-2">
                        {formik.errors.message}
                    </p>
                )}
            </div>

            {/* Terms */}
            <div className="flex flex-col justify-center gap-2 md:col-span-2">
                <div>
                    <input
                        type="checkbox"
                        {...formik.getFieldProps("terms")}
                        checked={formik.values.terms}
                    />

                    <span className="mx-2 text-sm font-primary-light">
                        I agree that my submitted data is being collected and stored.
                    </span>
                </div>

                {formik.touched.terms && formik.errors.terms && (
                    <p className="text-red-500 text-sm">
                        {formik.errors.terms}
                    </p>
                )}
            </div>

            {/* Turnstile */}
            <div className="md:col-span-2">
                <Turnstile
                    sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
                    onVerify={(token) => {
                        formik.setFieldValue("token", token);
                        formik.setFieldTouched("token", true);
                    }}
                    onExpire={() => {
                        formik.setFieldValue("token", "");
                    }}
                    onError={() => {
                        formik.setFieldValue("token", "");
                    }}
                />

                {formik.touched.token && formik.errors.token && (
                    <p className="text-red-500 text-sm mt-2">
                        {formik.errors.token}
                    </p>
                )}
            </div>

            {/* Submit */}
            <Button
                type="submit"
                disabled={formik.isSubmitting}
                variant="solid"
                size="sm"
                className="font-[600]"
            >
                <Send className="w-5 h-5 fill-black" />

                {formik.isSubmitting ? "Sending..." : "Send"}
            </Button>
        </form>
    );
}
