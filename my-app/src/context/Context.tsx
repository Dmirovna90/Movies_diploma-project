import { createContext } from "react";
import { IActiveContext } from "../types/types";

export const ActiveContext = createContext<IActiveContext | null>(null);
