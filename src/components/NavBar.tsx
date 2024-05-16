"use client"

import Link from "next/link";
import {usePathname} from "next/navigation"

const links = [
  {id: '1', href:'/careers', label:'Careers'},
  {id: '2', href:'/students', label:'Students'},
  {id: '3', href:'/grades', label:'Grades'},
]

const NavBar = () => {
  const pathName = usePathname();
  console.log(pathName);
  return(
    <nav className="mx-auto max-w-screen px-6 py-3 pb-6 pt-6 shadow-lg bg-black">
      <div className="flex items-center justify-between text-white">
        <span className="text-2xl"><a href="/">Students Control</a></span>
        <ul className="flex flex-row gap-6">
          {
            links.map((link)=>(<li key={link.id} className={`${pathName===link.href? "text-blue-500": "text-white"} `}><Link href={link.href}>{link.label}</Link></li>))
          }
          <li><a className="text-white bg-red-700 hover:bg-red-800 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" href="#">Log Out</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar;