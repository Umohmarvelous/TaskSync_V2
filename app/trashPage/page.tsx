import { Sidebar } from "@/components/side-bar-component"
import { Header } from "@/components/header"
import { TrashContent } from "@/components/trash-component"

export default function TrashPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Sidebar />
            <div className="ml-64">
                <Header />
                <main className="pt-16">
                    <TrashContent />
                </main>
            </div>
        </div>
    )
}
