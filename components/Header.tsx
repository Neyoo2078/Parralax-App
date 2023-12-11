'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import '../app/globals.css';
import Button from './Button/Button';
import { FaRocket, FaWallet } from 'react-icons/fa';
import { Abril_Fatface } from 'next/font/google';
import hover3d from '@/utils/hover';
import Sidebar from './sidebar/Sidebar';

const abril = Abril_Fatface({
  subsets: ['latin'],
  weight: '400',
});

function Header() {
  const hero = useRef<HTMLDivElement>(null);

  const hoverHero = hover3d(hero, {
    x: 30,
    y: -40,
    z: 30,
  });

  const imageHover = hover3d(hero, {
    x: 20,
    y: -5,
    z: 11,
  });

  const li = ' hover:text-white hover:scale-[1.1] transition-all';

  return (
    <div ref={hero} className="w-full ">
      <Sidebar />
      <nav className="py-0 md:px-[4rem] hidden    min-h-[10vh] border-[#424242] border-t-[#8d159f] border-b-[1px] lg:flex justify-between items-center">
        <div className="l flex items-center text-white gap-[1rem] cursor-pointer">
          <Image src="/logo.png" alt="logo" width={36} height={36} />
          <h2>Logo</h2>
        </div>

        <div className="flex  items-center flex-2">
          <input
            className=" w-[55%] text-white py-[0.6rem] px-[0.8rem] placeholder-[#424242] rounded-[8px] bg-[#161616] border-[1px] font-500"
            type="text"
            placeholder="Search"
          />
        </div>

        <ul className="flex items-center text-white gap-[2rem]">
          <li className={li}>
            <a href="#">Home</a>
          </li>
          <li className={li}>
            <a href="#">Auctions</a>
          </li>
          <li className={li}>
            <a href="#">Marketplace</a>
          </li>
          <li className={li}>
            <a href="#">About</a>
          </li>
          <Button name="Connect Wallet" icon={<FaWallet />} />
        </ul>
      </nav>
      <div className="lg:pr-[10rem] py-[16px]  text-white lg:pb-[5rem] lg:pl-[10rem]  flex-col-reverse lg:flex-row flex justify-center items-center lg:justify-between lg:items-center gap-[4rem] min-h-[90vh]">
        <div className=" flex flex-col justify-center">
          <h1 className="text-[#f2994a] text-center transition-all pb-[1.5rem] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
            Buy, collect, and sell extraordinary NFTs
          </h1>
          <p className="text-center text-[13px] lg:text-[19px]">
            Acquire expertise in navigating the rapidly evolving and
            exhilarating NFT landscape, unveil the highly sought-after NFTs, and
            comprehend the possible advantages and disadvantages of acquiring,
            amassing, and vending these exceptional digital assets.
          </p>

          <div className="flex gap-[1rem] mt-[2.5rem] justify-center">
            <Button
              name="Get Started"
              background="#f2994a"
              color="#fff"
              border="1px solid #f2994a"
              icon={<FaRocket />}
            />
            <Button name="Learn More" />
          </div>
        </div>

        <div>
          <div
            className="p-[1rem] rounded-[8px] bg-[#424242] border-[1px] border-solid border-[#424242] lg:w-[400px] lg:h-[400px] w-[300px] h-[300px]"
            style={{
              transform: hoverHero.transform,
            }}
          >
            <Image
              src="/images/monkey.png"
              width={600}
              height={600}
              alt="hero"
              style={{
                transform: imageHover.transform,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
