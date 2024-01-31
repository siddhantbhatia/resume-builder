import { TemplateFormState as LayoutStyles } from "../forms/TemplateForm/types";

export interface ResumeData {
  templateId: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: string;
  description: string;
  linkedin: string;
  experiences: {
    title: string;
    company: string;
    location: string;
    startDate: string;
    endDate: string;
    description: string;
  }[];
  education: {
    degree: string;
    major: string;
    institution: string;
    location: string;
    startDate: string;
    endDate: string;
    description: string;
  }[];
  certifications: {
    name: string;
    date: string;
  }[];
  skills: {
    name: string;
    score: number;
  }[];
  references: string[];
}

export interface LayoutProps {
  data: ResumeData;
  styles: LayoutStyles;
}
