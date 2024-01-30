import { fontSelector } from "@app/font";
import { GraphicalLayout } from "../layouts/GraphicalLayout";
import { SolidHeaderLayout } from "../layouts/SolidHeaderLayout";
import { TwoColumnLayout } from "../layouts/TwoColumnLayout";
import { LayoutSelectorProps, LayoutTypes } from "./types";

const componentMap = {
  [LayoutTypes.GRAPHICAL]: GraphicalLayout,
  [LayoutTypes.SOLID_HEADER]: SolidHeaderLayout,
  [LayoutTypes.TWO_COLUMN]: TwoColumnLayout,
};

export const LayoutSelector = ({ data, styles }: LayoutSelectorProps) => {
  if (!data) {
    return <></>;
  }

  const font = fontSelector(styles.fontType);

  const SelectedComponent = componentMap[styles.selectedLayout];
  return (
    <div
      className={font.className}
      id="div-to-print"
      style={{ width: 900, height: 1270 }}
    >
      <SelectedComponent data={data} styles={styles} />
    </div>
  );
};
