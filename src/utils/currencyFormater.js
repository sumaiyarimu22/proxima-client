export const currencyFormater = (amonut) => {
  return amonut?.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
};
