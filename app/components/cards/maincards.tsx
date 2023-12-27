import React from "react";
import Image from "next/image";

const MainCards = () => {
  return (
    <>
      <section className='card1 rounded-3xl p-7 mt-7'>
        <h1 className='font-bold text-xl text-[#F4F5F1] capitalize'>
          MARKETPLACE
        </h1>
        <p className='text-[#F4F5F1] my-7'>
          Dive into our Marketplace, where style meets convenience. Shop for
          shoes that step up your game, home decor that transforms spaces, and
          kitchenware that sparks joy. Your perfect find awaits!
        </p>
        <div>
          <button className='bg-[#FCAF17] rounded-[40px] font-medium text-[16px] color-[#20262C] px-5 py-[15px] my-[10px]'>
            SEARCH SETTING.{" "}
            <Image
              src={"/images/arrowDown.svg"}
              alt=''
              width={11}
              height={6}
              className='inline'
            />
          </button>
        </div>
        <div className='flex-col md:flex-row mt-7'>
          <div className='flex-1 text-[#F4F5F1]'>
            <h3>Filter</h3>
            <ul className='flex flex-row gap-4'>
              <li>Nearby</li>
              <li>Alphabetical</li>
              <li>Cash Back</li>
            </ul>
          </div>
          <div>
            <button className='bg-[#FCAF17] rounded-[40px] font-medium text-[16px] color-[#20262C] px-5 py-[15px] my-[10px]'>
              SHOP NOW{" "}
              <Image
                src={"/images/arrowDown.svg"}
                alt=''
                width={11}
                height={6}
                className='inline'
              />
            </button>
          </div>
        </div>
      </section>
      <section className='card2 rounded-3xl p-7 mt-7'>
        <h1 className='font-bold text-xl text-[#F4F5F1] capitalize'>TAKEOUT</h1>
        <p className='text-[#F4F5F1] my-7'>
          Satisfy your cravings with Takeout! From breakfast bites to global
          cuisines for lunch or dinner, savor restaurant-quality meals delivered
          to your doorstep. Flavorful moments start here.
        </p>
        <div>
          <button className='bg-[#FCAF17] rounded-[40px] font-medium text-[16px] color-[#20262C] px-5 py-[15px] my-[10px]'>
            SEARCH SETTING.{" "}
            <Image
              src={"/images/arrowDown.svg"}
              alt=''
              width={11}
              height={6}
              className='inline'
            />
          </button>
        </div>
        <div className='flex-col md:flex-row mt-7'>
          <div className='flex-1 text-[#F4F5F1]'>
            <h3>Filter</h3>
            <ul className='flex flex-row gap-4'>
              <li>Nearby</li>
              <li>Alphabetical</li>
              <li>Cash Back</li>
            </ul>
          </div>
          <div>
            <button className='bg-[#FCAF17] rounded-[40px] font-medium text-[16px] color-[#20262C] px-5 py-[15px] my-[10px]'>
              SHOP NOW{" "}
              <Image
                src={"/images/arrowDown.svg"}
                alt=''
                width={11}
                height={6}
                className='inline'
              />
            </button>
          </div>
        </div>
      </section>
      <section className='card3 rounded-3xl p-7 mt-7'>
        <h1 className='font-bold text-xl text-[#F4F5F1] capitalize'>GROCERY</h1>
        <p className='text-[#F4F5F1] my-7'>
          Explore local goodness in our Grocery Mode. Fresh produce, pantry
          essentials – all at your fingertips. Support local farms and
          businesses while curating your kitchen essentials. Nourish your home
          effortlessly.
        </p>
        <div className='flex flex-row'>
          <button className='bg-[#FCAF17] rounded-[40px] font-medium text-[16px] color-[#20262C] px-5 py-[15px] my-[10px]'>
            SEARCH SETTING.{" "}
            <Image
              src={"/images/arrowDown.svg"}
              alt=''
              width={11}
              height={6}
              className='inline'
            />
          </button>
        </div>
        <div className='flex-col md:flex-row mt-7'>
          <div className='flex-1 text-[#F4F5F1]'>
            <h3>Filter</h3>
            <ul className='flex flex-row gap-4'>
              <li>Nearby</li>
              <li>Alphabetical</li>
              <li>Cash Back</li>
            </ul>
          </div>
          <div>
            <button className='bg-[#FCAF17] rounded-[40px] font-medium text-[16px] color-[#20262C] px-5 py-[15px] my-[10px]'>
              SHOP NOW{" "}
              <Image
                src={"/images/arrowDown.svg"}
                alt=''
                width={11}
                height={6}
                className='inline'
              />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainCards;
