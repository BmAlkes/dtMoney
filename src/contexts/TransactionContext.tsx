import { createContext, ReactNode, useEffect, useState } from "react";

export interface Transaction {
  id: number;
  description: string;
  type: "income" | "outcome";
  Price: number;
  category: string;
  createAt: string;
}
export interface TransactionContextType {
  transactions: Transaction[];
}
interface TransactionProviderProps {
  children: ReactNode;
}

export const TransactionContext = createContext({} as TransactionContextType);

export const TransactionProvider = ({ children }: TransactionProviderProps) => {
  const [transactions, setTRansactions] = useState<Transaction[]>([]);
  useEffect(() => {
    async function LoadTransaction() {
      const response = await fetch("http://localhost:3333/transactions");
      const data = await response.json();
      setTRansactions(data);
    }
    LoadTransaction();
  }, []);

  return (
    <TransactionContext.Provider value={{ transactions }}>
      {children}
    </TransactionContext.Provider>
  );
};
