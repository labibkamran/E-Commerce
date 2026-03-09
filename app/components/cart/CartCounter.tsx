"use client";

import { useCart } from "./CartContext";
import Link from "next/link";

const CartCounter = () => {
  const { cartTotalQty } = useCart();

  return (
    <Link href="/cart" className="relative text-sm font-semibold">
      Cart
      <span className="ml-2 inline-flex h-6 min-w-6 items-center justify-center rounded-full bg-slate-900 px-2 text-xs text-white">
        {cartTotalQty}
      </span>
    </Link>
  );
};

export default CartCounter;
