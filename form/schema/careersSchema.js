// import * as Yup from "yup";
// import { rules } from "../rules/rules";

// export const careersSchema = Yup.object({
//       firstName: Yup.string()
//         .min(rules.firstName.min, "First name must be at least "+rules.firstName.min+" characters")
//         .max(rules.firstName.max, "First name must be less than "+rules.firstName.max+" characters")
//         .required("Required"),
//       lastName: Yup.string()
//         .min(rules.lastName.min, "Last name must be at least "+rules.lastName.min+" characters")
//         .max(rules.lastName.max, "Last name must be less than "+rules.lastName.max+" characters")
//         .required("Required"),
//       email: Yup.string()
//         .email("Invalid email")
//         .required("Required"),
//       phone: Yup.string()
//         .min(rules.phone.min, "Phone must be at least "+rules.phone.min+" digits")
//         .max(rules.phone.max, "Phone must be less than "+rules.phone.max+" digits")
//         .required("Required"),
//       address: Yup.string()
//         .min(rules.address.min, "Address must be at least "+rules.address.min+" characters")
//         .max(rules.address.max, "Address must be less than "+rules.address.max+" characters")
//         .max(100),
//       city: Yup.string()
//         .min(rules.city.min, "City must be at least "+rules.city.min+" characters")
//         .max(rules.city.max, "City must be less than "+rules.city.max+" characters"),
//       state: Yup.string()
//         .min(rules.state.min, "State must be at least "+rules.state.min+" characters")
//         .max(rules.state.max, "State must be less than "+rules.state.max+" characters"),
//       country: Yup.string()
//         .min(rules.country.min, "Country must be at least "+rules.country.min+" characters")
//         .max(rules.country.max, "Country must be less than "+rules.country.max+" characters"),
//     })



import * as Yup from "yup";
import { rules } from "../rules/rules";

export const careersSchema = Yup.object({
  firstName: Yup.string()
    .min(rules.firstName.min, `Min ${rules.firstName.min}`)
    .max(rules.firstName.max, `Max ${rules.firstName.max}`)
    .required("Required"),

  lastName: Yup.string()
    .min(rules.lastName.min, `Min ${rules.lastName.min}`)
    .max(rules.lastName.max, `Max ${rules.lastName.max}`)
    .required("Required"),

  email: Yup.string()
    .email("Invalid email")
    .required("Required"),

  phone: Yup.string()
    .min(rules.phone.min, `Min ${rules.phone.min}`)
    .max(rules.phone.max, `Max ${rules.phone.max}`)
    .required("Required"),

  address: Yup.string()
    .min(rules.address.min, `Min ${rules.address.min}`)
    .max(rules.address.max, `Max ${rules.address.max}`),

  city: Yup.string()
    .min(rules.city.min, `Min ${rules.city.min}`)
    .max(rules.city.max, `Max ${rules.city.max}`),

  state: Yup.string()
    .min(rules.state.min, `Min ${rules.state.min}`)
    .max(rules.state.max, `Max ${rules.state.max}`),

  country: Yup.string()
    .min(rules.country.min, `Min ${rules.country.min}`)
    .max(rules.country.max, `Max ${rules.country.max}`),

  // ✅ FILE VALIDATION
  resume: Yup.mixed()
  .required("Resume is required")
  .test("fileSize", function (file) {
    if (!file) return true;

    if (file.size > rules.resumeFileSize * 1024 * 1024) {
      return this.createError({
        message: `File must be less than ${rules.resumeFileSize}MB`,
      });
    }

    return true;
  })
  .test("fileFormat", function (file) {
    if (!file) return true;

    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (!allowedTypes.includes(file.type)) {
      return this.createError({
        message: "Only PDF, DOC, DOCX allowed",
      });
    }

    return true;
  }),
});