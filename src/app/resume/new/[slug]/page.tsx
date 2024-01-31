import { useState } from "react";

import { TemplateForm } from "@app/components/forms/TemplateForm/TemplateForm";
import { TemplateFormState } from "@app/components/forms/TemplateForm/types";
import { LayoutTypes } from "@app/components/LayoutSelector/types";
import { LayoutSelector } from "@app/components/LayoutSelector";

// import { UserProfile } from "./data";
import styles from "./page.module.css";
import ResumeForm from "@app/components/forms/ResumeForm/ResumeForm";
import { ResumeData } from "@app/components/layouts/types";
import { validationSchema } from "@app/components/forms/ResumeForm/validationSchema";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { ResumeBuilder } from "@app/components/ResumeBuilder";
import { headers } from "next/headers";

const experienceInitialValue = {
  title: "",
  company: "",
  location: "",
  startDate: "",
  endDate: "",
  description: "",
};

const educationInitialValue = {
  degree: "",
  major: "",
  institution: "",
  location: "",
  startDate: "",
  endDate: "",
  description: "",
};

const certificateInitialValue = { name: "", date: "" };

const skillInitialValue = { name: "", score: 0 };

const initialResumeData = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  address: "",
  linkedin: "",
  description: "",
  experiences: [experienceInitialValue],
  education: [educationInitialValue],
  certifications: [certificateInitialValue],
  skills: [skillInitialValue],
  references: [],
  templateId: "",
};

async function getData(param: string) {
  const headersList = headers();

  const domain = headersList.get("host");

  const res = await fetch(`http://${domain}/api/template?id=${param}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function NewResume({
  params,
}: {
  params: { slug: string };
}) {
  const templateData = (await getData(params.slug)) as TemplateFormState;

  initialResumeData.templateId = params.slug;

  return (
    <ResumeBuilder resumeData={initialResumeData} templateData={templateData} />
  );
}
