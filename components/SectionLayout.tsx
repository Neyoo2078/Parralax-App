import React from 'react';

interface SectionLayoutProps {
  children: React.ReactNode;
  ref?: React.RefObject<HTMLDivElement>;
}

function SectionLayout({ children, ref }: SectionLayoutProps) {
  return (
    <section className=" py-[2rem] px-[5px] md:py-[5rem] md:px-[10rem]">
      {children}
    </section>
  );
}

export default SectionLayout;
