export default {
  name: "video",
  title: "Video",
  type: "document",
  fields: [
    { title: "Title", name: "title", type: "string" },
    {
      name: "videoWithDetatils",
      title: "Video (with details)",
      type: "object",
      fields: [
        {
          name: "video",
          title: "Video",
          type: "mux.video",
        },
        {
          name: "caption",
          title: "Caption",
          type: "string",
        },
      ],
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
