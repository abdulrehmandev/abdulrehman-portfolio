import {
  ArrowUpRight,
  Calendar,
  Github,
  Instagram,
  Link,
  Linkedin,
  LucideProps,
  Mail,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import React from "react";

const IconMap = {
  "arrow-up-right": ArrowUpRight,
  twitter: Twitter,
  instagram: Instagram,
  linkedin: Linkedin,
  github: Github,
  mail: Mail,
  calendar: Calendar,
  link: Link,
  upwork: (props: LucideProps) => (
    <svg
      version="1.1"
      viewBox="0 0 56.7 56.7"
      xmlns="http://www.w3.org/2000/svg"
      height={props.size}
      width={props.size}
      {...props}
    >
      <path
        fill="currentColor"
        d="M42.4,17.7c-5.3,0-9.3,3.5-10.9,9c-2.5-3.9-4.5-8.3-5.6-12.1h-5.6v14.7c0,2.9-2.4,5.3-5.3,5.3c-2.9,0-5.3-2.4-5.3-5.3V14.7  H4.3v14.7c0,6.1,4.9,11,10.9,11c6,0,10.9-4.9,10.9-11v-2.5c1.1,2.2,2.5,4.6,4,6.7l-3.5,16.3h5.7L34.7,38c2.2,1.4,4.7,2.2,7.7,2.2  c6.1,0,11.1-5,11.1-11.4C53.5,22.7,48.5,17.7,42.4,17.7z M42.4,34.6c-2.2,0-4.5-1-6.3-2.5l0.6-2.2v-0.1c0.4-2.4,1.7-6.4,5.8-6.4  c3.1,0,5.6,2.5,5.6,5.6C48,32.1,45.3,34.6,42.4,34.6z"
      />
    </svg>
  ),
};

type IconName = keyof typeof IconMap;

export interface IconProps extends LucideProps {
  name: IconName;
}

const Icon: React.FC<IconProps> = ({ name, ...props }) => {
  const IconComponent = IconMap[name];
  return <IconComponent {...props} />;
};

export default Icon;
