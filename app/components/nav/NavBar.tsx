"use client";

import Link from "next/link";
import Container from "../container";
import { Redressed as RedressedFont } from 'next/font/google';
import CartCounter from "../cart/CartCounter";

const redressed = RedressedFont({ subsets: ['latin'], weight: ['400'] }); 
const NavBar = () => {
    return (
       
        <div className="
            sticky
            top-0
            w-full
            bg-slate-200
            z-30
            shadow-sm
        ">
            <div className="py-4 border-b-[1px]">
                <Container>
                    <div className="
                        flex
                        items-center
                        justify-between
                        gap-3
                        md:gap-0
                    ">
                        <Link href="/" className={`${redressed.className} font-bold text-2xl`}>E-shop</Link>
                        <div className="hidden md:block">
                            <span className="text-sm text-slate-600">Electronics and accessories</span>
                        </div>
                        <div className="flex items-center gap-8 md:gap-12">
                            <CartCounter />
                            <Link href="/cart" className="text-sm font-semibold text-slate-700">
                                Checkout
                            </Link>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
}
export default NavBar;
