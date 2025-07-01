import { Sidebar } from "@/components/side-bar-component"
import { Header } from "@/components/header"
import { WorkspaceContent } from "@/components/workspace-component"

export default function WorkspacePage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Sidebar />
            <div className="ml-64">
                <Header />
                <main className="pt-16">
                    <WorkspaceContent />
                </main>
            </div>
        </div>
    )
}
