import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../libs/axios";

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
  createTransaction: (data: CreateTransactionInput) => Promise<void>;
}
interface TransactionProviderProps {
  children: ReactNode;
}
interface CreateTransactionInput {
  description: string;
  Price: number;
  category: string;
  type: "income" | "outcome";
}

export const TransactionContext = createContext({} as TransactionContextType);

export const TransactionProvider = ({ children }: TransactionProviderProps) => {
  const [transactions, setTRansactions] = useState<Transaction[]>([]);
  async function fetchTransactions(query?: string) {
    const response = await api.get("/transactions", {
      params: {
        _sort: "createAt",
        _order: "desc",
        q: query,
      },
    });
    setTRansactions(response.data);
  }
  async function createTransaction(data: CreateTransactionInput) {
    const { Price, category, description, type } = data;
    const response = await api.post("transactions", {
      category,
      description,
      Price,
      type,
      createAt: new Date(),
    });
    setTRansactions((prevState) => [response.data, ...prevState]);
  }
  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <TransactionContext.Provider
      value={{ transactions, fetchTransactions, createTransaction }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
