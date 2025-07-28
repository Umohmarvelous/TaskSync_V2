
"use client"
import "./globals.css";
import { useState } from "react";
import { CloseSharp } from "@mui/icons-material";
import { MenuIcon } from "lucide-react";
import PersonalSidebar from "@/components/personal-dashboard-side-bar-component";
import PersonalDashboardHeader from "@/components/personal-dashboard-header-component";

export default function PersonalLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [toggle, setToggle] = useState(false)
    return (
        <div>
            <div className="border-4 border-red-600 min-h-auto bg-gray-50 w-fit min-w-full">
                <div className="hidden sm:block">
                    <PersonalSidebar />
                </div>
                {/*  */}
                <div className="m-0 sm:ml-71">
                    <div className="fixed top-0 right-0 z-30 h-auto w-full sm:w-[70%] lg:w-[72%] xl:w-[80%] 2xl:w-[170%] flex flex-row items-center justify-between pl-2 sm:pl-0 border-b bg-white border-4 border-green-500">
                        <div className="border-4 border-red-500 block sm:hidden">
                            {toggle ?
                                <CloseSharp className="cursor-pointer text-xl text-black hover:bg-gray-200" onClick={() => setToggle(false)} /> :
                                <MenuIcon className="cursor-pointer text-xl text-black hover:bg-gray-200 lg:hidden" onClick={() => setToggle(true)} />
                            }
                        </div>
                        <PersonalDashboardHeader />
                    </div>
                    {toggle && (
                        <div>
                            <div className="z-90 absoulte left-0 hover:text-xl transition animation-slide flex items-center w-full justify-center">
                                <CloseSharp className="absolute z-100 cursor-pointer transition hover:text-red-600 text-xl text-white top-6 left-55 font-extrabold " onClick={() => setToggle(false)} />
                            </div>
                            <PersonalSidebar />
                        </div>
                    )}
                    <main className="pt-25 border-4 border-red-500">
                        {children}
                    </main>
                </div>
            </div>
        </div>
    )
}
