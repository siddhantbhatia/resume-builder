"use client";

import { useState } from "react";

import { TemplateForm } from "@app/components/forms/TemplateForm/TemplateForm";
import { TemplateFormState } from "@app/components/forms/TemplateForm/types";
import { LayoutSelector } from "@app/components/LayoutSelector";

import { Button } from "@mui/material";
import { UserProfile } from "@app/template/data";
import styles from "./EditTemplate.module.css";

export const EditTemplateComponent = ({
  templateData,
}: {
  templateData: TemplateFormState;
}) => {
  const [formData, setFormData] = useState<TemplateFormState>(templateData);

  return (
    <div className={styles.container}>
      <div className={styles.template_style_sidebar}>
        <TemplateForm formData={formData} setFormData={setFormData} />
        <Button onClick={() => alert("Template edited")} variant="contained">
          Edit template
        </Button>
      </div>
      <div className={styles.template_preview}>
        <div className={styles.template_preview_container}>
          <LayoutSelector data={UserProfile} styles={formData} />
        </div>
      </div>
    </div>
  );
};
