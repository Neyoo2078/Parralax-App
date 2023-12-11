'use client';

import React from 'react';

interface ButtonProps {
  name: string;
  icon?: React.ReactNode;
  background?: string;
  color?: string;
  border?: string;
}

function Button({
  name,
  icon,
  background = 'var(--color-bg)',
  color,
  border,
}: ButtonProps) {
  return (
    <button className="gap-[1rem] hover:bg-[#424242] border-[#424242] rounded-[15px] lg:rounded-[30px] lg:py-[0.8rem] px-[1rem]  py-[0.4rem] lg:px-[2rem] hover:text-white flex cursor-pointer transition-all border-[2px] border-solid">
      {icon && icon}
      {name}
    </button>
  );
}

export default Button;
