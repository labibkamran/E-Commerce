"use client";

import { useCart } from "@/app/components/cart/CartContext";
import SetColor from "@/app/components/products/setColor";
import SetQuantity from "@/app/components/products/setQuantity";
import { CartProduct, Product, ProductImage } from "@/types";
import { Rating } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

interface ProductDetailsProps {
    product: Product;
}

const HorizontalLine = () => {
    return <hr className="w-[30%] my-2"></hr>;
};

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
    const { addToCart, isInCart } = useCart();
    const [cartProduct, setCartProduct] = useState<CartProduct>({
        id: product.id,
        name: product.name,
        description: product.description,
        category: product.category,
        brand: product.brand,
        selectedImage: { ...product.images[0] },
        quantity: 1,
        price: product.price,
    });
    const [isAddedToCart, setIsAddedToCart] = useState(false);

    const productRating = product.reviews.length
        ? product.reviews.reduce((acc, item) => {
              return acc + item.rating;
          }, 0) / product.reviews.length
        : 0;

    const handleColorSelect = (value: ProductImage) => {
        setCartProduct((prev) => ({
            ...prev,
            selectedImage: value,
        }));
    };

    const handleQtyIncrease = () => {
        setCartProduct((prev) => ({
            ...prev,
            quantity: prev.quantity + 1,
        }));
    };

    const handleQtyDecrease = () => {
        setCartProduct((prev) => ({
            ...prev,
            quantity: Math.max(1, prev.quantity - 1),
        }));
    };

    const handleAddToCart = () => {
        addToCart(cartProduct);
        setIsAddedToCart(true);
    };


    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex flex-col gap-4">
                <div className="relative aspect-square overflow-hidden rounded-2xl bg-slate-100">
                    <Image
                        src={cartProduct.selectedImage.image}
                        alt={product.name}
                        fill
                        className="object-contain p-6"
                    />
                </div>
                <div className="grid grid-cols-3 gap-3">
                    {product.images.map((imageItem) => (
                        <button
                            key={imageItem.color}
                            type="button"
                            onClick={() => handleColorSelect(imageItem)}
                            className={`relative aspect-square overflow-hidden rounded-xl border bg-white ${
                                cartProduct.selectedImage.color === imageItem.color
                                    ? "border-slate-900"
                                    : "border-slate-200"
                            }`}
                        >
                            <Image
                                src={imageItem.image}
                                alt={`${product.name} ${imageItem.color}`}
                                fill
                                className="object-contain p-3"
                            />
                        </button>
                    ))}
                </div>
            </div>
            <div className="flex flex-col gap-1 text-slate-500">
                <h2 className="text-3xl font-medium text-slate-700">{product.name}</h2>
                <div className="flex items-center gap-2">
                    <Rating name="read-only" value={productRating} precision={0.5} readOnly />
                    <div>{product.reviews.length} Reviews</div>
                </div>
                <HorizontalLine />
                <div className="text-lg mt-4 text-justify">{product.description}</div>
                <HorizontalLine />
                <div>
                    <span className="font-semibold">CATEGORY:</span> {product.category}
                </div>
                
                <div>
                    <span className="font-semibold">BRAND:</span> {product.brand}
                </div>
                <div
                    className={`${
                        product.inStock ? "text-teal-400" : "text-rose-400"
                    }`}
                >
                    {product.inStock ? "In Stock" : "Out of Stock"}
                </div>
                <HorizontalLine />
                <SetColor
                    cartProduct={cartProduct}
                    images={product.images}
                    handleColorSelect={handleColorSelect}
                />
                <HorizontalLine />
                <SetQuantity
                    cartProduct={cartProduct}
                    handleQtyIncrease={handleQtyIncrease}
                    handleQtyDecrease={handleQtyDecrease}
                />
                <HorizontalLine />
                <button
                    type="button"
                    onClick={handleAddToCart}
                    disabled={!product.inStock}
                    className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:bg-slate-300"
                >
                    {isAddedToCart || isInCart(product.id) ? "Update Cart" : "Add to Cart"}
                </button>
            </div>
        </div>
    );
};

export default ProductDetails;
