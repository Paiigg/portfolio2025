import Link from "next/link";
import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-primary text-background py-3 ">
      <div className="max-w-screen-lg mx-auto px-4 flex justify-between items-start">
        <div className="flex flex-col">
          <Link href="/" className="font-bold text-2xl">
            AK1NG.
          </Link>
          <span className="text-xs">Not Bad.</span>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 ">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#0A66C2] rounded-full flex items-center justify-center">
              <Link
                href="https://www.linkedin.com/in/faiqul-washfi/"
                target="_blank"
              >
                <FaLinkedin color="white" />
              </Link>
            </div>
            <div className="w-8 h-8 bg-background rounded-full flex items-center justify-center">
              <Link href="https://github.com/Paiigg" target="_blank">
                <FaGithub color="white" />
              </Link>
            </div>
            <div className="w-8 h-8 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] rounded-full flex items-center justify-center">
              <Link href="/">
                <FaInstagram color="white" />
              </Link>
            </div>
          </div>
          <p className="text-xs">faiqulwashfi@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
