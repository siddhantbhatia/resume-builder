"use client";

import { createRef, useState } from "react";

import { TemplateForm } from "@app/components/forms/TemplateForm/TemplateForm";
import { TemplateFormState } from "@app/components/forms/TemplateForm/types";
import { LayoutTypes } from "@app/components/LayoutSelector/types";
import { LayoutSelector } from "@app/components/LayoutSelector";

// import { UserProfile } from "./data";
import styles from "./page.module.css";
import ResumeForm from "@app/components/forms/ResumeForm/ResumeForm";
import { FormikProps, useFormik } from "formik";
import { ResumeData } from "@app/components/layouts/types";
import { validationSchema } from "@app/components/forms/ResumeForm/validationSchema";

const defaultState: TemplateFormState = {
  fontType: "Open Sans",
  fontSize: 16,
  fontColor: "#000000",
  themeColor: "#3498db",
  iconColor: "#ffffff",
  underlineLinks: false,
  displayIcons: false,
  watermarkImage: "",
  pageMargin: 8,
  selectedLayout: LayoutTypes.SOLID_HEADER,
};

export default function Template() {
  const [formData, setFormData] = useState<TemplateFormState>(defaultState);

  const formRef = createRef<FormikProps<ResumeData>>();

  return (
    <div className={styles.container}>
      <div className={styles.template_style_sidebar}>
        <ResumeForm formRef={formRef} />
      </div>
      <div className={styles.template_preview}>
        <div className={styles.template_preview_container}>
          <LayoutSelector data={formRef.current.values} styles={formData} />
        </div>
      </div>
    </div>
  );
}
