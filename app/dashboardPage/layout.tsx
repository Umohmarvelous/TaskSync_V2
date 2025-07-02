
import { DashboardHeader } from "@/tasksync_v2/components/dashboard-header-component";
import "./globals.css";
import { Sidebar } from "@/components/side-bar-component";

export default function HomeLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <div className="min-h-screen bg-gray-50 w-fit min-w-full">
                <Sidebar />
                <div className="ml-64">
                    <DashboardHeader />
                    <main className="pt-16">
                        {children}
                    </main>
                </div>
            </div>
        </div>
    )
}
