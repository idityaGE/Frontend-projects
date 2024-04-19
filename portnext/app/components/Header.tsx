"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import MenuSvg from "./svg/MenuSvg";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { usePathname } from "next/navigation";



const Navbar = () => {
    const pathname = usePathname();
    // { console.log(pathname) }
    const [openNavigation, setOpenNavigation] = useState(false);
    const toggleNavigation = () => {
        if (openNavigation) {
            setOpenNavigation(false);
            enablePageScroll();
        } else {
            setOpenNavigation(true);
            disablePageScroll();
        }
    }

    const hadleClick = () => {
        if (!openNavigation) return;
        enablePageScroll();
        setOpenNavigation(false);
    }

    const navigation = [
        {
            name: "About",
            url: "/about",
        },
        {
            name: "</>projects",
            url: "/projects",
        },
    ];
    return (
        <div className="w-[90vw] lg:w-[80vw] xl:w-[70vw] h-[60px] fixed top-2 bg-white bg-opacity-30 backdrop-blur-sm z-50 px-2 lg:px-8 xl:px-10 rounded-lg">
            <div className="flex justify-between items-center w-full h-full px-2 lg:px-7 xl:px-2">
                <div>
                    <Link href='/' className="font-bold text-3xl opacity-80">
                        &#119990;&#119993;&#119998;&#119998;&#46;
                    </Link>
                </div>
                <div className="flex gap-8">
                    <ul className="space-x-6 hidden md:flex lg:flex xl:flex">
                        {navigation.map((nav) => (
                            <li key={nav.name} className={`cursor-pointer texl-3xl font-bold uppercase ${nav.url === pathname ? 'text-black' : 'text-black opacity-50'}`}>
                                <Link href={nav.url}>{nav.name}</Link>
                            </li>
                        ))}
                    </ul>
                    <Sheet>
                        <SheetTrigger className="lg:hidden md:hidden xl:hidden w-10 h-10" onClick={hadleClick}>
                            <MenuSvg openNavigation={openNavigation} />
                        </SheetTrigger>
                        <SheetContent>
                            <SheetHeader>
                                <SheetTitle className="text-3xl uppercase font-bold" >
                                    Menu
                                </SheetTitle>
                            </SheetHeader>
                            <SheetDescription>
                                <ul className="space-y-4 pt-20">
                                    {navigation.map((nav) => (
                                        <li key={nav.name} className="cursor-pointer text-4xl pt-5 text-right underline decoration-slate-400 decoration-4 underline-offset-4 hover:decoration-slate-500 duration-300 hover:text-black">
                                            <Link href={nav.url}>{nav.name}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </SheetDescription>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </div>
    );
};

export default Navbar;

