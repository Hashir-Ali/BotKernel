import React from "react";

const SidebarRight = () => {
  return (
    <aside className='w-1/5 h-5/6 p-[30px] flex-col justify-between hidden md:block'>
      <section className=''>
        <h3 className='text-[#FCAF17] font-bold text-base self-stretch'>
          Current Orders
        </h3>
        <div className='my-[30px] flex flex-row'>
          <div className='mt-6 pr-3'>&gt;</div>
          <div className='flex-1'>
            <p className='font-normal text-xs uppercase pb-3'>#[Order Num]</p>
            <p className='font-normal text-xs uppercase pb-3'>[Store name]</p>
            <p className='font-normal text-xs uppercase pb-3'>[status]</p>
          </div>
        </div>

        <div className='my-[30px] flex flex-row'>
          <div className='mt-6 pr-3'>&gt;</div>
          <div className='flex-1'>
            <p className='font-normal text-xs uppercase pb-3'>#[Order Num]</p>
            <p className='font-normal text-xs uppercase pb-3'>[Store name]</p>
            <p className='font-normal text-xs uppercase pb-3'>[status]</p>
          </div>
        </div>

        <div className='my-[30px] flex flex-row'>
          <div className='mt-6 pr-3'>&gt;</div>
          <div className='flex-1'>
            <p className='font-normal text-xs uppercase pb-3'>#[Order Num]</p>
            <p className='font-normal text-xs uppercase pb-3'>[Store name]</p>
            <p className='font-normal text-xs uppercase pb-3'>[status]</p>
          </div>
        </div>

        <div className='my-[30px] flex flex-row'>
          <div className='mt-6 pr-3'>&gt;</div>
          <div className='flex-1'>
            <p className='font-normal text-xs uppercase pb-3'>#[Order Num]</p>
            <p className='font-normal text-xs uppercase pb-3'>[Store name]</p>
            <p className='font-normal text-xs uppercase pb-3'>[status]</p>
          </div>
        </div>

        <div className='my-[30px] flex flex-row'>
          <div className='mt-6 pr-3'>&gt;</div>
          <div className='flex-1'>
            <p className='font-normal text-xs uppercase pb-3'>#[Order Num]</p>
            <p className='font-normal text-xs uppercase pb-3'>[Store name]</p>
            <p className='font-normal text-xs uppercase pb-3'>[status]</p>
          </div>
        </div>
      </section>
    </aside>
  );
};

export default SidebarRight;
