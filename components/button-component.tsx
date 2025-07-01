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
            onClick={onClick}
            style={{
                backgroundColor: '#FE5722',
                color: 'white',
                width: '153px',
                height: '56px',
                borderRadius: '20px',
                border: 'hidden'
            }}
        > {buttonName}
        </Button >
    )
}

export default CustomButton



