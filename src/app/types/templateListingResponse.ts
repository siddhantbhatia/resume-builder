import { TemplateListingData } from "../components/TemplateListing/types";

export interface TemplateListingResponse {
  count: number;
  templates: TemplateListingData[];
}
