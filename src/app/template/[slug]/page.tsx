import { TemplateFormState } from "@app/components/forms/TemplateForm/types";
import { EditTemplateComponent } from "@app/components/EditTemplate";
import { headers } from "next/headers";

async function getData(param: string) {
  const headersList = headers();

  const domain = headersList.get("host");

  const res = await fetch(`http://${domain}/api/template?id=${param}`);

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
