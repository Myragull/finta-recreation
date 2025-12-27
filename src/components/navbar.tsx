import React from "react"
import Image from "next/image"
import Link from "next/link"

export const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-4">
      <Link href="/">
    <Image
      draggable={false}
      height={50}
      width={50}
      alt="Logo"
      loading="lazy"
      src="/logo.svg"
    />
      </Link>
    </div>
  )
}

