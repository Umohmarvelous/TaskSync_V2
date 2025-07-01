import { Sidebar } from "@/components/side-bar-component"
import { Header } from "@/components/header"
import { MyTasksContent } from "@/components/myTask-component"

export default function MyTasksPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Sidebar />
            <div className="ml-64">
                <Header />
                <main className="pt-16">
                    <MyTasksContent />
                </main>
            </div>
        </div>
    )
}
