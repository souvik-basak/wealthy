import Image from "next/image";
import logoImage from "../assets/images/logo21.svg";

const footerLinks = [
  { href: "#", label: "Contact" },
  { href: "#", label: "Privacy Policy" },
  { href: "#", label: "Terms & Conditions" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-slate-50/55 mt-2">
      <section className="py-4">
        <div className="container">
          <div className="flex flex-col md:flex-row md:justify-between items-center gap-6 lg:px-6 md:px-6">
            <div>
              <Image src={logoImage} alt="logo" />
            </div>
            <div>
              <div className="flex gap-6" key={footerLinks}>
                {footerLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="text-black/50 text-sm"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
