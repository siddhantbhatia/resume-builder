import { LayoutTypes } from "@app/components/LayoutSelector/types";
import { TemplateFormState } from "@app/components/forms/TemplateForm/types";
import { FontTypes } from "@app/font";

export const template2: TemplateFormState = {
  templateName: "Graphical (watermarked)",
  fontType: FontTypes.INTER,
  fontSize: 16,
  fontColor: "#000000",
  themeColor: "#329AC7",
  iconColor: "#ffffff",
  underlineLinks: true,
  displayIcons: true,
  watermark: "manatal",
  pageMargin: 16,
  selectedLayout: LayoutTypes.GRAPHICAL,
};
