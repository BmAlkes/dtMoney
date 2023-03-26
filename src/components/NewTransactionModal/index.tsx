import React, { useContext } from "react";
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
import * as z from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "../../libs/axios";
import { TransactionContext } from "../../contexts/TransactionContext";

const newTransactionFormSchema = z.object({
  description: z.string(),
  Price: z.number(),
  category: z.string(),
  type: z.enum(["income", "outcome"]),
});

type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>;

const NewTransactionModal = () => {
  const { createTransaction } = useContext(TransactionContext);
  const { register, handleSubmit, control, reset } =
    useForm<NewTransactionFormInputs>({
      resolver: zodResolver(newTransactionFormSchema),
    });

  const handleSubmitData = async (data: NewTransactionFormInputs) => {
    createTransaction(data);
    reset();
  };
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>New Transaction</Dialog.Title>
        <CloseButton>
          <AiOutlineCloseCircle size={28} />
        </CloseButton>

        <form onSubmit={handleSubmit(handleSubmitData)}>
          <input
            type="text"
            placeholder="Description"
            required
            {...register("description")}
          />
          <input
            type="text"
            placeholder="Price"
            required
            {...register("Price", { valueAsNumber: true })}
          />
          <input
            type="text"
            placeholder="Category"
            required
            {...register("category")}
          />
          <Controller
            control={control}
            name="type"
            render={({ field }) => {
              return (
                <TransactionType
                  onValueChange={field.onChange}
                  value={field.value}
                >
                  <TransactionButton variant="income" value="income">
                    <BsArrowUpCircle size={20} />
                    Income
                  </TransactionButton>
                  <TransactionButton variant="outcome" value="outcome">
                    <BsArrowDownCircle size={20} />
                    Outcome
                  </TransactionButton>
                </TransactionType>
              );
            }}
          />
          <button type="submit">Register</button>
        </form>
      </Content>
    </Dialog.Portal>
  );
};

export default NewTransactionModal;
