import React, { useState } from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import SwiperCore, { Navigation } from "swiper";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "./detailsStyles.css";
import "./propertydetailsswiper.css";
SwiperCore.use([Navigation]);

function PropertyDetailsSwiper({ propertyImages }) {
  const [currImg, setCurrImg] = useState({
    index: 0,
    index1: 1,
    index2: 2,
    index3: 3,
  });

  const imgAction = (action) => {
    let i = currImg.index;

    if (action === "prev-img") {
      console.log(`this is the current index ${currImg.index}`);
      console.log(`this is the current index1 ${currImg.index1}`);
      console.log(`this is the current index2 ${currImg.index2}`);
      console.log(`this is the current index3 ${currImg.index3}`);
      setCurrImg({
        index:
          currImg.index === propertyImages.length - 1 ? 0 : currImg.index + 1,
        index1:
          currImg.index === propertyImages.length - 2 ? 0 : currImg.index + 2,
        index2: 3,
        //currImg.index === propertyImages.length - 1 ? 0 : currImg.index1 + 2,
        index3: 4,
        // currImg.index === propertyImages.length - 1 ? 0 : currImg.index2 + 2,
      });
    }

    if (action === "next-img") {
      setCurrImg({
        index: currImg.index === propertyImages.length - 1 ? 0 : i + 1,
      });
    }
  };

  return (
    <div class="grid-container">
      <div className="left" onClick={() => imgAction("prev-img")}>
        <ArrowBackIosIcon style={{ fontSize: 30 }} />
      </div>
      <div
        class="grid-item1"
        style={{
          backgroundImage: `url(${propertyImages[currImg.index].imageUrl})`,
          backgroundSize: `100% 100%`,
        }}
      ></div>
      <div
        class="grid-item2"
        style={{
          backgroundImage: `url(${propertyImages[currImg.index1].imageUrl})`,
          backgroundSize: `100% 100%`,
        }}
      ></div>
      <div
        class="grid-item3"
        style={{
          backgroundImage: `url(${propertyImages[currImg.index2].imageUrl})`,
          backgroundSize: `100% 100%`,
        }}
      ></div>
      <div
        class="grid-item4"
        style={{
          backgroundImage: `url(${propertyImages[currImg.index3].imageUrl})`,
          backgroundSize: `100% 100%`,
        }}
      ></div>

      <div className="right" onClick={() => imgAction("next-img")}>
        <ArrowForwardIosIcon style={{ fontSize: 30 }} />
      </div>
    </div>
  );
}

export default PropertyDetailsSwiper;
