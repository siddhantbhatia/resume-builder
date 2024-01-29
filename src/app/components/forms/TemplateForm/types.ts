import { LayoutTypes } from "@app/components/LayoutSelector/types";

export interface TemplateFormState {
  fontType: string;
  fontSize: number;
  fontColor: string;
  underlineLinks: boolean;
  displayIcons: boolean;
  watermarkImage: string;
  pageMargin: number;
  selectedLayout: LayoutTypes;
  themeColor: string;
  iconColor: string;
}
