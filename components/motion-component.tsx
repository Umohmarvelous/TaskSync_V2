"use client"

import type { ReactNode } from "react"

interface MotionContainerProps {
    children: ReactNode
    className?: string
    delay?: number
}

export default function MotionContainer({ children, className = "" }: MotionContainerProps) {
    return (
        <div className={`relative overflow-hidden ${className}`}>
            {children}
        </div>
    )
}
