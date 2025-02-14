import { getAccountWithTransactions } from "@/actions/accounts";
import { notFound } from "next/navigation";
import React, { Suspense } from "react";
import TransactionTable from "../_components/transactionTable";
import { BarLoader } from "react-spinners";
import AccountChart from "../_components/AccountChart";

const AccountsPage = async ({ params }) => {
  const { id } = await Promise.resolve(params);
  const accountData = await getAccountWithTransactions(id);

  if (!accountData) {
    notFound();
  }

  // console.log(accountData);

  const { transactions, ...account } = accountData;

  return (
    <div className="space-y-8 lg:px-16 px-2 md:px-4">
      <div className=" flex gap-4 items-end justify-between">
        <div>
          <h1 className="text-5xl sm:text-6xl gradient-title capitalize">
            {account.name}
          </h1>
          <p className="text-muted-foreground">
            {account.type
              ? account.type.charAt(0).toUpperCase() +
                account.type.slice(1).toLowerCase()
              : "N/A"}{" "}
            Account
          </p>
        </div>
        <div className="text-right pb-2">
          <div className="text-xl sm:text-2xl font-bold">
            ${parseFloat(account.balance).toFixed(2)}
          </div>
          <p className="text-sm text-muted-foreground">
            {account._count.transactions} Transactions
          </p>
        </div>
      </div>

      {/* chart */}
      <Suspense
        fallback={<BarLoader className="mt-4" width={"100%"} color="#9333ea" />}
      >
        <AccountChart transactions={transactions} />
      </Suspense>
      {/* table */}
      <Suspense
        fallback={<BarLoader className="mt-4" width={"100%"} color="#9333ea" />}
      >
        <TransactionTable transactions={transactions} />
      </Suspense>
    </div>
  );
};

export default AccountsPage;
