import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {

  const links = [
    { title: "Founders", href: "/founders" },
    { title: "Guide", href: "/guide" },
    { title: "Pricing", href: "/pricing" },
    { title: "Log In", href: "/login" },
  ];
  
  return (
    <div className="flex w-full items-center justify-between px-4 ">
      <Link href="/">
        <Image
          draggable={false}
          height={100}
          width={100}
          alt="Logo"
          loading="lazy"
          src="/logo.svg"
        />
      </Link>

      <div className="flex items-center justify-between gap-8 ">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="text-neutral-800 font-medium hover:text-neutral-500 transition-duration-200"
          >
            {link.title}
          </Link>
        ))}
        <button className="bg-[#2679f3] px-4 py-2 rounded-lg text-white font-medium shadow-lg text-shadow-medium tracking-tight hover:bg-[#1a5ed8] transition duration-200">
          Get started
        </button>
      </div>
    </div>
  );
};
