import { images } from '@/constants/images'
import Image from 'next/image'
import link from 'next/image'
import { footerLinks } from '@/constants'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100 ">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-10 px-6 py-10 sm:px-16">
        {/* Logo and text content */}
        <div className="flex flex-col justify-start items-start gap-6">
          <Image
            src={images.carHero}
            alt="logo"
            width={80}
            height={40}
            className="object-contain"
          />
          <p className="text-base font-medium text-gray-700 text-start">
            Car Hub is a leading platform for car rentals, offering a wide <br />
            selection of vehicles to suit every need. Our mission is to provide <br />
            an effortless and enjoyable car rental experience.
            <br />
            <strong>All rights reserved &copy; {new Date().toLocaleString()} CarZone</strong>
          </p>
        </div>

        {/* Footer Links */}
        <div className="footer__links">
          {footerLinks.map(link => (
            <div key={link.title} className="footer__link">
              <h3 className="font-bold">{link.title}</h3>
              <ul className="flex flex-col gap-2">
                {link.links.map(item => (
                  <Link
                    key={item.title}
                    href={item.url}
                    className="text-gray-500 text-sm hover:text-[#0971b3]"
                  >
                    {item.title}
                  </Link>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 px-6 py-10 sm:px-16">
        <p>@{new Date().getFullYear()} CarZone. All Rights Reserved</p>

        <div className="footer__copyrights-link">
          <Link href="/" className="text-gray-500 hover:text-[#0971b3]">
            Privacy Policy
          </Link>
          <Link href="/" className="text-gray-500 hover:text-[#0971b3]">
            Terms of use
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
