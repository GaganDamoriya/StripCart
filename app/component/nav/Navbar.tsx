import Link from "next/link";
import Container from "../Container";
import { Black_Ops_One } from "next/font/google";

const blackOps = Black_Ops_One({ subsets: ["latin"], weight: ["400"] });

const Navbar = () => {
  return (
    <div
      className="
  sticky
  top-0
  w-full
  bg-slate-100
  z-30
  shadow-sm
  "
    >
      <div className="py-3 border-b-[1px]">
        <Container>
          <div className=" flex items-center justify-between gap-3 md-gap-0">
            <Link
              href="/"
              className={`${blackOps.className} text-2xl font-bold  text-orange-600`}
            >
              Stripcart.
            </Link>
            <div className="hidden md:block">Search</div>
            <div className="flex items-center gap-8">
              <div>cartCount</div>
              <div>Account</div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
