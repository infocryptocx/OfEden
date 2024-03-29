import { SignJWT, jwtVerify } from "jose";

export async function sign(payload, secret) {
  const iat = Math.floor(Date.now() / 1000);
  const exp = iat + 60 * 60; // one hour

  return new SignJWT({ payload })
    .setProtectedHeader({ alg: "HS256", typ: "JWT" })
    .setExpirationTime(exp)
    .setIssuedAt(iat)
    .setNotBefore(iat)
    .sign(new TextEncoder().encode(secret));
}

export async function verify(token, secret) {
  const { payload } = await jwtVerify(token, new TextEncoder().encode(secret));
  // run some checks on the returned payload, perhaps you expect some specific values
  console.log(payload);
  // if its all good, return it, or perhaps just return a boolean
  return payload;
}
