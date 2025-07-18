import { ReactNode } from "react";

interface TaskSummaryLayoutProps {
    children: ReactNode;
    // modal: ReactNode;
}

export default function TaskSummaryLayout(
    { children }: TaskSummaryLayoutProps
) {
    return (
        <>
            {children}
            {/* {modal} */}
        </>
    )
}