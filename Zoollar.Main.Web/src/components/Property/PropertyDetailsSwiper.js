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

function PropertyDetailsSwiper({ propertyImages, handleClickOpen }) {
  const [currImg, setCurrImg] = useState({
    index: 0,
    img: propertyImages[0].imageUrl,
    index1: 1,
    img1: propertyImages[1].imageUrl,
    index2: 2,
    img2: propertyImages[2].imageUrl,
    index3: 3,
    img3: propertyImages[3].imageUrl,
  });

  const imgAction = (action) => {
    let i = currImg.index;
    let i1 = currImg.index1;
    let i2 = currImg.index2;
    let i3 = currImg.index3;
    console.log(`${currImg.index}`);
    console.log(`${currImg.index1}`);
    console.log(`${currImg.index2}`);
    console.log(`${currImg.index3}`);
    if (action === "prev-img") {
      setCurrImg({
        img:
          currImg.index === propertyImages.length - 1
            ? propertyImages[1].imageUrl
            : propertyImages[i + 1].imageUrl,
        index: currImg.index === propertyImages.length - 1 ? 0 : i + 1,
        img1:
          currImg.index1 === propertyImages.length - 2
            ? propertyImages[0].imageUrl
            : propertyImages[i1 + 2].imageUrl,
        index1: currImg.index1 === propertyImages.length - 2 ? 0 : i1 + 1,
        img2:
          currImg.index2 === propertyImages.length - 3
            ? propertyImages[0].imageUrl
            : propertyImages[i2 + 3].imageUrl,
        index2: currImg.index2 === propertyImages.length - 3 ? 0 : i2 + 1,
        img3:
          currImg.index3 === propertyImages.length - 4
            ? propertyImages[0].imageUrl
            : propertyImages[i3 + 4].imageUrl,
        index3: currImg.index3 === propertyImages.length - 4 ? 0 : i3 + 1,
      });
    }

    if (action === "next-img") {
      setCurrImg({
        img:
          currImg.index === 0
            ? propertyImages[propertyImages.length - 1].imageUrl
            : propertyImages[i - 1].imageUrl,
        index: currImg.index === 0 ? propertyImages.length - 1 : i - 1,
        img1:
          currImg.index1 ===
            propertyImages.length - (propertyImages.length - 1) ||
          currImg.index1 === 0
            ? propertyImages[propertyImages.length - 2].imageUrl
            : propertyImages[i1 - 1].imageUrl,
        index1:
          currImg.index1 ===
            propertyImages.length - (propertyImages.length - 1) ||
          currImg.index1 === 0
            ? propertyImages.length - 2
            : i1 - 1,
        img2:
          currImg.index2 ===
            propertyImages.length - (propertyImages.length - 2) ||
          currImg.index2 === 0
            ? propertyImages[propertyImages.length - 3].imageUrl
            : propertyImages[i2 - 1].imageUrl,
        index2:
          currImg.index2 ===
            propertyImages.length - (propertyImages.length - 2) ||
          currImg.index2 === 0
            ? propertyImages.length - 3
            : i2 - 1,
        img3:
          currImg.index3 ===
            propertyImages.length - (propertyImages.length - 3) ||
          currImg.index3 === 0
            ? propertyImages[propertyImages.length - 4].imageUrl
            : propertyImages[i3 - 1].imageUrl,
        index3:
          currImg.index3 ===
            propertyImages.length - (propertyImages.length - 3) ||
          currImg.index3 === 0
            ? propertyImages.length - 4
            : i3 - 1,
      });
    }
  };

  return (
    <div className="grid-container">
      <div className="left" onClick={() => imgAction("prev-img")}>
        <ArrowBackIosIcon style={{ fontSize: 30 }} />
      </div>
      <div
        className="grid-item1"
        style={{
          backgroundImage: `url(${currImg.img})`,
          backgroundSize: `100% 100%`,
        }}
        onClick={() => handleClickOpen(1)}
      ></div>
      <div
        className="grid-item2"
        style={{
          backgroundImage: `url(${currImg.img1})`,
          backgroundSize: `100% 100%`,
        }}
        onClick={() => handleClickOpen(1)}
      ></div>
      <div
        className="grid-item3"
        style={{
          backgroundImage: `url(${currImg.img2})`,
          backgroundSize: `100% 100%`,
        }}
        onClick={() => handleClickOpen(1)}
      ></div>
      <div
        className="grid-item4"
        style={{
          backgroundImage: `url(${currImg.img3})`,
          backgroundSize: `100% 100%`,
        }}
        onClick={() => handleClickOpen(1)}
      ></div>

      <div className="right" onClick={() => imgAction("next-img")}>
        <ArrowForwardIosIcon style={{ fontSize: 30 }} />
      </div>
    </div>
  );
}

export default PropertyDetailsSwiper;
