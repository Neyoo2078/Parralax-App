'use client';

import React from 'react';
import logo from '/public/logo.png';
import footer from '../utils/footer';
import Image from 'next/image';

import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillLinkedin,
} from 'react-icons/ai';
import { BsDiscord } from 'react-icons/bs';

function Footer() {
  return (
    <div className="relative z-10 px-2 pt-[5rem] lg:pr-[10rem] pb-0 lg:pl-[10rem] bg-[#111111] border-t-[1px] border-[#424242]">
      <nav className=" flex lg:flex-row py-5 lg:py-0 flex-col justify-between  items-center w-full gap-[3rem]">
        <div className="flex flex-col gap-[2rem] w-[50%]">
          <div className="logo hidden lg:block">
            <Image src={logo} width={36} alt="logo" />
            <h2>Logo</h2>
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Subscribe here..."
              className="w-full placeholder:text-[#424242] font-500 py-[1rem] px-[8px] border-[1px] border-[#424242] rounded-[8px] bg-[#161616]"
            />

            <button className="absolute hover:text-white  transform translate-y-one hover:translate-x-three hover:translate-y-two  right-[2rem] top-[50%] bg-transparent cursor-pointer transition-all">
              &#8594;
            </button>
          </div>
          <p>
            Create, Sell And Collect Truly Rare Digital Artworks. Powered By
            Blockchain Technology.
          </p>
          <div className="flex gap-[1rem] text-[1.6rem]">
            <AiFillGithub className="hover:text-white transition-all cursor-pointer" />
            <AiFillTwitterCircle />
            <AiFillInstagram />
            <BsDiscord />
            <AiFillLinkedin />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-[2rem]">
          {footer.map((item: any, index: number) => {
            return (
              <div key={index}>
                <h4 className=" text-[1rem] lg:text-[1.8rem] mb-[1.5rem]">
                  {item.title}
                </h4>
                <ul>
                  {item.links.map((text: any, index: number) => {
                    return (
                      <li
                        className="mb-[1rem] text-[15px] lg:text-[20px] "
                        key={index}
                      >
                        <a className="transition-all hover:text-white" href="">
                          {text.name}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </nav>

      <p className="flex justify-between items-center py-[2rem] px-0 border-t-[1px] border-[#424242] ">
        <a href="">©2023 The Code Dealer. All rights reserved.</a>
        <a href="">Privacy policy | Terms of service</a>
      </p>
    </div>
  );
}

export default Footer;
