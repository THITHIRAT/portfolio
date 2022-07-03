import { Disclosure } from "@headlessui/react"
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import Image from "next/image"
import React from "react"

const navigation = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#about' },
  { name: 'Work', href: '#work' },
  { name: 'Contact', href: '#contact' },
]

const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(' ')
}

const TopNavigation = () => {
  const [currentTab, setCurrentTab] = React.useState("Home");

  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="container mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-center sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <div className="flex lg:hidden">
                    <Image
                      height={48}
                      width='100%'
                      className="h-12 w-auto"
                      src="/name.svg"
                      alt="Thithirat's Navbar"
                    />
                  </div>
                  <div className="hidden lg:flex">
                    <Image
                      height={48}
                      width='100%'
                      className="h-12 w-auto"
                      src="/name.svg"
                      alt="Thithirat's Navbar"
                    />
                  </div>
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.name === currentTab ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'px-4 py-2 rounded-md text-lg font-medium'
                        )}
                        aria-current={item.name === currentTab ? 'page' : undefined}
                        onClick={() => setCurrentTab(item.name)}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-3 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.name === currentTab ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-2 py-2 rounded-md text-lg font-medium'
                  )}
                  aria-current={item.name === currentTab ? 'page' : undefined}
                  onClick={() => setCurrentTab(item.name)}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default TopNavigation