import React, { useContext } from "react";
import { SummaryCard, SummaryContainer } from "./styles";
import {
  BsFillArrowUpCircleFill,
  BsFillArrowDownCircleFill,
} from "react-icons/bs";
import { BiShekel } from "react-icons/bi";
import { PriceHightLight } from "../../pages/Transaction/styles";
import { TransactionContext } from "../../contexts/TransactionContext";
import { priceFormatter } from "../../utils/fomatter";

const Summary = () => {
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
  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <PriceHightLight variant="income">Entrace</PriceHightLight>
          <BsFillArrowUpCircleFill size={32} color="#00b37e" />
        </header>
        <strong>{priceFormatter.format(summary.income)}</strong>
      </SummaryCard>
      <SummaryCard>
        <header>
          <PriceHightLight variant="outcome">Outcome</PriceHightLight>
          <BsFillArrowDownCircleFill size={32} color="#f75a68" />
        </header>
        <strong>{priceFormatter.format(summary.outcome)}</strong>
      </SummaryCard>
      <SummaryCard variant="green">
        <header>
          <span>Total</span>
          <BiShekel size={32} color="#fff" />
        </header>
        <strong>{priceFormatter.format(summary.total)}</strong>
      </SummaryCard>
    </SummaryContainer>
  );
};

export default Summary;
