import { TemplateFormState } from "@app/components/forms/TemplateForm/types";
import { ResumeData } from "@app/components/layouts/types";
import { ResumeBuilder } from "@app/components/ResumeBuilder";

async function getTemplateData(param: string) {
  const res = await fetch(
    `http://${process.env.domain}/api/template?id=${param}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function getResumeData(param: string) {
  const res = await fetch(
    `http://${process.env.domain}/api/resume?id=${param}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function EditResume({
  params,
}: {
  params: { slug: string };
}) {
  const resumeData = (await getResumeData(params.slug)) as ResumeData;

  const templateData = (await getTemplateData(
    resumeData.templateId
  )) as TemplateFormState;

  return <ResumeBuilder resumeData={resumeData} templateData={templateData} />;
}
