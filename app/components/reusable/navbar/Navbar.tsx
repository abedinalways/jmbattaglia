import Image from 'next/image'
import React from 'react'

export default function Navbar() {
  return (
    <div className="bg-background px-[200px] py-12" >
      <Image src="/image/logo.png" alt="Logo" height={90} width={64} className="object-contain w-fit h-full" />
      <h3>

      </h3>
    </div>
  )
}
