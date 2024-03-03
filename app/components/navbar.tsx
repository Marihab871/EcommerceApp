'use client'
import Link from "next/link";
import ShoppingBag from "./shoppingBag";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { Menu, Transition } from '@headlessui/react'
import { Fragment } from "react";
export function Navbar() {
  const pathname = usePathname()
  const link = [
    { name: 'Home', href: '/', current: true },
    { name: 'Men', href: '/Men', current: false },
    { name: 'Women', href: '/Women', current: false },
    { name: 'Teens', href: '/Teens', current: false },
  ]
  return (
    <div className="border-b border-gray w-full flex flex-row max-w-7xl mx-auto sm:justify-center mb-8">
      <nav className="w-full md:max-w-8xl flex justify-between items-center">
        <div className="text-4xl font-semibold px-8 lg:px-32 py-3">
          <Link href='/'><span className="text-primary">CloShor</span></Link>
        </div>
        <nav className="hidden gap-12 md:flex 2xl:ml-16">
          {link.map((item, idx) => {
            return (
              <div key={idx} className="font-semibold style-none hover:text-primary">
                          <Link href={item.href} className={clsx(pathname == item.href && 'bg-primary text-white font-medium border-b-primary', "transition duration-300 border-b-2 hover:border-primary border-white text-lg text-center block py-2 px-5 text-gray-900 rounded  dark:text-gray-400  dark:hover:bg-gray-700 dark:hover:text-white")}>{item.name}</Link>
              </div>
            );
          })}
        </nav>
        
        <div className="flex gap-4  px-0 ">          
          
          <div className="flex gap-4 justify-between items-baseline flex-row-reverse">
            <nav className="md:hidden pr-4 z-10">
             <Menu>
                  <Menu.Button  className="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-hamburger">
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                  </Menu.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 mt-2 w-screen origin-top-right divide-y divide-gray-100 rounded-md bg-white mx-auto shadow-lg ring-1 ring-black/5 focus:outline-none">
                    {link.map((item, idx) => {
                      return (
                        <Menu.Item key={idx}>
                          <Link href={item.href} className={clsx(pathname == item.href && ' bg-primary text-white font-medium', "transition duration-300 text-lg text-center block py-2 px-3 text-gray-900 rounded dark:text-gray-400  dark:hover:bg-gray-700 hover:text-primary  dark:hover:text-white")}>{item.name}</Link>
                        </Menu.Item>
                      );
                    })}
                  </Menu.Items>
                </Transition>
             </Menu>
            </nav>
            <ShoppingBag />
          </div>

        </div>
     </nav>
    </div>
  );
}
