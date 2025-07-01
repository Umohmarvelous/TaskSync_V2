import { Sidebar } from "@/components/side-bar-component"
import { Header } from "@/components/header"
import { TaskSummaryContent } from "@/components/task-summary-component"

export default function TaskSummaryPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Sidebar />
            <div className="ml-64">
                <Header />
                <main className="pt-16">
                    <TaskSummaryContent />
                </main>
            </div>
        </div>
    )
}
