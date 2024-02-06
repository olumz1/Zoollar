import { useEffect } from "react";
import Footer from "../../../components/footer/Footer";
import Navbar from "../../../components/navbar";
import { TextField, Button, Box } from "@mui/material";
import { PropertyFormHeader } from "./PropertyFormHeader";
import PropertyMediaUpload from "./PropertyMediaUpload";
import { useFormik } from "formik";
import * as Yup from "yup";
import useMultistepForm from "./useMultistepForm";
import { useState } from "react";
import PropertyDetails from "./PropertyDetails";
import OtherPropertyDetails from "./OtherPropertyDetails";
import { useNavigate } from "react-router-dom";

const INITIAL_DATA = {
  propertyImage: [],
  propertyVideo: "",
  propertyVideoUrl: "",
  virtualTourUrl: "",
  floorPlanImage: "",
  currency: "",
  Amount: "",
  offers: "",
  propertyType: "",
  listType: "",
  noOfBedrooms: "",
  noOfReceptiona: "",
  noOfBathrooms: "",
  propertyDescription: "",
  houseNameOrNumber: "",
  addressLine1: "",
  addressLine2: "",
  town: "",
  city: "",
  state: "",
  propertyFeatures: [],
};

function PropertyUploadForm() {
  const [data, setData] = useState(INITIAL_DATA);
  const navigate = useNavigate();
  function updateFields(newValues) {
    setData((prev) => {
      return { ...prev, ...newValues };
    });
  }

  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistepForm([
      <PropertyMediaUpload {...data} updateFields={updateFields} />,
      <PropertyDetails {...data} updateFields={updateFields} />,
      <OtherPropertyDetails {...data} />,
    ]);

  const formValidation = Yup.object().shape({
    companyName: Yup.string().required("Company Name is required"),
  });

  const myForm = useFormik({
    initialValues: {
      companyName: "",
    },
    validationSchema: formValidation,
    onSubmit: (values) => {
      alert(values.name);
    },
  });

  useEffect(() => {
    myForm.setFieldTouched("name", true);
  }, []);

  function onSubmit(e) {
    e.preventDefault();
    if (!isLastStep) return next();
    alert("Property Updated");

    navigate("./Confirmation");
  }

  return (
    <>
      <Navbar />
      <main style={{ display: "block" }}>
        <form onSubmit={onSubmit}>
          <PropertyFormHeader
            currentStepIndex={currentStepIndex + 1}
            totalSteps={steps.length}
          ></PropertyFormHeader>
          <section style={{ position: "relative", marginBottom: "16px" }}>
            <section
              style={{
                maxWidth: "48rem",
                width: "100%",
                marginLeft: "auto",
                marginRight: "auto",
                margin: "0 auto 72px",
                position: "relative",
              }}
            >
              {step}
              <Box
                sx={{
                  marginTop: "1rem",
                  display: "flex",
                  gap: ".5rem",
                  justifyContent: "flex-end",
                }}
              >
                {!isFirstStep && (
                  <Button
                    variant="contained"
                    sx={{ textTransform: "capitalize" }}
                    onClick={back}
                    type="button"
                  >
                    Back
                  </Button>
                )}
                <Button
                  variant="contained"
                  type="submit"
                  sx={{ textTransform: "capitalize" }}
                >
                  {isLastStep ? "Submit" : "Next"}
                </Button>
              </Box>
            </section>
          </section>
        </form>
      </main>
      <Footer />
    </>
  );
}

export default PropertyUploadForm;
