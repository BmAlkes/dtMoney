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
import { useSummary } from "../../hooks/useSummary";

const Summary = () => {
  const { income, total, outcome } = useSummary();
  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <PriceHightLight variant="income">Entrace</PriceHightLight>
          <BsFillArrowUpCircleFill size={32} color="#00b37e" />
        </header>
        <strong>{priceFormatter.format(income)}</strong>
      </SummaryCard>
      <SummaryCard>
        <header>
          <PriceHightLight variant="outcome">Outcome</PriceHightLight>
          <BsFillArrowDownCircleFill size={32} color="#f75a68" />
        </header>
        <strong>{priceFormatter.format(outcome)}</strong>
      </SummaryCard>
      <SummaryCard variant="green">
        <header>
          <span>Total</span>
          <BiShekel size={32} color="#fff" />
        </header>
        <strong>{priceFormatter.format(total)}</strong>
      </SummaryCard>
    </SummaryContainer>
  );
};

export default Summary;
