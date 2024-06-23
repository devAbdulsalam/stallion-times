import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaXTwitter,
} from "react-icons/fa6";
import NewsLetterForm from "./news-letter-form";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full bottom-0 px-5 xl:px-24 lg:px-8 overflow-hidden">
      <div className="bottom-0 dark:bg-dark_background relative z-5 bg-white pt-16 md:pt-20 lg:pt-24">
        <div className="pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
          <div className="grid gap-10 mb-8 grid-cols-1 lg:grid-cols-12 overflow-hidden">
            <div className="mb-8 flex justify-start flex-col items-start lg:mb-12 col-span-full lg:col-span-5">
              <Link href="/" className="text-xl lg:text-2xl font-bold">
                <Image
                  src={"/logo.png"}
                  alt="logo"
                  className="max-w-40 h-auto"
                  width={500}
                  height={500}
                />
              </Link>

              <p className="dark:text-body-color-dark mb-6 text-base leading-relaxed text-body-color">
                We strive to publish high-quality news content and report
                stories/news that inform, educate, entertain, and hold leaders
                and institutions accountable while upholding the ethics of
                journalism to safeguard trust in news reportage. <br /> Content
                does not represent the official opinions of Stallion Times
                unless specifically indicated.
              </p>

              <div className="flex gap-3">
                <Link href={"#"}>
                  <FaXTwitter className="bg-primary rounded-[50%] sm:w-8 sm:h-8 h-8 w-8 flex items-center justify-center text-white p-2" />
                </Link>

                <Link href={"#"}>
                  <FaInstagram className="bg-primary rounded-[50%] sm:w-8 sm:h-8 h-8 w-8 flex items-center justify-center text-white p-2" />
                </Link>

                <Link href={"#"}>
                  <FaFacebook className="bg-primary rounded-[50%] sm:w-8 sm:h-8 h-8 w-8 flex items-center justify-center text-white p-2" />
                </Link>

                <Link href={"#"}>
                  <FaWhatsapp className="bg-primary rounded-[50%] sm:w-8 sm:h-8 h-8 w-8 flex items-center justify-center text-white p-2" />
                </Link>
              </div>
            </div>

            <div className="col-span-full lg:col-span-2">
              <h3 className="tracking-wide uppercase underline-2 underline-offset-1 font-bold">
                useful links
              </h3>

              <ul className="mt-2 space-y-2">
                <li>
                  <Link href={"/"}>Home</Link>
                </li>
                <li>
                  <Link href={"/about"}>About Us</Link>
                </li>
                <li>
                  <Link href={"/contact"}>Contact Us</Link>
                </li>
                <li>
                  <Link href={"/terms-conditions"}>Terms & Conditions</Link>
                </li>
                <li>
                  <Link href={"/privacy-policy"}>Privacy Policy</Link>
                </li>
              </ul>
            </div>

            <div className="mt-0 lg:mt-8 col-span-full lg:col-span-5">
              <h3 className="text-base tracking-wide uppercase underline-2 underline-offset-1 font-bold">
                subscribe to our newsletter
              </h3>

              <NewsLetterForm />

              <p className="text-sm cursor-pointer">
                Embark on a journey of knowledge and stay ahead in the
                fast-paced world with Stallion Times.
              </p>
            </div>
          </div>

          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183]" />
          <div className="py-8">
            <p className="text-center text-base text-body-color dark:text-white">
              &copy; {currentYear}. All rights reserved. Stallion Times
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
