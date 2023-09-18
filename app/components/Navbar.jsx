import React from 'react'
import Link from 'next/link';
import Image from 'next/image'



const Navbar = () => {
  return (
    // <header>
    // <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
    //     <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
    //         <a href="https://flowbite.com" className="flex items-center">
    //             <Image src="/logo.png" alt="Flowbite Logo" width={80} height={80}/>
    //             {/* <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span> */}
    //         </a>
    //         <div className="flex items-center lg:order-2">
    //             <ul className='flex flex-wrap space-between'>
    //                 <li className='px-4'><a href="#">facebooks</a></li>
    //                 <li className='px-4'><a href="#">instagram</a></li>
    //                 <li className='px-4'><a href="#">twitter</a></li>
    //                 <li className='px-4'><a href="#">linkedin</a></li>
    //             </ul>
    //             <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
    //                 <span className="sr-only">Open main menu</span>
    //                 <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" ></path></svg>
    //             </button>
    //         </div>
    //         <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
    //             <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                   
    //                 <li>
    //                 <Link href="/" className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white">Home</Link>
    //                 </li>
                    
    //                 <li>
    //                 <Link href="/about" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">About Us</Link>
    //                 </li>
    //                 <li>
    //                      <Link href="/blogs" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Featured Article</Link>
    //                 </li>
    //                 <li>
    //                     <Link href="/" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Podcast</Link>
    //                 </li>
    //                 <li>
    //                     <Link href="/" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">News Letter</Link>
    //                 </li>
    //             </ul>
    //         </div>
    //     </div>
    // </nav>
    // </header>
    <header className='bg-slate-400'>
        <div className='container max-w-5xl mx-auto'>
        <nav className='flex py-6 items-center'>
            <div className='lg:w-1/6 md:w-1/4 flex justify-start'>
                <div className='logo w-full'>
                    <Image src="/logo.png" width={100} height={100} alt='website-logo'/>
                </div>
            </div>
            <div className='lg:w-1/6 md:w-1/4 flex lg:justify-end md:justify-end lg:order-2'>
            <ul className='flex flex-wrap justify-evenly w-full'>
                    <li>
                        <Link href="/"><i class="fa-brands fa-facebook-f"></i></Link>
                    </li>
                    <li>
                        <Link href="/"></Link>
                    </li>
                    <li>
                        <Link href="/"></Link>
                    </li>
                    <li>
                        <Link href="/"></Link>
                    </li>
                    <li>
                        <Link href="/"></Link>
                    </li>
                </ul>
            </div>
            <div className='lg:w-4/6 md:w-1/2 flex lg:justify-center md:justify-end lg:order-1'>
                <ul className='flex flex-wrap justify-evenly w-full'>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/about">About Us</Link>
                    </li>
                    <li>
                        <Link href="/blogs">Featured Article</Link>
                    </li>
                    <li>
                        <Link href="/">Podcast</Link>
                    </li>
                    <li>
                        <Link href="/">News Letter</Link>
                    </li>
                </ul>
            </div>
        </nav>
        </div>
    </header>
  )
}

export default Navbar
