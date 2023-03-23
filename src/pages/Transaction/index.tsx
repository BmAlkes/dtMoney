import React from "react";
import { Header } from "../../components/Header";
import SearchForm from "../../components/SearchForm";
import Summary from "../../components/Summary";
import {
  PriceHightLight,
  TransactionContainer,
  TransactionTable,
} from "./styles";

export const Transactions = () => {
  return (
    <>
      <Header />
      <Summary />
      <TransactionContainer>
        <SearchForm />
        <TransactionTable>
          <tbody>
            <tr>
              <td width="50%">Frelancer Web Development</td>
              <td>
                <PriceHightLight variant="income"> ₪ 12.000,00</PriceHightLight>
              </td>
              <td>Sold</td>
              <td>23/03/23</td>
            </tr>
            <tr>
              <td width="50%">Frelancer Web Development</td>
              <td>
                <PriceHightLight variant="outcome">
                  {" "}
                  ₪ 12.000,00
                </PriceHightLight>
              </td>
              <td>Sold</td>
              <td>23/03/23</td>
            </tr>
            <tr>
              <td width="50%">Frelancer Web Development</td>
              <td>
                <PriceHightLight variant="income"> ₪ 12.000,00</PriceHightLight>
              </td>
              <td>Sold</td>
              <td>23/03/23</td>
            </tr>
            <tr>
              <td width="50%">Frelancer Web Development</td>
              <td>
                <PriceHightLight variant="outcome">
                  {" "}
                  ₪ 12.000,00
                </PriceHightLight>
              </td>
              <td>Sold</td>
              <td>23/03/23</td>
            </tr>
            <tr>
              <td width="50%">Frelancer Web Development</td>
              <td>
                <PriceHightLight variant="income"> ₪ 12.000,00</PriceHightLight>
              </td>
              <td>Sold</td>
              <td>23/03/23</td>
            </tr>
            <tr>
              <td width="50%">Frelancer Web Development</td>
              <td>
                <PriceHightLight variant="outcome">
                  {" "}
                  ₪ 12.000,00
                </PriceHightLight>
              </td>
              <td>Sold</td>
              <td>23/03/23</td>
            </tr>
          </tbody>
        </TransactionTable>
      </TransactionContainer>
    </>
  );
};
