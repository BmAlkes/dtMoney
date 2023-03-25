import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { BsSearch } from "react-icons/bs";
import { SearchFormContainer } from "./styles";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { TransactionContext } from "../../contexts/TransactionContext";

const searchFormSchema = z.object({
  query: z.string(),
});

type SearchFormInput = z.infer<typeof searchFormSchema>;

const SearchForm = () => {
  const { fetchTransactions } = useContext(TransactionContext);
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInput>({
    resolver: zodResolver(searchFormSchema),
  });

  const handleSearchTransition = async (data: SearchFormInput) => {
    await fetchTransactions(data.query);
  };
  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransition)}>
      <input
        type="text"
        placeholder="Search transaction"
        {...register("query")}
      />
      <button type="submit" disabled={isSubmitting}>
        <BsSearch />
        Search
      </button>
    </SearchFormContainer>
  );
};

export default SearchForm;
