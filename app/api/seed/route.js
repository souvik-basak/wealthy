import { seedTransactions } from "@/actions/seed";

export async function GET(){
  const result = await seedTransactions();
  // console.log(result);
  return Response.json(result);
}