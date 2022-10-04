import { serialize } from "cookie";

export default async function (req, res) {
  const jwt = req.cookies.CryptoWorld;

  if (!jwt) {
    return res.json({ message: "Bro you are not logged in..." });
  } else {
    const serialised = serialize("CryptoWorld", null, {
      httpOnly: true,
      secure:
        process.env.NODE_ENV === "development" ? ".localhost" : ".ofedn.io",
      sameSite: "strict",
      maxAge: -1,
      path: "/",
    });

    res.setHeader("Set-Cookie", serialised);

    res.status(200).json({ message: "Successfuly logged out!" });
  }
}
