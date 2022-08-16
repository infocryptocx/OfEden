import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "v1",
  token:
    "skYDakXylDPjwFm7ICsdYqWtQFTtvr63WQjJ7nNHy4NRVtxSfVcsM7ZG9dzwQQntC2aWl1NNqifEzGnkNUFh2cLmylSAGdIojgzZXwJCauSe0tH447kNj5T5yoOC530yXCh9FtkxRFPzw5vD5ATH2Z86Ebo7aMJCNueZZkwYH6R4JAypKY07",
  useCdn: false,
});
