"use client";

import SetColor from "@/app/components/products/setColor";
import SetQuantity from "@/app/components/products/setQuantity";
import { Rating } from "@mui/material";
import { useCallback, useState } from "react";

interface ProductDetailsProps {
    product: any;
}

export type CartProductType = {
    id: string;
    name: string;
    description: string;
    category: string;
    brand: string;
    selectedImage: SelectedImageType;
    quantity: number;
    price: number;
};

export type SelectedImageType = {
    color: string;
    colorCode: string;
    images: string;
};

const HorizontalLine = () => {
    return <hr className="w-[30%] my-2"></hr>;
};

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
    const [cartProduct, setCartProduct] = useState<CartProductType>({
        id: product.id,
        name: product.name,
        description: product.description,
        category: product.category,
        brand: product.brand,
        selectedImage: { ...product.images[0] },
        quantity: 1,
        price: product.price,
    });

    console.log(cartProduct);

    const productRating = product.reviews.reduce((acc: number, item: any) => {
        return acc + item.rating;
    }, 0) / product.reviews.length;

    const handleColorSelect = useCallback((value: SelectedImageType) => {
        setCartProduct((prev) => ({
            ...prev,
            selectedImage: value, // Update selectedImage with the new value
        }));
    }, []);

    const handleQtyIncrease = useCallback(() => {
        setCartProduct((prev) => ({
            ...prev,
            quantity: prev.quantity + 1, // Increment quantity
        }));
    }, []);

    const handleQtyDecrease = useCallback(() => {
        setCartProduct((prev) => ({
            ...prev,
            quantity: Math.max(1, prev.quantity - 1), // Decrement quantity but ensure it doesn't go below 1
        }));
    }, []);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>images</div>
            <div className="flex flex-col gap-1 text-slate-500">
                <h2 className="text-3xl font-medium text-slate-700">{product.name}</h2>
                <div className="flex items-center gap-2">
                    <Rating name="read-only" value={productRating} readOnly />
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
                <div>add to cart</div>
            </div>
        </div>
    );
};

export default ProductDetails;
