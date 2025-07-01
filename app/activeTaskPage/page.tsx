import { Sidebar } from "@/components/side-bar-component"
import { Header } from "@/components/header"
import { ActiveTaskContent } from "@/components/activeTask-component"

export default function ActiveTaskPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Sidebar />
            <div className="ml-64">
                <Header />
                <main className="pt-16">
                    <ActiveTaskContent />
                </main>
            </div>
        </div>
    )
}
