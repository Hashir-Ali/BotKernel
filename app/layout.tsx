import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header/header";
import SideBarLeft from "./components/sidebar/sidebarleft";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headerData = {
    logo: {
      src: "/images/logo.svg",
      height: 40,
      width: 141,
      alt: "Logo Alt Text",
      link: "/home",
    },
    links: [
      { path: "/profileSettings", title: "Profile Settings" },
      { path: "/myOrders", title: "My Orders" },
      { path: "/earnings", title: "Earnings" },
      { path: "/faq", title: "FAQ" },
      { path: "/partnerProgram", title: "Partner Program" },
      { path: "/contactUs", title: "Contact Us" },
      { path: "/logout", title: "Log Out" },
    ],
    user: {
      addresses: ["123 ABC ST."],
      name: "Hannah",
      balance: 79.87,
    },
  };

  return (
    <html lang='en'>
      <body className={inter.className}>
        <Header
          logo={headerData.logo}
          links={headerData.links}
          user={headerData.user}
        />
        <div className='flex'>
          <SideBarLeft user={headerData.user} links={headerData.links} />
          {children}
        </div>
      </body>
    </html>
  );
}
