import Sidebar from "../../../src/component/Sidebar";
import "../globals.css";

export default function Layout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <div className="px-3 py-2 font-poppins">top</div>
        <div className="flex">
          <Sidebar />
          <main className="w-full border-[1px] border-[#E7EAED]">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
