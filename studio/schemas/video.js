export default {
  title: "Video blog post",
  name: "videoBlogPost",
  type: "document",
  fields: [
    { title: "Title", name: "title", type: "string" },
    {
      title: "Video file",
      name: "video",
      type: "mux.video",
    },
    { title: "Description", name: "description", type: "string" },
    {
      name: "author",
      title: "Author",
      type: "reference",
      to: { type: "author" },
    },
    {
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    },
  ],
};
