import { createContext } from "react";

export interface CurrentPageType {
  value: string;
  setValue: (newValue: string) => void;
}

// Default value (optional, useful for autocompletion)
export const CurrentPageContext = createContext<CurrentPageType | undefined>(undefined);