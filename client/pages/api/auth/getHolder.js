export default async function (req, res) {
  const { cookies } = req;

  const jwt = cookies.CryptoWorld;

  if (!jwt) {
    return res.json({ message: "Not A Nft Holder!" });
  }

  return res.json({ data: "Nft Holder!" });
}
