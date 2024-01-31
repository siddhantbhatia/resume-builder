"use client";

import { useState } from "react";

import { TemplateForm } from "@app/components/forms/TemplateForm/TemplateForm";
import { TemplateFormState } from "@app/components/forms/TemplateForm/types";
import { LayoutTypes } from "@app/components/LayoutSelector/types";
import { LayoutSelector } from "@app/components/LayoutSelector";

import styles from "./page.module.css";
import { Button } from "@mui/material";
import { FontTypes } from "@app/font";
import { UserProfile } from "../data";

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

export default function NewTemplate() {
  const [formData, setFormData] = useState<TemplateFormState>(defaultState);

  return (
    <div className={styles.container}>
      <div className={styles.template_style_sidebar}>
        <TemplateForm formData={formData} setFormData={setFormData} />
        <Button onClick={() => alert("Template saved")} variant="contained">
          Save template
        </Button>
      </div>
      <div className={styles.template_preview}>
        <div className={styles.template_preview_container}>
          <LayoutSelector data={UserProfile} styles={formData} />
        </div>
      </div>
    </div>
  );
}
