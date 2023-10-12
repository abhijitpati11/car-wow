// we are going to use many buttons in this app so instead of using button tag multiple times we use it as a component and change it using props
"use client";
import React from 'react';
import Image from 'next/image';
import { CustomButtonProps } from '@/types';

const CustomButton = ({ title, containerStyles, handleClick, btnType, textStyles, rightIcon }: CustomButtonProps) => {


 return (
    <button
     disabled={false}
     type={btnType || "button"}
     className={`custom-btn ${containerStyles}`}
     onClick={handleClick}
    >
     <span className={`flex-1 ${textStyles}`}>
      {title}
     </span>

    {rightIcon && (
      <div className='relative w-8 h-8 '>
        <Image
          src={rightIcon}
          alt='rightIcon' 
          fill 
          className='object-contain'
        />
      </div>
    )}

    </button>
  )
}

export default CustomButton
