import Link from "next/link";
import Image from "next/image";
import { images } from "@/constants/images";
import CustomButton from "./CustomButton";

const NavBar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center px-6 py-4 sm:px-16">
        <Link href="/" className="flex items-center justify-center">
          <Image
            src={images.logo}
            alt="Car Hub Logo"
            width={118}
            height={20}
            className="object-contain"
          />
        </Link>
        <CustomButton
          title="Sign In"
          btnType="button"
          containerStyles="text-primary-blue bg-white rounded-full min-w-[130px] font-normal"
        />
      </nav>
    </header>
  );
};

export default NavBar;
