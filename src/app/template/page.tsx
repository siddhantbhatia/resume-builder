"use client";

import { useState } from "react";

import { TemplateForm } from "@app/components/forms/TemplateForm/TemplateForm";
import { TemplateFormState } from "@app/components/forms/TemplateForm/types";
import { LayoutTypes } from "@app/components/LayoutSelector/types";
import { LayoutSelector } from "@app/components/LayoutSelector";

import { UserProfile } from "./data";
import styles from "./page.module.css";
import { Button } from "@mui/material";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { FontTypes } from "@app/font";

const defaultState: TemplateFormState = {
  templateName: "",
  fontType: FontTypes.OPEN_SANS,
  fontSize: 16,
  fontColor: "#000000",
  themeColor: "#3498db",
  iconColor: "#ffffff",
  underlineLinks: false,
  displayIcons: false,
  watermark: "",
  pageMargin: 20,
  selectedLayout: LayoutTypes.SOLID_HEADER,
};

export default function Template() {
  const [formData, setFormData] = useState<TemplateFormState>(defaultState);

  function printDocument() {
    const input = document.getElementById("div-to-print") as HTMLElement;
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "JPEG", 0, 0, 210, 297);
      // pdf.output('dataurlnewwindow');
      pdf.save("resume.pdf");
    });
  }

  return (
    <div className={styles.container}>
      <div className={styles.template_style_sidebar}>
        <TemplateForm formData={formData} setFormData={setFormData} />
        <Button onClick={printDocument}>Save</Button>
      </div>
      <div className={styles.template_preview}>
        <div className={styles.template_preview_container}>
          <LayoutSelector data={UserProfile} styles={formData} />
        </div>
      </div>
    </div>
  );
}
