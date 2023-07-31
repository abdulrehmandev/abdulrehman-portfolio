import { links } from "@/data/footer";
import PrimaryLink from "./ui/PrimaryLink";
import { FiExternalLink } from "react-icons/fi";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="px-4 py-2">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-3 items-center justify-center sm:justify-between">
          <Image
            className="h-full dark:block hidden"
            src="/logo-dark.svg"
            width={50}
            height={40}
            alt="logo"
          />
          <Image
            className="h-full dark:hidden block"
            src="/logo-light.svg"
            width={50}
            height={50}
            alt="logo"
          />
          <div className="flex gap-1 sm:gap-3 items-center py-1">
            {links.map((link) => (
              <PrimaryLink href={link.href} key={link.id}>
                <span>{link.title}</span>
                <FiExternalLink />
              </PrimaryLink>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
