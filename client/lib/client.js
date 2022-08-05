import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "v1",
  token:
    "sk6TRa66eU0F9nAPYwkjZ3LpTCHDP8V986PULL3awwYWudAhOq4pGnxiuUDAVLP56MuD3yAG0c1AQdGOe2XPqZp8KWT6qtvOzyE9z4ELrfXXQRfjbe1TO7kPsEZIuB36eiuznV9AmB96X2Vne7rQwNJqoyt1bX3VxOtE7H1PI46NBS2b72W3",
  useCdn: false,
});
