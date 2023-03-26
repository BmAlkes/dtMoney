export const dateFormatter = new Intl.DateTimeFormat("pt-BR");

export const priceFormatter = new Intl.NumberFormat("he-IL", {
  style: "currency",
  currency: "ILS",
});
