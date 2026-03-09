"use client";

import Container from "../components/container";
import SetQuantity from "../components/products/setQuantity";
import { useCart } from "../components/cart/CartContext";
import { formatPrice } from "@/utils/formatePrice";
import Image from "next/image";
import Link from "next/link";

const Cart = () => {
    const {
        cartItems,
        cartTotalAmount,
        increaseQty,
        decreaseQty,
        removeFromCart,
        clearCart,
    } = useCart();

    if (cartItems.length === 0) {
        return (
            <Container>
                <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 text-center">
                    <h1 className="text-3xl font-semibold text-slate-800">Your cart is empty</h1>
                    <p className="max-w-md text-slate-500">
                        Add a few products to start building your order.
                    </p>
                    <Link
                        href="/"
                        className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white"
                    >
                        Continue shopping
                    </Link>
                </div>
            </Container>
        );
    }

    return (
        <Container>
            <div className="py-10">
                <div className="mb-8 flex items-center justify-between gap-4">
                    <div>
                        <h1 className="text-3xl font-semibold text-slate-800">Shopping Cart</h1>
                        <p className="text-sm text-slate-500">
                            {cartItems.length} item{cartItems.length > 1 ? "s" : ""} in your cart
                        </p>
                    </div>
                    <button
                        type="button"
                        onClick={clearCart}
                        className="text-sm font-semibold text-rose-500"
                    >
                        Clear cart
                    </button>
                </div>

                <div className="grid gap-8 lg:grid-cols-[1.7fr_0.9fr]">
                    <div className="space-y-4">
                        {cartItems.map((item) => (
                            <div
                                key={item.id}
                                className="grid gap-4 rounded-2xl border border-slate-200 bg-white p-4 md:grid-cols-[120px_1fr_auto]"
                            >
                                <div className="relative aspect-square overflow-hidden rounded-xl bg-slate-100">
                                    <Image
                                        src={item.selectedImage.image}
                                        alt={item.name}
                                        fill
                                        className="object-contain p-3"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <h2 className="font-semibold text-slate-800">{item.name}</h2>
                                    <p className="text-sm text-slate-500">
                                        {item.brand} / {item.category} / {item.selectedImage.color}
                                    </p>
                                    <p className="font-semibold text-slate-800">
                                        {formatPrice(item.price)}
                                    </p>
                                    <button
                                        type="button"
                                        onClick={() => removeFromCart(item.id)}
                                        className="text-sm font-semibold text-rose-500"
                                    >
                                        Remove
                                    </button>
                                </div>
                                <div className="flex flex-col items-start justify-between gap-4">
                                    <SetQuantity
                                        cartCounter
                                        cartProduct={item}
                                        handleQtyIncrease={() => increaseQty(item.id)}
                                        handleQtyDecrease={() => decreaseQty(item.id)}
                                    />
                                    <div className="text-right font-semibold text-slate-800">
                                        {formatPrice(item.price * item.quantity)}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                        <h2 className="text-xl font-semibold text-slate-800">Order Summary</h2>
                        <div className="mt-6 flex items-center justify-between text-sm text-slate-500">
                            <span>Subtotal</span>
                            <span>{formatPrice(cartTotalAmount)}</span>
                        </div>
                        <div className="mt-3 flex items-center justify-between text-sm text-slate-500">
                            <span>Shipping</span>
                            <span>Calculated at checkout</span>
                        </div>
                        <div className="mt-6 border-t border-slate-200 pt-6">
                            <div className="flex items-center justify-between font-semibold text-slate-800">
                                <span>Total</span>
                                <span>{formatPrice(cartTotalAmount)}</span>
                            </div>
                        </div>
                        <button
                            type="button"
                            className="mt-6 w-full rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white"
                        >
                            Proceed to Checkout
                        </button>
                    </div>
                </div>
            </div>
        </Container>
    );
}
 
export default Cart;
