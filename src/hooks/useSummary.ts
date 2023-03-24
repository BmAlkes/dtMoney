import { useContext } from "react";
import { TransactionContext } from "../contexts/TransactionContext";

export function useSummary() {
  const { transactions } = useContext(TransactionContext);

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === "income") {
        acc.income += transaction.Price;
        acc.total += transaction.Price;
      }
      if (transaction.type === "outcome") {
        acc.outcome += transaction.Price;
        acc.total -= transaction.Price;
      }

      return acc;
    },
    { income: 0, outcome: 0, total: 0 }
  );
  return summary;
}
