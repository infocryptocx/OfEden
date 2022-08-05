/* eslint-disable import/no-anonymous-default-export */
import { serialize } from "cookie";
import { sign } from "../../../services/jwt_sign_verify";

const secret = process.env.SECRET || "secret";

export default async function (req, res) {
  const { nftHolder, walletAddress } = req.body;

  if (nftHolder === true) {
    const token = await sign(walletAddress, secret);

    const serialised = serialize("CryptoWorld", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      sameSite: "strict",
      maxAge: 60 * 60 * 24 * 30,
      path: "/",
    });

    res.setHeader("Set-Cookie", serialised);

    res.status(200).json({ message: "Success!" });
  } else {
    res.json({ message: "Not A NftHolder!", holder: nftHolder });
  }
}
