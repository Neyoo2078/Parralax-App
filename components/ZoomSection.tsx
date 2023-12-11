'use client';

import React, { useRef } from 'react';
import hover3d from '../utils/hover';
import Image from 'next/image';

function ZoomSection() {
  const hero = useRef<HTMLDivElement>(null);

  const hover = hover3d(hero, {
    x: -5,
    y: 10,
    z: 4,
  });

  const hover2 = hover3d(hero, {
    x: 40,
    y: 20,
    z: 7,
  });

  const hover3 = hover3d(hero, {
    x: -40,
    y: -20,
    z: -7,
  });

  return (
    <div
      ref={hero}
      className="relative overflow-hidden rounded-[8px] border-[1px] border-[#424242]"
    >
      <div
        className="rounded-[8px]"
        style={{
          height: '50rem',
          width: '100%',
        }}
      >
        <Image
          src="/images/spiral.svg"
          alt="bulb tree"
          className="rounded-[8px]"
          fill
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
            transform: hover.transform,
            scale: 1.2,
            background: 'var(--color-bg)',
          }}
        />

        <Image
          src="/images/arm2.jpg"
          alt="bulb tree"
          className="absolute top-[10%] right-[3rem] rounded-[8px] w-[500px] h-[700px]"
          width={500}
          height={500}
          style={{
            objectFit: 'cover',
            objectPosition: '50% 0%',
            transform: hover2.transform,
            transition: hover2.transition,
          }}
        />

        <Image
          src="/images/arm.jpg"
          alt="bulb tree"
          className="absolute top-[10%] left-[3rem] rounded-[8px]  w-[500px] h-[700px]"
          width={500}
          height={500}
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
            transform: hover3.transform,
            transition: hover3.transition,
          }}
        />
      </div>
    </div>
  );
}

export default ZoomSection;
