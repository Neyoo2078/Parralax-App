'use client';
import React from 'react';
import Header from '@/components/Header';
import Lines from '@/components/Lines';
import Image from 'next/image';
import SectionLayout from '@/components/SectionLayout';
import HorizontalWrapper from '@/components/HorizontalWrapper';
import Card from '@/components/Card';
import { cards } from '@/utils/cards';
import Fullpage from '@/components/Fullpage';
import TextSection from '@/components/TextSection';

import { motion, useScroll, useTransform } from 'framer-motion';
import Footer from '@/components/Footer';
import ZoomSection from '@/components/ZoomSection';
export default function Home() {
  const video = React.useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: video,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.65, 1], [1, 1, 0]);

  console.log({ opacity });
  const scale = useTransform(
    scrollYProgress,
    [0, 0.6, 0.8, 0.9],
    [1, 0.8, 0.8, 0]
  );
  return (
    <div>
      {/* <Lines /> */}
      <Header />
      <div className="min-h-screen w-full">
        <SectionLayout>
          <HorizontalWrapper height="20rem" direction={-1400}>
            {/* className="absolute grid w-full h-[50%]  gap-[2rem] grid-cols-5  */}
            <div className="absolute grid w-full h-full  gap-[2rem] grid-cols-5">
              {cards.map((card, index) => {
                return (
                  <Card
                    key={index}
                    title={card.title}
                    description={card.description}
                    image={card.image}
                  />
                );
              })}
            </div>
          </HorizontalWrapper>
        </SectionLayout>
        <Fullpage />
        <SectionLayout>
          <HorizontalWrapper height="20rem" direction={1400}>
            {/* className="absolute grid w-full h-[50%]  gap-[2rem] grid-cols-5  */}
            <div className="absolute grid w-full h-full  gap-[2rem] grid-cols-5">
              {cards.map((card, index) => {
                return (
                  <Card
                    key={index}
                    title={card.title}
                    description={card.description}
                    image={card.image}
                  />
                );
              })}
            </div>
          </HorizontalWrapper>
        </SectionLayout>
        <SectionLayout>
          <TextSection />
        </SectionLayout>

        <Footer />
      </div>
    </div>
  );
}
