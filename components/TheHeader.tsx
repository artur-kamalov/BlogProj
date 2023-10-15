import React from "react";
import Link from "next/link";
import Navigation from './Navigation';
 
type NavItemT = {
  label: string,
  href: string,
} 
type NavItemsT = Array<NavItemT>

const navItems: NavItemsT = [
  {label: 'Home', href: '/'},
  {label: 'Blog', href: '/blog'},
  {label: 'About', href: '/about'},
]

function NavList() {
  return (
    <Navigation navLinks={navItems}/>
  );
}
 
export default function TheHeader() {
  return (
    <header className="mx-auto max-w-screen-xl max-h-48 h-32 px-6 py-3 grid ">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Link href="!#" className="flex items-center hover:text-blue-500 transition-colors">
          Tailwind
        </Link>
        <div className="lg:block">
          <NavList/>
        </div>
      </div>
    </header>
  );
}