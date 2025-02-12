import { currentUser } from "@clerk/nextjs/server";
import { db } from "./prisma";

export const checkUser = async () => {
  const user = await currentUser();
  if (!user) return null;

  const {
    id: clerkUserId,
    firstName,
    lastName,
    imageUrl,
    emailAddresses,
  } = user;
  const email = emailAddresses?.[0]?.emailAddress;

  try {
    const existingUser = await db.user.findUnique({ where: { clerkUserId } });
    if (existingUser) return existingUser;

    const name =
      `${firstName || ""} ${lastName || ""}`.trim() || "Anonymous User";

    return await db.user.create({
      data: {
        clerkUserId,
        name,
        imageUrl,
        email,
      },
    });
  } catch (error) {
    console.error("Error creating or fetching user:", error);
    return null;
  }
};
