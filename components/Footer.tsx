import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (
        <div className='bg-gray-300'>
            <div className="mx-auto max-w-7xl p-3 md:p-10">
                <div className="md:flex md:justify-evenly md:space-x-10">
                    <Link href="https://ellaei.com">Copyright © 2023 Tech 1 Factory - All Rights Reserved. </Link>
                   </div>
            </div>
        </div>
    )
}
