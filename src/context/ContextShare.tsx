import React, { createContext, useState, ReactNode } from "react";

interface CashResponseContextType {
  cashResponse: any;
  setCashResponse: React.Dispatch<React.SetStateAction<any>>;
}

interface BankResponseContextType {
  bankResponse: any;
  setBankResponse: React.Dispatch<React.SetStateAction<any>>;
}



export const cashResponseContext = createContext<
  CashResponseContextType | undefined
>(undefined);
export const BankResponseContext = createContext<
  BankResponseContextType | undefined
>(undefined);


interface ContextShareProps {
  children: ReactNode;
}

const ContextShare: React.FC<ContextShareProps> = ({ children }) => {
  const [cashResponse, setCashResponse] = useState<any>({});
  const [bankResponse, setBankResponse] = useState<any>({});

  return (
    <cashResponseContext.Provider value={{ cashResponse, setCashResponse }}>
      <BankResponseContext.Provider value={{ bankResponse, setBankResponse }}>
        
          {children}
      </BankResponseContext.Provider>
    </cashResponseContext.Provider>
  );
};

export default ContextShare;
