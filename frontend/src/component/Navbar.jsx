import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/assets/dural-hukuk-logo.png";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  return (
    <nav className="flex items-stretch justify-between border-b-[1px] border-[#274463]">
      <Link href="/" className="cursor-pointer">
        <Image
          src={Logo}
          alt="Logo"
          unoptimized
          className="py-2 px-2 md:px-0 w-[150px]  md:h-[70px] lg:w-full"
        />
      </Link>
      <MobileNavbar />
      <div className="hidden gap-x-2 lg:flex">
        {/* Neler Yapıyoruz Menüsü */}
        <div className="h-full flex items-center text-white transition-all hover:text-[#10AFEC] font-poppins-semibold relative group">
          <Link href="#" className="px-2">
            Neler Yapıyoruz?
          </Link>
          <div className="absolute invisible top-full bg-black w-[300px] left-[-17px] px-[25px] py-1 flex flex-col font-poppins transition-all opacity-0 group-hover:opacity-100 group-hover:visible">
            <Link
              href="/kurumsal?title=Neler Yapıyoruz?"
              className="text-white hover:text-[#10AFEC] transition-all py-2"
            >
              Kurumsal Müvekkiller için Neler Yapıyoruz?
            </Link>
            <Link
              href="/bireysel?title=Neler Yapıyoruz?"
              className="text-white hover:text-[#10AFEC] transition-all py-2"
            >
              Bireysel Müvekkiller için Neler Yapıyoruz?
            </Link>
          </div>
        </div>

        {/* Ekibimiz Menüsü */}
          <Link href="/ekibimiz?title=Ekibimiz" className="px-2">
        <div className="h-full flex items-center text-white transition-all hover:text-[#10AFEC] font-poppins-semibold">
            Ekibimiz
        </div>
          </Link>

        {/* Makaleler ve Haberler Menüsü */}
          <Link href="/blog?title=Makaleler ve Haberler" className="px-2">
        <div className="h-full flex items-center text-white transition-all hover:text-[#10AFEC] font-poppins-semibold">
            Makaleler ve Haberler
        </div>
          </Link>

        {/* Sosyal Sorumluluk Menüsü */}
        <Link
          href="/sosyal-sorumluluk?title=Sosyal Sorumluluk"
          className="px-2"
        >
          <div className="h-full flex items-center text-white transition-all hover:text-[#10AFEC] font-poppins-semibold">
            Sosyal Sorumluluk
          </div>
        </Link>

        {/* İletişim Menüsü */}
        <Link href="/iletisim?title=İletişim" className="px-2">
          <div className="h-full flex items-center text-white transition-all hover:text-[#10AFEC] font-poppins-semibold">
            İletişim
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
