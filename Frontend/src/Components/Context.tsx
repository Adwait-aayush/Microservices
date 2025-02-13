import { createContext, useContext, useState, ReactNode } from "react";


interface DataContextType {
  data: any | null;  
  setData: (data: any) => void;
}


const Context = createContext<DataContextType | undefined>(undefined);


interface DataProviderProps {
  children: ReactNode;
}

export const DataProvider = ({ children }: DataProviderProps) => {
  const [data, setData] = useState<any | null>(null);  

  return (
    <Context.Provider value={{ data, setData }}>
      {children}
    </Context.Provider>
  );
};


export const useData = (): DataContextType => {
  const context = useContext(Context);
  if (context === undefined) {
    throw new Error("useData must be used within a DataProvider. Ensure that the DataProvider is correctly wrapping the component tree.");
  }
  return context;
};