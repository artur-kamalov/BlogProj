'use client'

import React from 'react'
import Link from 'next/link'
import {usePathname} from 'next/navigation'
import { signOut, useSession } from 'next-auth/react'

type NavLink = {
    label: string,
    href: string,
}
type Props = {
    navLinks: NavLink[]
}

const Navigation = ({ navLinks }: Props) => {
    const pathname = usePathname()
    const session = useSession()

    return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
        {navLinks.map((link) => {
            const isActive = pathname === link.href
            return(
                <Link 
                    className={isActive ? ("bg-slate-300 p-4 flex items-center hover:text-blue-500 transition-colors") 
                                        : ("flex items-center hover:text-blue-500 transition-colors")}
                    href = {link.href} 
                    key={link.label}>
                    {link.label}
                </Link>
            )
        })}
        {session?.data && <Link href={'/profile'}> Profile </Link>}
            {session?.data ? 
            <Link href={'/profile'} 
                onClick={() => signOut({
                    callbackUrl: '/'
                })}> 
                Sign out 
            </Link> 
            : 
            <Link href={'/api/auth/signin'}>
                Sign in 
            </Link>}
    </ul>
  )
}

export default Navigation