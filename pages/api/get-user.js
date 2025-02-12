import { checkUser } from "@/lib/checkUser";

export default async function handler(req, res) {
  try {
    const user = await checkUser();
    if (!user) {
      return res.status(401).json({ message: "Not authenticated" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
}
