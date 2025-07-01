import { Sidebar } from "@/components/side-bar-component"
import { Header } from "@/components/header"
import { SettingsContent } from "@/components/settings-component"

export default function SettingsPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Sidebar />
            <div className="ml-64">
                <Header />
                <main className="pt-16">
                    <SettingsContent />
                </main>
            </div>
        </div>
    )
}
