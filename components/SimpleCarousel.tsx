import React, { useRef } from "react";

interface CarouselProps {
    items: React.ReactNode[];
    fullWidth?: boolean;
}

export default function SimpleCarousel({ items, fullWidth = false }: CarouselProps) {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const newScroll =
                direction === "left"
                    ? scrollLeft - clientWidth
                    : scrollLeft + clientWidth;
            scrollRef.current.scrollTo({ left: newScroll, behavior: "smooth" });
        }
    };

    return (
        <div className={`relative ${fullWidth ? 'w-full' : 'max-w-sm'} mx-auto`} style={fullWidth ? { width: '100%' } : {}}>
            <button
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full p-2 shadow"
                onClick={() => scroll("left")}
                aria-label="Scroll left"
                style={{ left: 0 }}
            >
                &#8592;
            </button>
            <div
                ref={scrollRef}
                className={`flex overflow-x-auto scroll-smooth snap-x snap-mandatory gap-4 ${fullWidth ? 'w-full' : ''}`}
                style={{ scrollBehavior: "smooth", width: fullWidth ? '100%' : undefined, overflowX: fullWidth ? 'hidden' : undefined }}
            >
                {items.map((item, idx) => (
                    <div
                        key={idx}
                        className="snap-center flex-shrink-0"
                        style={{ width: fullWidth ? '100%' : 379, minWidth: fullWidth ? '100%' : 379, maxWidth: fullWidth ? '100%' : 379 }}
                    >
                        {item}
                    </div>
                ))}
            </div>
            <button
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full p-2 shadow"
                onClick={() => scroll("right")}
                aria-label="Scroll right"
                style={{ right: 0 }}
            >
                &#8594;
            </button>
        </div>
    );
} 