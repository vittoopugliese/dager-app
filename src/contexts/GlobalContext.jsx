import {createContext, useState} from "react";

export const GlobalContext = createContext({
  modoBananero: false,
  setModoBananero: () => {},
});

export const GlobalContextProvider = ({children}) => {
  const [modoBananero, setModoBananero] = useState(false);

  return (
    <GlobalContext.Provider
      value={{
        modoBananero,
        setModoBananero,
      }}>
      {children}
    </GlobalContext.Provider>
  );
};
