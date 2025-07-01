import { Sidebar } from "@/components/side-bar-component"
import { Header } from "@/components/header"
import { ImportContent } from "@/components/import-component"

export default function ImportPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Sidebar />
            <div className="ml-64">
                <Header />
                <main className="pt-16">
                    <ImportContent />
                </main>
            </div>
        </div>
    )
}
