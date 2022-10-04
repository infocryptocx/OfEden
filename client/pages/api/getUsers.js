import { client } from "../../lib/client";

const query = `*[_type == "users"] | order(name){
    name,
    walletAddress,
    "avatar": profileImage.asset->url,
    bio,
    email
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
