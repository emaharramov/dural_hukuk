import { useRootLayout } from 'next/navigation';
import Sidebar from "../../../src/component/Sidebar";
import "../globals.css";
import ViewWebSite from '@/component/ViewWebSite';

export default function Layout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="">
        <div className="px-3 py-2 font-poppins">
          <ViewWebSite />
        </div>
        <div className="flex">
          <Sidebar />
          <main className="w-full border-[1px] border-[#E7EAED] tableheight overflow-scroll">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
