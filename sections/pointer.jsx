import { twMerge } from "tailwind-merge";

export default function Pointer({ name, color = "blue" }) {
  return (
    <div className="relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="white"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-mouse-pointer text-black size-5"
      >
        <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"></path>
        <path d="M13 13l6 6"></path>
      </svg>
      <div className="absolute top-full left-full">
        <div
          className={twMerge(
            "inline-flex rounded-full font-medium text-sm px-2 rounded-tl-none text-white",
            color === "red" ? "bg-red-500" : "bg-blue-500"
          )}
        >
          {name}
        </div>
      </div>
    </div>
  );
}
