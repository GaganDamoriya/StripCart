import Link from "next/link";
import Footerlist from "./footerlist";
import Container from "../Container";
import { MdFacebook } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { Black_Ops_One } from "next/font/google";

const blackOps = Black_Ops_One({ subsets: ["latin"], weight: ["400"] });

const Footer = () => {
  return (
    <div className=" bg-slate-700 text-slate-200 text-sm mt-16">
      <Container>
        <div
          className={`${blackOps.className} text-2xl font-bold py-4  text-orange-600`}
        >
          StripCart.
        </div>
        <div className=" flex flex-col md:flex-row justify-between pt-2">
          <Footerlist>
            <h3 className="text-base font-bold mb-2">Shop Catergories</h3>
            <Link href="/"> electronics</Link>
            <Link href="/">jewelery </Link>
            <Link href="/"> men's clothing </Link>
            <Link href="/"> women's clothing</Link>
          </Footerlist>
          <Footerlist>
            <h3 className="text-base font-bold mb-2">Customer Service</h3>
            <Link href="/"> Contact Us</Link>
            <Link href="/">Shipping policy</Link>
            <Link href="/"> Return & Exchanges </Link>
            <Link href="/"> Watches</Link>
            <Link href="/"> FAQs</Link>
          </Footerlist>
          <Footerlist>
            <h3 className="text-base font-bold mb-2">About Us</h3>
            <p className="mb-2">
              Online Shopping has always been a fun and exciting task for most
              and more so when the shopping mall is none other than your own
              house. We have all had days when we have planned trips to the
              clothing store in advance, dreaming about what we would buy once
              we get there. Now we wouldnt think twice before indulging in some
              online shopping.
            </p>
            <p>© {new Date().getFullYear()} StripCart.All rights reserved</p>
          </Footerlist>
          <Footerlist>
            <h3 className="text-base font-bold mb-2">Follow Us</h3>
            <div className="flex gap-2">
              <Link href="/" className="size={24}">
                <FaInstagram />
              </Link>
              <Link href="/" className="size={24}">
                <MdFacebook />
              </Link>
              <Link href="/" className="size={24}">
                <FaTwitter />
              </Link>
              <Link href="/" className="size={24}">
                <FaYoutube />
              </Link>
            </div>
          </Footerlist>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
