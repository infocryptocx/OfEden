export const userSchema = {
  name: "users",
  type: "document",
  title: "Users",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
    },
    {
      name: "walletAddress",
      type: "string",
      title: "Wallet Address",
    },
    {
      name: 'profileImage',
      type: 'image',
      title: 'Profile Image',
    },
    {
      name: "bio",
      type: "string",
      title: "Bio",
    },
    {
      name: "email",
      type: "string",
      title: "Email",
    },
    {
      name: "username",
      type: "string",
      title: "Username",
    },
  ],
};
