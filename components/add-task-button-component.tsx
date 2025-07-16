"use client"
import { Plus } from "lucide-react"
import Link from "next/link"
import { useState } from "react"


export default function AddButton() {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const modalFunction = () => {

        setIsModalOpen(true)
        return (
            <>
                {/* < h1 > HI</h1 > */}
                {/* <AddTaskContent isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} /> */}
            </>
        )
    }

    return (
        <>
            <Link
                onClick={modalFunction}
                href="/personalDashboard/addTaskPage"
                className="bg-slate-800 hover:bg-slate-700 text-white">
                <Plus className="w-4 h-4 mr-2" />
                Add Task
            </Link>

        </>
    )
}