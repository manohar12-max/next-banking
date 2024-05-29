import MobileNavbar from "@/components/MobileNavbar";
import Sidebar from "@/components/Sidebar";
import type { Metadata } from "next";
import Image from "next/image";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = { firstName: "Manohar", lastName: "Dhumal" };
  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar user={loggedIn} />
      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Image src="/icons/logo.svg" width={30} height={30} alt="menu icon" />

          <div className="">
            <MobileNavbar user={loggedIn} />
          </div>
          {/* children is  page tsx */}
        </div>
        {children}
      </div>
    </main>
  );
}
