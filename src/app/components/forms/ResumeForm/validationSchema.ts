import { object, string, array } from "yup";

export const validationSchema = object({
  firstName: string().required("Required"),
  lastName: string().required("Required"),
  email: string().email("Invalid email").required("Required"),
  phoneNumber: string().required("Required"),
  address: string().required("Required"),
  linkedin: string().url("Invalid URL").required("Required"),
  description: string().required("Required"),
  experiences: array().of(
    object().shape({
      title: string().required("Required"),
      company: string().required("Required"),
      location: string().required("Required"),
      startDate: string().required("Required"),
      endDate: string().required("Required"),
      description: string().required("Required"),
    })
  ),
  education: array().of(
    object().shape({
      degree: string().required("Required"),
      major: string().required("Required"),
      institution: string().required("Required"),
      location: string().required("Required"),
      startDate: string().required("Required"),
      endDate: string().required("Required"),
      description: string().required("Required"),
    })
  ),
  certifications: array().of(
    object().shape({
      name: string().required("Required"),
      date: string().required("Required"),
    })
  ),
  skills: array().of(
    object().shape({
      name: string().required("Required"),
      score: string().required("Required"),
    })
  ),
});
