import type { HTMLAttributes } from "react";
import type {
  GeneralTitlesForFooter,
  FooterData,
} from "./FooterData.interface";

export interface FooterProps extends HTMLAttributes<HTMLElement> {
  generalTitles: GeneralTitlesForFooter;
  footerData: FooterData;
}
