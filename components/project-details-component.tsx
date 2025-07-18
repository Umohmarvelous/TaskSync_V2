
"use client"
import { useState, useEffect, forwardRef } from "react";
import { Dialog, DialogContent, Slide } from "@mui/material";
import type { TransitionProps } from "@mui/material/transitions";
import { useRouter, useSearchParams } from "next/navigation";
// import your other UI components and icons as needed

const Transition = forwardRef(function Transition(
    props: TransitionProps & { children: React.ReactElement<any, any> },
    ref: React.Ref<unknown>
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function ProjectDetails() {
    const [open, setOpen] = useState(false);
    const router = useRouter();
    const searchParams = useSearchParams();
    const isModal = searchParams.get("modal") === "true";

    useEffect(() => {
        if (isModal) setOpen(true);
    }, [isModal]);

    const handleClose = () => {
        setOpen(false);
        setTimeout(() => {
            router.back();
        }, 300); // Wait for animation to finish
    };

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            TransitionComponent={Transition}
            keepMounted
            className="w-full max-w-5xl sm:max-w-3xl md:max-w-4xl lg:max-w-6xl mx-auto"
            PaperProps={{
                className: "w-full p-2 sm:p-6 rounded-xl",
                style: { overflow: "visible" },
            }}
        >
            <DialogContent className="w-full p-0 sm:p-0 bg-transparent">
                {/* Place your entire project details sidebar content here */}
                <div className="w-80 bg-white border-l p-6">
                    {/* ...rest of your sidebar content... */}
                </div>
            </DialogContent>
        </Dialog>
    );
}