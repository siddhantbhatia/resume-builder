import { LayoutTypes } from "@app/components/LayoutSelector/types";
import { TemplateFormState } from "@app/components/forms/TemplateForm/types";
import { FontTypes } from "@app/font";

export const template3: TemplateFormState = {
  templateName: "Company ABC (watermarked)",
  fontType: FontTypes.OPEN_SANS,
  fontSize: 16,
  fontColor: "#000000",
  themeColor: "#329AC7",
  iconColor: "#d31919",
  underlineLinks: true,
  displayIcons: true,
  watermark: "manatal",
  pageMargin: 16,
  selectedLayout: LayoutTypes.TWO_COLUMN,
};
