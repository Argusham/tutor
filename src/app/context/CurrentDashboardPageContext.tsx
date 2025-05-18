import { createContext } from "react";
import { CurrentPage } from "../constants/enums";

export interface CurrentPageType {
  value: CurrentPage;
  setValue: (newValue: CurrentPage) => void;
}

// Default value (optional, useful for autocompletion)
export const CurrentPageContext = createContext<CurrentPageType | undefined>(undefined);