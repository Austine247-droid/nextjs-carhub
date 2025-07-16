import Link from "next/link";
import Image from "next/image";
import { images } from "@/constants/images";
import CustomButton from "./CustomButton";

const NavBar = () => {
  return (
    <header className="w-full fixed mt-4">
      <nav className="max-w-3xl z-[1000] rounded-full bg-neutral-100 shadow-2xl mx-auto flex justify-between items-center px-4 py-2 border-gray-300">
        <Link href="/" className="flex items-center justify-center">
          <Image
            src={images.carHero}
            alt="Car Hub Logo"
            width={60}
            height={60}
            className="object-contain"
          />
        </Link>
        <CustomButton
          title="Sign In"
          btnType="button"
          containerStyles="text-[#0971b3] rounded-full px-2 py-2 min-w-[130px] font-normal"
        />
      </nav>
    </header>
  );
};

export default NavBar;
