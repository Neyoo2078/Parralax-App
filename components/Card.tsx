'use client';

import Image from 'next/image';
import React from 'react';

interface CardProps {
  title: string;
  description?: string;
  image?: any;
}

function Card({ title, description, image }: CardProps) {
  return (
    <div className="relative border-[1px]  w-[200px] lg:w-[240px] bg-[#111111] h-full p-[1.5rem] rounded-[8px] border-[#424242] transition-all">
      <div
        className="image"
        style={{
          height: '100%',
          width: '100%',
        }}
      >
        <p className="text-[1rem] right-[2.5rem] top-[3rem] absolute z-5 font-600 rounded-[8px] py-[0.2rem] px-[0.5rem] text-white bg-[#222260]">
          New
        </p>

        <div className="absolute bottom-[3rem] left-[2.5rem] z-10">
          <h3 className=" text-[1.5rem] text-[#f2994a] inline-block bg-[#111111] py-[0.2] px-[1rem] mb-[0.5rem] border-[1px] border-[#424242]">
            {title}
          </h3>
          <p>{description}</p>
        </div>

        <Image
          src={image}
          alt="image"
          style={{
            height: '100%',
            width: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            borderRadius: '8px',
          }}
        />
      </div>

      <div className="absolute -bottom-[2px] -left-[2px] w-full h-[25%] bg-linnaer-gradient rounded-bl-8 rounded-br-8"></div>
    </div>
  );
}

export default Card;
