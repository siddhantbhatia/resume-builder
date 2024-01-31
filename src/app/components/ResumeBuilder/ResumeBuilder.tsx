"use client";

import { useState } from "react";

import { TemplateForm } from "@app/components/forms/TemplateForm/TemplateForm";
import { TemplateFormState } from "@app/components/forms/TemplateForm/types";
import { LayoutTypes } from "@app/components/LayoutSelector/types";
import { LayoutSelector } from "@app/components/LayoutSelector";

// import { UserProfile } from "./data";
import ResumeForm from "@app/components/forms/ResumeForm/ResumeForm";
import { ResumeData } from "@app/components/layouts/types";
import { validationSchema } from "@app/components/forms/ResumeForm/validationSchema";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { ResumeBuilderProps } from "./types";

import styles from "./ResumeBuilder.module.css";
import { Button } from "@mui/material";

export const ResumeBuilder = ({
  resumeData,
  templateData,
}: ResumeBuilderProps) => {
  const [resumeDataState, setResumeDataState] =
    useState<ResumeData>(resumeData);

  function printDocument() {
    const input = document.getElementById("div-to-print") as HTMLElement;
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "JPEG", 0, 0, 210, 297);
      pdf.save("resume.pdf");
    });
  }

  return (
    <div className={styles.container}>
      <div className={styles.template_style_sidebar}>
        <ResumeForm
          setFormData={setResumeDataState}
          formData={resumeDataState}
        />
      </div>
      <div className={styles.template_preview}>
        <Button
          variant="contained"
          onClick={() => printDocument()}
          style={{ marginBottom: 20 }}
        >
          Export as PDF
        </Button>
        <div className={styles.template_preview_container}>
          <LayoutSelector data={resumeDataState} styles={templateData} />
        </div>
      </div>
    </div>
  );
};
