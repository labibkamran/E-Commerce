import Container from "@/app/components/container";
import { product } from "@/utils/product";
import ProductDetails from "./productDetails"; // Update the path to where ProductDetails is located.

interface IParams {
    productId?: string;
}

const Product = ({ params }: { params: IParams }) => {
    console.log("params", params);

    return (
        <div className="p-8">
            <Container>
                <ProductDetails product={product}/> {/* Use the ProductDetails component here */}
            </Container>
        </div>
    );
};
export default Product;
