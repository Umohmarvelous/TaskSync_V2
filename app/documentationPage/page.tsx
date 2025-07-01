import { Sidebar } from "@/components/side-bar-component"
import { Header } from "@/components/header"
import { DocumentationContent } from "@/components/documentation-component"

export default function DocumentationPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Sidebar />
            <div className="ml-64">
                <Header />
                <main className="pt-16">
                    <DocumentationContent />
                </main>
            </div>
        </div>
    )
}
