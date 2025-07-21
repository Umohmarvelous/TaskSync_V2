"use client"
import { Button } from '@/components/ui/button';
import React from 'react'


const CustomButton = ({ buttonName, style, onClick }: {
    onClick?: () => void
    buttonName: string;
    style?: React.CSSProperties;
}) => {
    return (
        < Button
            className='w-30 sm:w-32 h-9 sm:h-11 text-gray-50 rounded-lg border-hidden bg-[#FE5722] text-sm font-normal'
            onClick={onClick}
        >
            {buttonName}
        </Button >
    )
}

export default CustomButton



