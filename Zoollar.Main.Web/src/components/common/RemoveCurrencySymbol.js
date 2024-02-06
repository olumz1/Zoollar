export default function removeCurrencySymbol(props) {
  if (typeof props === "string" || props instanceof String) {
    let money = props;
    return Number(money.replace(/[^0-9\.-]+/g, ""));
  }
  return props;
}
