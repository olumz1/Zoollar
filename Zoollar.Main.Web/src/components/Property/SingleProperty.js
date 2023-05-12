import { Box, Grid } from "@mui/material";
import {
  PropertyCard,
  PropertyCardFeatured,
  PropertyCardWrapper,
  FeaturedListing,
  PropertyCardFooter,
  PropertyCardPrice,
  PropertyCardContent,
  PropertyCardAddress,
  PropertySearchSection,
  PropertyCardImage,
} from "../../styles/propertylisting";
import { Navigation, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "./swiper.css";

function SingleProperty({ property, matches }) {
  return (
    <PropertyCard>
      <PropertyCardFeatured>
        <PropertyCardWrapper>
          <Box>
            <Box sx={{ width: "398px" }}>
              <Box
                sx={{
                  overflow: "hidden",
                  position: "relative",
                  width: "100%",
                  height: "auto",
                }}
              >
                <Swiper
                  modules={[Navigation, Pagination, A11y]}
                  spaceBetween={5}
                  slidesPerView={1}
                  navigation
                  pagination={{ clickable: true }}
                  onSwiper={(swiper) => console.log(swiper)}
                  onSlideChange={() => console.log("slide change")}
                  className="swiper"
                >
                  {property.propertyData.propertyImage.map((propertyImage) => (
                    <SwiperSlide
                      sx={{
                        width: "401.5px",
                        height: "300px",
                        left: "-401.5px",
                        float: "left",
                        position: "relative",
                        overflow: "hidden",
                      }}
                    >
                      <PropertyCardImage src={propertyImage.imageUrl} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </Box>
            </Box>
            <FeaturedListing>{property.id}</FeaturedListing>
          </Box>
          <PropertyCardFooter>
            <PropertyCardPrice>
              <Box
                sx={{
                  minHeight: "33px",
                  fontSize: "25px",
                  fontWeight: "400",
                  lineHeight: 1,
                }}
              >
                {property.propertyData.propertyPrice.price}
              </Box>
              <Box
                sx={{ minHeight: "20px", fontSize: "15px", fontWeight: "400" }}
              >
                Guide Price
              </Box>
            </PropertyCardPrice>
          </PropertyCardFooter>
          <PropertyCardContent>
            <Box
              sx={{
                minHeight: "0",
                overflow: "hidden",
                flexShrink: "0",
                boxSizing: "border-box",
                display: "block",
              }}
            >
              <PropertyCardAddress>
                {GetPropertyAddress(
                  property.propertyData.propertyDetails.address
                )}
              </PropertyCardAddress>
              <Box>
                <span>{property.propertyData.propertyType}</span>
                <span class="no-svg-bed-icon bed-icon seperator">
                  <svg viewBox="0 -2 16 14">
                    <title>6 bedrooms</title>
                    <use href="#core-icon--bed-icon"></use>
                  </svg>
                </span>
              </Box>
            </Box>
          </PropertyCardContent>
        </PropertyCardWrapper>
      </PropertyCardFeatured>
    </PropertyCard>
  );
}

export default SingleProperty;

function GetPropertyAddress(address) {
  let newAdderss = `${address.addressLine}, ${address.town}, ${address.city}, ${address.state}`;
  return newAdderss;
}
