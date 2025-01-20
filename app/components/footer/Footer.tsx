import Link from "next/link";
import Container from "../container";
import FooterList from "./FooterList";
import { MdFacebook } from 'react-icons/md';
import { AiFillInstagram, AiFillTwitterCircle, AiFillYoutube } from 'react-icons/ai';

const Footer = () => {
    return (
        <footer className='bg-slate-700 text-slate-200 text-sm mt-16'>
            <Container>
                <div className="flex flex-col md:flex-row justify-between pb-8 pt-16">
                    <FooterList>
                        <h3 className="text-base font-bold mb-2">Shop Categories</h3>
                        <Link href="#">Phones</Link>
                        <Link href="#">Laptops</Link>
                        <Link href="#">Desktops</Link>
                        <Link href="#">Watches</Link>
                        <Link href="#">TV</Link>
                        <Link href="#">Accessories</Link>
                    </FooterList>
                    <FooterList>
                        <h3 className="text-base font-bold mb-2">Customer Services</h3>
                        <Link href="#">Contact us</Link>
                        <Link href="#">Shipping policy</Link>
                        <Link href="#">Returns & Exchanges</Link>
                        <Link href="#">FAQs</Link>
                    </FooterList>
                    <div className="w-full md:w-1/3 mb-6 md:mb-0">
                        <h3 className="text-base font-bold mb-2">About Us</h3>
                        <p className="mb-2">
                            At our electronics store, we are dedicated to providing the latest and greatest devices and accessories to our customers. With a wide selection of phones, TVs, laptops, watches, and accessories.
                        </p>
                        <p>
                            @copy; {new Date().getFullYear()} E-Shop. All rights reserved.
                        </p>
                        <FooterList>
                            <h3 className="text-base font-bold mb-2">Follow Us</h3>
                            <div className="flex gap-2">
                                <Link href="#">
                                    <MdFacebook size={24} />
                                </Link>
                                <Link href="#">
                                    <AiFillTwitterCircle size={24} />
                                </Link>
                                <Link href="#">
                                    <AiFillInstagram size={24} />
                                </Link>
                                <Link href="#">
                                    <AiFillYoutube size={24} />
                                </Link>
                            </div>
                        </FooterList>
                    </div>
                </div>
            </Container>
        </footer>
    );
}

export default Footer;
