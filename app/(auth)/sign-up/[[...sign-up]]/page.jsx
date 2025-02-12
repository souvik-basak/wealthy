"use client";
import { SignUp } from "@clerk/nextjs";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
  const searchParams = useSearchParams();
  const [email, setEmail] = useState("");

  useEffect(() => {
    const prefillEmail = searchParams.get("email");
    if (prefillEmail) setEmail(prefillEmail);
  }, [searchParams]);

  return (
    <div className="flex justify-center">
      <SignUp
        appearance={{ elements: { input: "w-full" } }}
        defaultValues={{ emailAddress: email }}
      />
    </div>
  );
}
