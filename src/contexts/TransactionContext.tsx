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
  fetchTransactions: (query?: string) => Promise<void>;
}
interface TransactionProviderProps {
  children: ReactNode;
}

export const TransactionContext = createContext({} as TransactionContextType);

export const TransactionProvider = ({ children }: TransactionProviderProps) => {
  const [transactions, setTRansactions] = useState<Transaction[]>([]);
  async function fetchTransactions(query?: string) {
    const url = new URL("http://localhost:3333/transactions");
    if (query) {
      url.searchParams.append("q", query);
    }
    const response = await fetch(url);
    const data = await response.json();
    setTRansactions(data);
  }
  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <TransactionContext.Provider value={{ transactions, fetchTransactions }}>
      {children}
    </TransactionContext.Provider>
  );
};
