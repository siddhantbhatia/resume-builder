import {
  Inter,
  Roboto_Mono,
  Roboto,
  Roboto_Condensed,
  Open_Sans,
  Montserrat,
} from "next/font/google";

export enum FontTypes {
  OPEN_SANS = "Open Sans",
  ROBOTO = "Roboto",
  ROBOTO_MONO = "Roboto Mono",
  ROBOTO_CONDENDED = "Roboto Condensed",
  MONTSERRAT = "Montserrat",
  INTER = "Inter",
}
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const open_sans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
});

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
});

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

const roboto_condensed = Roboto_Condensed({
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

export const fontSelector = (type: FontTypes) => {
  if (type === FontTypes.ROBOTO) {
    return roboto;
  } else if (type === FontTypes.ROBOTO_MONO) {
    return roboto_mono;
  } else if (type === FontTypes.ROBOTO_CONDENDED) {
    return roboto_condensed;
  } else if (type === FontTypes.MONTSERRAT) {
    return montserrat;
  } else if (type === FontTypes.INTER) {
    return inter;
  } else {
    return open_sans;
  }
};
