export default function getPropertyAddress(props) {
  let newAdderss = `${props.addressLine}, ${props.town}, ${props.city}, ${props.state}`;
  return newAdderss;
}
