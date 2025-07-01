import { Sidebar } from "@/components/side-bar-component"
import { Header } from "@/components/header"
import { ReportContent } from "@/components/report-component"

export default function ReportPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Sidebar />
            <div className="ml-64">
                <Header />
                <main className="pt-16">
                    <ReportContent />
                </main>
            </div>
        </div>
    )
}
