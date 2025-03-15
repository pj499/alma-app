import React from "react";
import Link from "next/link";

const Header = () => {
    return (
        <div className="absolute w-full bg-[#D9D9A0] flex items-center justify-center py-14 px-6 h-80 overflow-hidden top-0 ">

            <div className="absolute left-[-50] top-[-30] w-48 h-48 bg-[#BFCF8B] rounded-full shadow-lg"></div>
            <div className="absolute left-10 top-10 w-44 h-44 bg-[#A9B87D] rounded-full shadow-lg"></div>
            <div className="absolute left-8 top-30 w-40 h-40 bg-[#8DA165] rounded-full shadow-lg"></div>
            <div className="absolute left-[-20] top-50 w-36 h-36 bg-[#748954] rounded-full shadow-lg"></div>


            <div className="relative z-10 text-left mb-8">
                <Link href='/'>
                    <img
                        src="https://app.ashbyhq.com/api/images/org-theme-wordmark/7d6b6dba-6b28-4a48-b58b-7178236b4ba7/5d8e748d-c0cc-4a0e-b525-94fa977689a4/59d6773a-8a4a-4d31-806d-047f8cd7885c.png"
                        alt="Logo"
                        className="w-30 mb-10 mr-50"/>
                </Link>

                <h1 className="text-5xl font-extrabold text-black ">
                    Get An Assessment <br/> Of Your Immigration Case
                </h1>
            </div>
        </div>
    );
};

export default Header;
