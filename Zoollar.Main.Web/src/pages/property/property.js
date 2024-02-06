import Navbar from "../../components/navbar";
import Footer from "../../components/footer/Footer";
import PropertyDetail from "../../components/Property/PropertyDetails";
import { useParams } from "react-router-dom";

function Property() {
  const params = useParams();
  const id = params.id;
  console.log(id);
  return (
    <>
      <Navbar />
      <main style={{ gridArea: "main" }}>
        <PropertyDetail propertyId={id} />
      </main>
      <Footer />
    </>
  );
}

export default Property;
