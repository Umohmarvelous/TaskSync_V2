import { Sidebar } from "@/components/side-bar-component"
import { Header } from "@/components/header"
import { CalendarContent } from "@/components/calendar-component"

export default function CalendarPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Sidebar />
            <div className="ml-64">
                <Header />
                <main className="pt-16">
                    <CalendarContent />
                </main>
            </div>
        </div>
    )
}
