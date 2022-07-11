export default {
  name: "audio",
  title: "Audio",
  type: "document",
  fields: [
    { title: "Title", name: "title", type: "string" },
    {
      title: "Audio file",
      name: "audio",
      type: "file",
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
