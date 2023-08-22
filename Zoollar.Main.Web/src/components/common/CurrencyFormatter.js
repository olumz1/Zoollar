export default function formatter(props) {
  let money = `${"\u20A6"}${props
    .toFixed(2)
    .replace(/\d(?=(\d{3})+\.)/g, "$&,")}`;
  return money;
}
