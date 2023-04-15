import { Box, Grid, useMediaQuery } from "@mui/material";
import * as React from "react";
import { useTheme } from "@mui/material/styles";
import {
  BlogsContainer,
  BlogsContentArea,
  BlogsHeader,
  BlogsSubHeaer,
} from "../../styles/blogs";
import { blogs } from "../../data";
import SingleBlog from "./singleblog";

//const AutoPlaySwipeableViews = SwipeableViews;

export default function Blog() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const renderBlogs = blogs.map((blog) => (
    <Grid
      item
      key={blog.id}
      xs={2}
      sm={3}
      md={4}
      display="flex"
      flexDirection={"column"}
    >
      <SingleBlog blog={blog} matches={matches} />
    </Grid>
  ));

  return (
    <BlogsContainer>
      <BlogsContentArea>
        <BlogsHeader>Want to know more about Nigerian properties?</BlogsHeader>
        <BlogsSubHeaer>Just ask Zoollar</BlogsSubHeaer>
        <Grid container>{renderBlogs}</Grid>
      </BlogsContentArea>
    </BlogsContainer>
  );
}
