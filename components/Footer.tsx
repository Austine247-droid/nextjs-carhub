import { images } from "@/constants/images";
import Image from "next/image";
import link from "next/image";

const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100 ">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 px-6 py-10 sm:px-16">
        <div className="flex flex-col justify-start items-start gap-6">
          <Image
            src={images.logo}
            alt="logo"
            width={118}
            height={18}
            className="object-contain"
          />
          <p className="text-base font-medium text-gray-700">
            Car Hub is a leading platform for car rentals, offering a wide{" "}
            <br />
            selection of vehicles to suit every need. Our mission is to provide{" "}
            <br />
            an effortless and enjoyable car rental experience.
            <br />
            <strong> All rights reserved &copy; 2025 Car Hub</strong>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
