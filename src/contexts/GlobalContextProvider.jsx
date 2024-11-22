import { useContext } from "react";
import { GlobalContext } from "./GlobalContext";

export function useGlobalContext() {
    const context = useContext(GlobalContext);
    if (context === undefined) throw new Error("userGlobalContext must be used within an GlobalContextProvider");
    return context;
  }
  