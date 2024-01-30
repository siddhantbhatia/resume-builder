import { LayoutTypes } from "@app/components/LayoutSelector/types";
import { FontTypes } from "@app/font";

export interface TemplateFormState {
  templateName: string;
  fontType: FontTypes;
  fontSize: number;
  fontColor: string;
  underlineLinks: boolean;
  displayIcons: boolean;
  watermark: string;
  pageMargin: number;
  selectedLayout: LayoutTypes;
  themeColor: string;
  iconColor: string;
}
