export const dateFormatter = new Intl.DateTimeFormat("en-Us");

export const priceFormatter = new Intl.NumberFormat("he-IL", {
  style: "currency",
  currency: "ILS",
});
