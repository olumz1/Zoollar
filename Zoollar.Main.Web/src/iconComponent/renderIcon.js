import CentralAc from "./CentralAc";
import Ensuite from "./Ensuite";
import Jacuzzi from "./Jacuzzi";
import SmartHome from "./SmartHome";

export default function RenderIcon(props) {
  switch (props.icon) {
    case "Central AC":
      return <CentralAc />;
    case "Jacuzzi":
      return <Jacuzzi />;
    case "Ensuite":
      return <Ensuite />;
    case "Smart Home":
      return <SmartHome />;
    default:
      return <></>;
  }
  //   if(props.icon == 'user'){
  //     return <centralAc />}
  // else if(icon == 'Jacuzzi'){
  //     return <Jacuzzi />}
  // else if(icon == 'Ensuite'){
  //     return <Ensuite />}
  // else if(icon == 'Smart Home'){
  //     return <SmartHome />}
  // else if(icon == 'Fully furnished'){
  //     return <FullyFurnished />
  // else if(icon == 'Solar'){
  //     return <Solar />
  // else if(icon == 'Jacuzzi'){
  //     return <Jacuzzi />
  // else if(icon == 'Jacuzzi'){
  //     return <Jacuzzi />
  // else if(icon == 'Jacuzzi'){
  //     return <Jacuzzi />
  // else if(icon == 'Jacuzzi'){
  //     return <Jacuzzi />
  // else if(icon == 'Jacuzzi'){
  //     return <Jacuzzi />
}
