import React, { Suspense } from "react";
import DashboardPage from "./page";
import { BarLoader } from "react-spinners";

const DashboardLayout = () => {
  return (
    <div>
      <div className="px-8">
        <h1 className=" text-3xl md:text-5xl font-semibold mb-5 bg-clip-text text-transparent bg-gradient-to-r from-lime-900 via-lime-600 to-lime-800">
          Dashboard
        </h1>

        <Suspense fallback={<BarLoader className="mt-4" width={"100%"} color="#9333ea"/>}>
          <DashboardPage />
        </Suspense>
      </div>
    </div>
  );
};

export default DashboardLayout;
