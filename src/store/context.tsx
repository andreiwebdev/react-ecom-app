import React from "react";

export const Context = React.createContext({} as any);

interface Props {
  children: React.ReactNode;
}

export const Provider: React.FC<Props> = ({ children }) => {
  const [context, setContext] = React.useState({ activeCat: "All Products" });

  return (
    <Context.Provider value={[context, setContext]}>
      {children}
    </Context.Provider>
  );
};
