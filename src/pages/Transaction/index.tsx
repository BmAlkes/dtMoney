import React, { useContext, useEffect, useState } from "react";
import { Header } from "../../components/Header";
import SearchForm from "../../components/SearchForm";
import Summary from "../../components/Summary";
import { Transaction } from "../../contexts/TransactionContext";
import {
  PriceHightLight,
  TransactionContainer,
  TransactionTable,
} from "./styles";
import { TransactionContext } from "../../contexts/TransactionContext";

export const Transactions = () => {
  const { transactions } = useContext(TransactionContext);
  return (
    <>
      <Header />
      <Summary />
      <TransactionContainer>
        <SearchForm />
        <TransactionTable>
          <tbody>
            {transactions?.map((item: Transaction) => {
              return (
                <>
                  <tr key={item.id}>
                    <td width="50%">{item.description}</td>
                    <td>
                      <PriceHightLight variant={item.type}>
                        ₪ {item.Price}
                      </PriceHightLight>
                    </td>
                    <td>{item.category}</td>
                    <td>{item.createAt}</td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </TransactionTable>
      </TransactionContainer>
    </>
  );
};
