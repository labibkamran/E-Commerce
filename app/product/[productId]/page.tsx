import Container from "@/app/components/container";
import { getProductById } from "@/utils/products";
import ProductDetails from "./productDetails"; // Update the path to where ProductDetails is located.
import { notFound } from "next/navigation";

interface IParams {
    productId: string;
}

const Product = async ({ params }: { params: Promise<IParams> }) => {
    const { productId } = await params;
    const resolvedProduct = getProductById(productId);

    if (!resolvedProduct) {
        notFound();
    }

    return (
        <div className="p-8">
            <Container>
                <ProductDetails product={resolvedProduct}/> {/* Use the ProductDetails component here */}
            </Container>
        </div>
    );
};
export default Product;
