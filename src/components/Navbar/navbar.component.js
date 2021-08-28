import React from 'react';
import { BiChevronRight } from 'react-icons/bi';
import { IoIosSearch } from 'react-icons/io';
import { FaCaretDown } from 'react-icons/fa';
import { HiOutlineMenu, HiOutlineSearch } from 'react-icons/hi';

const NavSm = () => {
    return (
        <>
            <div className="text-white flex items-center justify-between">
                <div>
                    <h3 className="text-xl font-bold">It All Starts Here!</h3>
                    <span className="text-gray-100 text-xs flex items-center">
                        Mumbai <BiChevronRight />
                    </span>
                </div>
                <div className="w-7 h-7">
                    <IoIosSearch className="w-full h-full"/>
                </div>
            </div>  
        </>
    );
};

const NavMd = () => {
    return (
        <>
            <div className="w-full flex items-center bg-white gap-3 px-3 py-2 rounded">
                <IoIosSearch className="text-gray-500"/>
                <input type="search" className="w-full focus:outline-none" placeholder="Search for Movies, Events, Plays, Sports and Activities" />
            </div>
        </>
    );
};

const NavLg = () => {
    return (
        <>
            <div className="container mx-auto px-4 flex items-center justify-between">
                <div className="flex justify-evenly items-center w-1/2">
                    <div className="h-10">
                        <img src="assets/app__logo.png" alt="App Logo" className="w-full h-full" />
                    </div>

                    <div className="w-full h-9 flex items-center bg-white gap-3 px-3 py-2 rounded">
                        <HiOutlineSearch className="text-gray-500"/>
                        <input type="search" className="w-full my-3 focus:outline-none text-sm cursor-auto" placeholder="Search for Movies, Events, Plays, Sports and Activities" />
                    </div>
                </div>
               
                <div className="flex gap-5 cursor-pointer">
                    <span className="text-gray-300 text-sm flex items-center hover:text-white">
                        Mumbai <FaCaretDown className="ml-1 text-white" />
                    </span>
                    <button className="bg-red-500 text-white rounded px-4 text-xs">
                        Sign In
                    </button>
                    <div className="w-7 h-7 text-white">
                        <HiOutlineMenu className="w-full h-full" />
                    </div>
                </div>
            </div>
        </>
    );
};

const Navbar = () => {
    return (
        <>
         <nav className="bg-navColor-700 px-4 py-3">
            <div className="md:hidden">
                {/* Mobile Screen */}
                <NavSm />
            </div>
            <div className="hidden lg:hidden md:flex">
                {/* Tablet Screen */}
                <NavMd />
            </div>
            <div className="hidden lg:flex">
                {/* Desktop Screen */}
                <NavLg />
            </div>
         </nav>   
        </>
    );
};

export default Navbar;