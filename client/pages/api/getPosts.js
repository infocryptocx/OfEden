import { client } from "../../lib/client";

const query = `*[_type == "post"] | order(publishedAt desc){
    title,
    "name": author->name,
    "categories": categories[]->title,
    "authorImage": author->image,
    body,
    publishedAt
}`;

export default async (req, res) => {
  try {
    const sanityResponse = await client.fetch(query);

    res.status(200).send(sanityResponse);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};
