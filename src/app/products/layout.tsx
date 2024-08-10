"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathName = usePathname();
  console.log(pathName);

  return (
    <>
      <ul className="text-blue-500 flex gap-3">
        <Link
          className={pathName === "/products/fashion" ? "text-red-400" : ""}
          prefetch={false}
          scroll={false}
          href="/products/fashion"
        >
          Fahion
        </Link>
        <Link
          className={pathName === "/products/food" ? "text-red-400" : ""}
          replace={true}
          href="/products/food"
        >
          Food
        </Link>
        <Link
          className={pathName === "/products/phone" ? "text-red-400" : ""}
          href="/products/phone"
        >
          Phone
        </Link>
      </ul>
      {children}
    </>
  );
}
