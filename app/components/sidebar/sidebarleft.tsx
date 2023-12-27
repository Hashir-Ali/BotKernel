"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type SideBar = {
  links: { path: string; title: string }[];
  user: {
    addresses: string[];
    name: string;
    balance: number;
  };
};
const SideBarleft: React.FC<SideBar> = ({ links, user }) => {
  return (
    <aside className='w-3/5 h-screen bg-[#20262C] p-[30px] z-10 hidden overflow-y-auto md:block md:w-1/5 md:h-5/6'>
      <section className='flex flex-row justify-between text-[#F4F5F1]'>
        <div className='w-10'>
          <h3>Welcome Back</h3>
          <h1 className='font-bold text-[22px] mt-[15px]'>{user.name}</h1>
        </div>
        <div className='mt-5'>
          <h3>Balance</h3>
          <h1 className='font-bold text-[22px] mt-[15px]'>${user.balance}</h1>
        </div>
      </section>
      <section className='mt-20 text-[#F4F5F1]'>
        <div className='flex flex-col'>
          <div className='h-4/5 overflow-auto'>
            <h3 className='font-medium text-[16px]'>Address</h3>
            {user.addresses.map((address, key) => {
              return (
                <button
                  key={key}
                  className='bg-[#FCAF17] rounded-[40px] font-medium text-[16px] color-[#20262C] px-5 py-[15px] my-[10px]'>
                  {address}.{" "}
                  <Image
                    src={"/images/arrowDown.svg"}
                    alt=''
                    width={11}
                    height={6}
                    className='inline'
                  />
                </button>
              );
            })}

            <p
              className='cursor-pointer text-[#FCAF17] text-[12px] font-medium'
              onClick={() => {
                user.addresses.push("Abra street 123.");
                console.log("I was clicked babuaa");
              }}>
              + Add Addres
            </p>
          </div>
        </div>
      </section>
      <section className='flex flex-col justify-around mt-20'>
        <div className='flex flex-col'>
          <h3 className='font-medium text-[16px]  text-[#FCAF17] mb-5'>
            MORE OPTIONS
          </h3>
          <ul className='text-[#F4F5F1]'>
            {links.map((link, key) => {
              return (
                <li className='mb-3' key={key}>
                  <Link href={link.path}>{link.title}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </aside>
  );
};

export default SideBarleft;
