import removeCurrencySymbol from "./RemoveCurrencySymbol";
export default function formatter(props) {
  let money = `${"\u20A6"}${removeCurrencySymbol(props)}`;
  return money.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
