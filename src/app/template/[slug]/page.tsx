import { TemplateFormState } from "@app/components/forms/TemplateForm/types";
import { EditTemplateComponent } from "@app/components/EditTemplate";

async function getData(param: string) {
  const res = await fetch(`http://localhost:5001/api/template?id=${param}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function EditTemplate({
  params,
}: {
  params: { slug: string };
}) {
  const formState = (await getData(params.slug)) as TemplateFormState;

  return <EditTemplateComponent templateData={formState} />;
}
