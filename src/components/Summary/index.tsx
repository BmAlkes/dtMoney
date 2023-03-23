import React from "react";
import { SummaryCard, SummaryContainer } from "./styles";
import {
  BsFillArrowUpCircleFill,
  BsFillArrowDownCircleFill,
} from "react-icons/bs";
import { BiShekel } from "react-icons/bi";
import { PriceHightLight } from "../../pages/Transaction/styles";

const Summary = () => {
  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <PriceHightLight variant="income">Entrace</PriceHightLight>
          <BsFillArrowUpCircleFill size={32} color="#00b37e" />
        </header>
        <strong>₪20</strong>
      </SummaryCard>
      <SummaryCard>
        <header>
          <PriceHightLight variant="outcome">Outcome</PriceHightLight>
          <BsFillArrowDownCircleFill size={32} color="#f75a68" />
        </header>
        <strong>₪20</strong>
      </SummaryCard>
      <SummaryCard variant="green">
        <header>
          <span>Total</span>
          <BiShekel size={32} color="#fff" />
        </header>
        <strong>₪10</strong>
      </SummaryCard>
    </SummaryContainer>
  );
};

export default Summary;
