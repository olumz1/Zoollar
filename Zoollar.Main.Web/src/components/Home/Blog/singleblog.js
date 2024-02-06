import {
  Blog,
  BlogDate,
  BlogDescription,
  BlogImage,
  BlogsHeader,
} from "../../../styles/blogs";

export default function SingleBlog({ blog, matches }) {
  return (
    <Blog>
      <BlogImage src={blog.image} />
      <BlogsHeader
        sx={{
          fontSize: "21px",
          width: "100%",
          position: "relative",
        }}
      >
        {blog.header}
      </BlogsHeader>
      <BlogDate>{blog.publisheddate}</BlogDate>
      <BlogDescription>{blog.description}</BlogDescription>
    </Blog>
  );
}
