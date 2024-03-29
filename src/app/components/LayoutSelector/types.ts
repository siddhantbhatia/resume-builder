import { LayoutProps } from "../layouts/types";

export enum LayoutTypes {
  SOLID_HEADER,
  TWO_COLUMN,
  GRAPHICAL,
}

export type LayoutSelectorProps = Pick<LayoutProps, 'styles'> & Partial<Pick<LayoutProps, 'data'>>;
