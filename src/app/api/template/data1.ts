import { LayoutTypes } from "@app/components/LayoutSelector/types";
import { TemplateFormState } from "@app/components/forms/TemplateForm/types";
import { FontTypes } from "@app/font";

export const template1: TemplateFormState = {
  templateName: "Standard HR",
  fontType: FontTypes.MONTSERRAT,
  fontSize: 16,
  fontColor: "#000000",
  themeColor: "#d1cdcd",
  iconColor: "#0D3EEC",
  underlineLinks: true,
  displayIcons: true,
  watermark: "",
  pageMargin: 16,
  selectedLayout: LayoutTypes.SOLID_HEADER,
};
