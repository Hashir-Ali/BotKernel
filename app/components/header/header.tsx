import Image from "next/image";
import Link from "next/link";
import React from "react";

type Header = {
  logo: {
    src: string;
    height: number;
    width: number;
    alt: string;
    link: string;
  };
  links: { path: string; title: string }[];
  user: {
    addresses: string[];
    name: string;
    balance: number;
  };
};
const Header: React.FC<Header> = ({ logo, links, user }) => {
  return (
    <>
      <header className='flex flex-row w-full h-[100px] p-[30px] bg-[#20262C] justify-start'>
        <Image
          src='/images/Menu.svg'
          alt={"header menu icon"}
          width={36}
          height={27}
          className='mr-4 md:hidden cursor-pointer'
        />
        <Link href={""}>
          <Image
            src={logo.src}
            width={logo.width}
            height={logo.width}
            alt={logo.alt}
          />
        </Link>
      </header>
    </>
  );
};

export default Header;
