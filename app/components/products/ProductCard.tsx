"use client";
import { formatPrice } from "@/utils/formatePrice";
import { truncateText } from "@/utils/truncateText";
import { Product } from "@/types";
import { Rating } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface ProductCardProps {
    data: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {

    const router = useRouter();
    const productRating = data.reviews.length
        ? data.reviews.reduce((acc, item) => {
              return acc + item.rating;
          }, 0) / data.reviews.length
        : 0;

    return (
        <div
            onClick={() => router.push(`/product/${data.id}`)}
            className="col-span-1 
            cursor-pointer 
            border-[1.2px] 
            border-slate-200 
            bg-slate-50 
            rounded-sm 
            p-2 
            transition 
            hover:scale-105 
            text-center 
            text-sm"
        >
            <div
                className="
                flex
                flex-col
                items-center
                w-full
                gap-1"
            >
                <div className="relative w-full h-40 overflow-hidden">
                    <Image
                        fill
                        src={data?.images?.[0]?.image || ""}
                        alt={data?.name || "Image"}
                        className="w-full h-full object-contain"
                    />
                </div>
                <div className="mt-4 ">
                    {truncateText(data?.name)}
                </div>
                <div>
                    <Rating value={productRating} precision={0.5} readOnly/>
                </div>
                <div>
                    {data.reviews.length} Reviews
                </div>
                <div className="font-semibold">
                    {formatPrice(data.price)}
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
