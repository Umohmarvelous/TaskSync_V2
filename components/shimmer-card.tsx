"use client"

import type { ReactNode } from "react"

interface ShimmerCardProps {
    children: ReactNode
    className?: string
    delay?: number
    shimmerIntensity?: "light" | "medium" | "strong"
}

export function ShimmerCard({ children, className = "", shimmerIntensity = "medium" }: ShimmerCardProps) {
    const shimmerOpacity = {
        light: "via-white/10",
        medium: "via-white/20",
        strong: "via-white/30",
    }

    return (
        <div className={`relative overflow-hidden rounded-lg ${className}`}>
            <div
                className={`absolute inset-0 bg-gradient-to-r from-transparent ${shimmerOpacity[shimmerIntensity]} to-transparent -skew-x-12 animate-shimmer pointer-events-none`}
            ></div>
            {children}
        </div>
    )
}
