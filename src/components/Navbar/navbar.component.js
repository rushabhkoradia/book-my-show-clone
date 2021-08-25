import React from 'react';
import { BiChevronRight } from 'react-icons/bi';
import { IoIosSearch } from 'react-icons/io';

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
            
        </>
    );
};

const NavLg = () => {
    return (
        <>
            
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
            </div>
            <div className="hidden lg:flex">
                
            </div>
         </nav>   
        </>
    );
};

export default Navbar;