import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import * as RadioGroup from "@radix-ui/react-radio-group";
import {
  CloseButton,
  Content,
  Overlay,
  TransactionButton,
  TransactionType,
} from "./styles";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BsArrowDownCircle, BsArrowUpCircle } from "react-icons/bs";

const NewTransactionModal = () => {
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>New Transaction</Dialog.Title>
        <CloseButton>
          <AiOutlineCloseCircle size={28} />
        </CloseButton>

        <form action="">
          <input type="text" placeholder="Description" required />
          <input type="text" placeholder="Price" required />
          <input type="text" placeholder="Category" required />

          <TransactionType>
            <TransactionButton variant="income" value="income">
              <BsArrowUpCircle size={20} />
              Income
            </TransactionButton>
            <TransactionButton variant="outcome" value="outcome">
              <BsArrowDownCircle size={20} />
              Outcome
            </TransactionButton>
          </TransactionType>
          <button type="submit">Register</button>
        </form>
      </Content>
    </Dialog.Portal>
  );
};

export default NewTransactionModal;
