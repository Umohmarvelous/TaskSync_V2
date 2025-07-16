
"use client"
import "./globals.css";
import { useState } from "react";
import { CloseSharp } from "@mui/icons-material";
import { MenuIcon } from "lucide-react";
import PersonalSidebar from "@/components/personal-dashboard-side-bar-component";
import PersonalDashboardHeader from "@/components/personal-dashboard-header-component";

export default function TeamLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [toggle, setToggle] = useState(false)
    return (
        <div>
            <div className="min-h-screen bg-gray-50 w-fit min-w-full">
                <div className=" hidden sm:block">
                    <PersonalSidebar />
                </div>
                <div className="m-0 sm:ml-64">
                    <div className="flex flex-row items-center justify-between pl-5 sm:pl-0 border-b ">
                        <div className="block sm:hidden">
                            {toggle ?
                                <CloseSharp className="cursor-pointer text-xl text-black hover:bg-gray-200" onClick={() => setToggle(false)} /> :
                                <MenuIcon className="cursor-pointer text-xl text-black hover:bg-gray-200 lg:hidden" onClick={() => setToggle(true)} />
                            }
                        </div>
                        <div className="w-full sm:w-full">
                            <PersonalDashboardHeader />
                        </div>
                    </div>
                    {toggle && (
                        <div>
                            <div className="z-90 absoulte left-0 hover:text-xl transition animation-slide flex items-center w-full justify-center">
                                <CloseSharp className="absolute z-100 cursor-pointer transition hover:text-red-600 text-xl text-white top-6 left-55 font-extrabold " onClick={() => setToggle(false)} />
                            </div>
                            <PersonalSidebar />
                        </div>
                    )}
                    <main className="pt-25">
                        {children}
                    </main>
                </div>
            </div>
        </div>
    )
}
