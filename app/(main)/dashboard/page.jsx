import { getDashboardData, getUserAccounts, } from "@/actions/dashboard";
// import { getDashboardData } from "@/actions/dashboard";
import { CreateAccountDrawer } from "@/components/CreateAccountDrawer";
import { Card, CardContent } from "@/components/ui/card";
import { Plus } from "lucide-react";
import { AccountCard } from "./_components/AccountCard";
import { getCurrentBudget } from "@/actions/budget";
import BudgetProgress from "../account/_components/BudgetProgress";
import { DashboardOverview } from "./_components/DashboardOverview";
import { Suspense } from "react";

async function DashboardPage() {
  const accounts = await getUserAccounts();
  const defaultAccount = accounts?.find((account) => account.isDefault);

  let budgetData = null;
  if (defaultAccount) {
    budgetData = await getCurrentBudget(defaultAccount.id);
  }

  const transactions = await getDashboardData()
  // console.log("budgetData: ", budgetData);
  return (
    <div className="space-y-8">
      {/* Budget Progress */}
      {defaultAccount && (
        <BudgetProgress
          initialBudget={budgetData?.budget}
          currentExpenses={budgetData?.currentExpenses || 0}
        />
      )}
      {/* overview */}
      <Suspense fallback={"Loading Overview"}>
        <DashboardOverview
        accounts={accounts}
        transactions={transactions || []}
      />
      </Suspense>

      {/* accounts grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <CreateAccountDrawer>
          <Card className="h-40 hover:shadow-md transition-shadow cursor-pointer border-dashed">
            <CardContent className="flex flex-col items-center justify-center text-muted-foreground h-full pt-5">
              <Plus className="h-10 w-10 mb-2" />
              <p className="text-sm font-medium">Add New Account</p>
            </CardContent>
          </Card>
        </CreateAccountDrawer>
        {accounts.length > 0 &&
          accounts?.map((account) => (
            <AccountCard key={account.id} account={account} />
          ))}
      </div>
    </div>
  );
}

export default DashboardPage;
