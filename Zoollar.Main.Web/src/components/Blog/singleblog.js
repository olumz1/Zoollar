import {
  Blog,
  BlogDate,
  BlogDescription,
  BlogImage,
  BlogsHeader,
} from "../../styles/blogs";

export default function SingleBlog({ blog, matches }) {
  return (
    <Blog>
      <BlogImage src={blog.image} />
      <BlogsHeader
        sx={{
          margin: "20px -160px",
          fontSize: "21px",
          width: "100%",
        }}
      >
        {blog.header}
      </BlogsHeader>
      <BlogDate>{blog.publisheddate}</BlogDate>
      <BlogDescription>{blog.description}</BlogDescription>
    </Blog>
  );
}
