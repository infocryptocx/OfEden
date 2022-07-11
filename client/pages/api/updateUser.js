import { client } from "../../lib/client";

export default async (req, res) => {
  const {id, name, bio, email, username } = req.body;

  try {
    await client
    .patch(id)
    .set({
      name: name,
      bio: bio,
      email: email,
      username: username
    })
    .commit();
    res.status(200).send("Successful")
    
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};

