import sanity from "@sanity/client";

export default sanity({
  projectId: "d0aksbef",
  dataset: "production",
  useCdn: false,
});
