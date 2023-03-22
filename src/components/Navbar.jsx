import React from 'react'

import {BiWorld} from 'react-icons/bi'

export default function Navbar() {
    return (
        <nav className="flex justify-center bg-[#F55A5A]">
            <h2 className="text-white py-4 flex items-center gap-1 text-xl">
            <BiWorld /> my travel journal!
            </h2>
        </nav>
    )
}
