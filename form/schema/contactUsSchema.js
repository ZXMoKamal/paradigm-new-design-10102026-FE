import * as Yup from "yup";
import { rules } from "../rules/rules";

export const contactUsSchema = Yup.object({
            name: Yup.string()
                .min(rules.name.min, "Name must be at least "+rules.name.min+" characters")
                .max(rules.name.max, "Name must be less than "+rules.name.max+" characters")
                .required("Name is required"),

            email: Yup.string()
                .email("Invalid email")
                .min(rules.email.min, "Email is too short")
                .max(rules.email.max, "Email is too long")
                .required("Email is required"),

            phone: Yup.string()
                .min(rules.phone.min, "Phone must be at least "+rules.phone.min+" digits")
                .max(rules.phone.max, "Phone must be less than "+rules.phone.max+" digits")
                .required("Phone is required"),

            service: Yup.string()
                .required("Please select a service"),
                
            subject: Yup.string()
                .min(rules.subject.min, "Subject must be at least "+rules.subject.min+" characters")
                .max(rules.subject.max, "Subject must be less than "+rules.subject.max+" characters")
                .required("Subject is required"),

            message: Yup.string()
                .min(rules.message.min, "Message must be at least "+rules.message.min+" characters")
                .max(rules.message.max, "Message must be less than "+rules.message.max+" characters")
                .required("Message is required"),

            terms: Yup.boolean()
                .oneOf([true], "You must accept terms"),
            
            token: Yup.string()
                .required("Please complete the captcha"),
        })