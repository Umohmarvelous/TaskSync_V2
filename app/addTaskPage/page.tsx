import { Sidebar } from "@/components/side-bar-component"
import { Header } from "@/components/header"
import { AddTaskContent } from "@/components/addTask-component"

export default function AddTaskPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Sidebar />
            <div className="ml-64">
                <Header />
                <main className="pt-16">
                    <AddTaskContent />
                </main>
            </div>
        </div>
    )
}
