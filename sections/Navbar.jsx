"use client";
import Image from "next/image";
import logoImage from "@/assets/images/logo21.svg";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import { LayoutDashboard, PenBox } from "lucide-react";



const navLinks = [
  { label: "Home", href: "#" },
  { label: "Features", href: "#features" },
  { label: "Integrations", href: "#integrations" },
  { label: "FAQs", href: "#faqs" },
];

const Navbar = ()=> {
  const [isOpen, setIsOpen] = useState(false);
   const [userData, setUserData] = useState(null);

   useEffect(() => {
     const fetchUserData = async () => {
       try {
         const response = await fetch("/api/get-user");
         if (response.ok) {
           const data = await response.json();
           setUserData(data);
         }
       } catch (error) {
         console.error("Failed to fetch user data:", error);
       }
     };

     fetchUserData();
   }, []);
  
  return (
    <>
      <section className="py-4 lg:py-8 flex justify-center fixed w-full lg:sticky top-0 z-50">
        <div className="container max-w-5xl">
          <div className="border border-black/15 rounded-[27px] bg-neutral-100/30 backdrop-blur mx-2">
            <div className="grid grid-cols-2 lg:grid-cols-3 items-center px-4 md:pr-2 p-2 mx-2">
              <div>
                <Link href={"/"}>
                  <Image
                    src={logoImage}
                    alt="Logo"
                    className="h-9 w-auto md:h-auto"
                  />
                </Link>
              </div>

              <div className="justify-center items-center hidden lg:flex">
                <SignedOut>
                  <nav key={navLinks} className="flex gap-6 font-medium">
                    {navLinks.map((link) => (
                      <Link
                        key={link.label}
                        href={link.href}
                        className="text-black font-medium hover:text-primary/90"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                </SignedOut>
              </div>

              <div className="flex justify-end gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-menu md:hidden cursor-pointer"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <line
                    x1="3"
                    y1="6"
                    x2="21"
                    y2="6"
                    className={twMerge(
                      "origin-left transition-all",
                      isOpen && "rotate-45 -translate-y-1"
                    )}
                  />
                  <line
                    x1="3"
                    y1="12"
                    x2="21"
                    y2="12"
                    className={twMerge("transition-all", isOpen && "opacity-0")}
                  />
                  <line
                    x1="3"
                    y1="18"
                    x2="21"
                    y2="18"
                    className={twMerge(
                      "origin-left transition-all",
                      isOpen && "-rotate-45 translate-y-1"
                    )}
                  />
                </svg>

                <SignedOut>
                  <SignInButton forceRedirectUrl="/dashboard">
                    <Button
                      variant="outline"
                      className="rounded-full px-4 font-medium hidden md:inline-flex items-center"
                    >
                      Log In
                    </Button>
                  </SignInButton>
                </SignedOut>

                <SignedOut>
                  <SignUpButton forceRedirectUrl="/dashboard">
                    <Button className="rounded-full px-4 font-medium hidden md:inline-flex items-center">
                      Sign Up
                    </Button>
                  </SignUpButton>
                </SignedOut>
                <div className="flex gap-4 justify-center items-center">
                  <SignedIn>
                    <Link
                      href="/dashboard"
                      className="text-black font-medium hover:text-primary/90 hidden md:block lg:inline-flex"
                    >
                      <div className="flex justify-center items-center gap-2">
                        <Button
                          variant="outline"
                          className="rounded-full px-4 font-medium md:inline-flex items-center"
                        >
                          <LayoutDashboard size={18} />
                          Dashboard
                        </Button>
                      </div>
                    </Link>

                    <Link
                      href={"/transaction/create"}
                      className="text-black font-medium hover:text-primary/90 hidden md:block lg:inline-flex"
                    >
                      <div className="flex justify-center items-center gap-2">
                        <Button className="rounded-full px-4 font-medium md:inline-flex items-center">
                          <PenBox size={18} />
                          Add Transaction
                        </Button>
                      </div>
                    </Link>
                    <div className="hidden md:flex md:items-center lg:item-center">
                      <UserButton
                        appearance={{
                          elements: {
                            avatarBox: "w-10 h-10",
                          },
                        }}
                      />
                    </div>
                  </SignedIn>
                </div>
              </div>
            </div>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  exit={{ height: 0 }}
                  className="overflow-hidden lg:hidden"
                >
                  <div className="flex flex-col items-center py-4">
                    <SignedOut>
                      {navLinks.map((link) => (
                        <Link
                          href={link.href}
                          key={link.label}
                          className="py-2"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </SignedOut>
                    <div className="flex gap-4">
                      <SignedOut>
                        <SignInButton forceRedirectUrl="/dashboard">
                          <Button
                            variant="outline"
                            className="rounded-full px-4 font-medium md:inline-flex items-center"
                          >
                            Log In
                          </Button>
                        </SignInButton>
                      </SignedOut>
                      <SignedOut>
                        <SignUpButton forceRedirectUrl="/dashboard">
                          <Button className="rounded-full px-4 font-medium md:inline-flex items-center">
                            Sign Up
                          </Button>
                        </SignUpButton>
                      </SignedOut>
                    </div>

                    <div className="flex gap-2 flex-col items-center justify-center">
                      <SignedIn>
                        <Link
                          href="/dashboard"
                          className="text-black font-medium hover:text-primary/90 flex justify-center items-center gap-2"
                        >
                          <Button
                            variant="outline"
                            className="rounded-full px-2 font-medium md:inline-flex items-center"
                          >
                            <LayoutDashboard size={18} />
                          </Button>
                        </Link>

                        <Link
                          href={"/transaction/create"}
                          className="text-black font-medium hover:text-primary/90 flex justify-center items-center gap-2"
                        >
                          <Button className="rounded-full px-2 font-medium md:inline-flex items-center">
                            <PenBox size={18} />
                          </Button>
                        </Link>

                        <UserButton
                          appearance={{
                            elements: {
                              avatarBox: "w-10 h-10",
                            },
                          }}
                        />
                      </SignedIn>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
      <div className="pb-[86px] md:pb-[98px] lg:pb-[15px]"></div>
    </>
  );
}


export default Navbar;