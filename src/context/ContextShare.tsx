import React, { createContext, useState, ReactNode } from "react";

interface CashResponseContextType {
  cashResponse: any;
  setCashResponse: React.Dispatch<React.SetStateAction<any>>; 
}

export const cashResponseContext = createContext<CashResponseContextType | undefined>(undefined);

interface ContextShareProps {
  children: ReactNode;
}

const ContextShare: React.FC<ContextShareProps> = ({ children }) => {
  const [cashResponse, setCashResponse] = useState<any>({});

  return (
    <cashResponseContext.Provider value={{ cashResponse, setCashResponse }}>
      {children}
    </cashResponseContext.Provider>
  );
};

export default ContextShare;
