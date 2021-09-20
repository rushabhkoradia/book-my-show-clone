import React from 'react';
import { BiChevronRight, BiShareAlt } from 'react-icons/bi';
import { IoIosSearch } from 'react-icons/io';
import { FaCaretDown } from 'react-icons/fa';
import { HiOutlineMenu, HiOutlineSearch } from 'react-icons/hi';
import { BsChevronLeft } from 'react-icons/bs';

const NavSm = () => {
    return (
        <>
            <div className="text-white flex items-center justify-between">
                <div>
                    <h3 className="text-xl font-bold">It All Starts Here!</h3>
                </div>
                <div className="w-7 h-7">
                    <BiShareAlt className="w-full h-full"/>
                </div>
            </div>  
        </>
    );
};

const NavLg = () => {
    return (
        <>
            <div className="container flex items-center justify-between gap-5">
                <div className="flex ml-14 justify-evenly items-center w-1/2">
                    <div className="h-10">
                        <img src="https://in.bmscdn.com/webin/common/icons/logo.svg" alt="App Logo" className="w-full h-full pr-3" />
                    </div>

                    <div className="w-full h-8 flex items-center bg-white gap-3 px-3 py-2 rounded">
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

const MovieNavbar = () => {
    return (
        <>
         <nav className="absolute inset-x-0 z-50 bg-opacity-30 backdrop-filter backdrop-blur-lg lg:relative bg-navColor-700 px-4 py-3">
            <div className="md:hidden">
                {/* Mobile Screen */}
                <NavSm />
            </div>
            <div className="hidden lg:hidden md:block">
                {/* Tablet Screen */}
                <NavSm />
            </div>
            <div className="hidden lg:flex">
                {/* Desktop Screen */}
                <NavLg />
            </div>
         </nav>   
        </>
    );
};

export default MovieNavbar;