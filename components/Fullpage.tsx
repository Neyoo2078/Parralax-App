'use client';

import Image from 'next/image';
import React from 'react';

import { motion, useScroll, useTransform } from 'framer-motion';

function Fullpage() {
  const secRef = React.useRef<HTMLDivElement>(null);

  // ScrollYProgress is a value between 0 and 1
  const { scrollYProgress } = useScroll({
    //target is the element that we want to track
    target: secRef,
    offset: ['start end', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const xTransform = useTransform(
    scrollYProgress,
    [1, 0.5, 0.1, 0],
    [-1000, 0, 0, 0]
  );

  return (
    <div ref={secRef}>
      <motion.div
        className=" w-full lg:w-fullpage h-[500px] lg:h-[1000px] hover:border-[#f2994a] relative rounded-[8px] border-[1px] border-solid border-[#424242] animate-border"
        style={{
          scale: scale,
          x: xTransform,
        }}
      >
        <Image
          src="/images/rover.jpg"
          alt="monkey"
          fill={true}
          className="p-[1.5rem]"
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />
      </motion.div>
    </div>
  );
}

export default Fullpage;
