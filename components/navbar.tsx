/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

const navigation = [
    {
        name: '+1 (404) 988-4505', href: 'tel:+14049884505',
        icon: <svg xmlns="http://www.w3.org/2000/svg"
         fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          className="w-4 h-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
        </svg>

    },
    {
        name: 'Mike@t1factory.com', href: 'mailto:Mike@t1factory.com',
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
         stroke="currentColor" className="w-5 h-5">
            <path stroke-linecap="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" />
        </svg>

    },
]

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <div className="bg-white">
            <header className="fixed inset-x-0 top-0 z-50 bg-white">
                <div className="mx-auto max-w-7xl">
                    <nav className="flex items-center justify-between p-3 lg:px-8" aria-label="Global">
                        <div className="flex lg:flex-1">
                            <Link href="/" className="-m-1.5 p-1.5 flex items-center space-x-3">
                                <img
                                    className="h-8 w-auto"
                                    src="/logo.jpeg"
                                    alt=""
                                />
                                <span className='font-bold text-lg md:text-3xl text-blue-600'>Factory</span>
                            </Link>
                        </div>
                        <div className="flex lg:hidden">
                            <button
                                type="button"
                                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                                onClick={() => setMobileMenuOpen(true)}
                            >
                                <span className="sr-only">Open main menu</span>
                                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>
                        <div className="hidden lg:flex lg:gap-x-12">
                            {navigation.map((item) => (
                                <a key={item.name} href={item.href} className="text-sm leading-6 text-blue-600 flex items-center">
                                  {item.icon}
                                    <span className='mx-2'>{item.name}</span>
                                </a>
                            ))}
                        </div>
                        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                            <a href="https://calendly.com/techethio/30min" target="_blank" className="text-sm font-semibold leading-6 text-gray-900">
                               Book a <span className="text-blue-600 pr-1">Meeting</span> with us
                                <span aria-hidden="true" className='pl-1'>&rarr;</span>
                            </a>
                        </div>
                    </nav>
                </div>
                <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                    <div className="fixed inset-0 z-50" />
                    <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                        <Link href="/" className="-m-1.5 p-1.5 flex items-center space-x-3">
                                <img
                                    className="h-8 w-auto"
                                    src="/logo.jpeg"
                                    alt=""
                                />
                                <span className='font-bold text-lg md:text-3xl text-blue-600'>Factory</span>
                            </Link>
                            <button
                                type="button"
                                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    {navigation.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-green-600 hover:bg-gray-50"
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                                <div className="py-6">
                                    <a href="https://calendly.com/techethio/30min"
                                        target="_blank"
                                        className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                       Book a meeting with us
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Dialog.Panel>
                </Dialog>
            </header>
        </div>
    )
}
