"use client";

import SidebarRight from "./components/sidebar/sidebarright";
import MainCards from "./components/cards/maincards";
export default function Home() {
  return (
    <>
      <main className='flex-1 min-h-screen items-center justify-between px-5 pt-5 pb-40 max-h-[1000px] overflow-x-visible'>
        <h6>Dashboard</h6>
        <MainCards />
      </main>
      <SidebarRight />
    </>
  );
}
