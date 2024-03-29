import { Box, Grid, useMediaQuery } from "@mui/material";
import * as React from "react";
import { useTheme } from "@mui/material/styles";
import {
  BlogsContentArea,
  BlogsHeader,
  BlogsSubHeaer,
} from "../../../styles/blogs";
import { Navigation, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { blogs } from "../../../data";
import SingleBlog from "./singleblog";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./blogswiper.css";

export default function Blog() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box>
      <Box
        sx={{
          paddingBottom: "24px",
          display: "flex",
          justifyContent: "flex-start",
        }}
      >
        <Box>
          <BlogsHeader>
            Want to know more about Nigerian properties?
          </BlogsHeader>
          <BlogsSubHeaer>Just ask Zoollar</BlogsSubHeaer>
        </Box>
      </Box>
      <Box>
        <BlogsContentArea>
          <Grid container>
            <Swiper
              modules={[Navigation, Pagination, A11y]}
              spaceBetween={5}
              slidesPerView={3}
              navigation
              pagination={{ clickable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
              className="mySwiper3"
            >
              {blogs.map((blog) => (
                <SwiperSlide className="swiper-slide" key={blog.id}>
                  <SingleBlog blog={blog} matches={matches} />
                </SwiperSlide>
              ))}
            </Swiper>
          </Grid>
        </BlogsContentArea>
      </Box>
    </Box>
  );
}
