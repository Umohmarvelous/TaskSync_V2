
import { Globe } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
    return (
        <header className="flex items-center justify-between p-6">
            <div className="text-2xl font-bold text-gray-900">TaskSync</div>
            <div className="flex items-center gap-4">
                <span className="text-gray-600">Features</span>
                <Button variant="ghost" size="icon">
                    <Globe className="h-5 w-5" />
                </Button>

                <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6" name="button" title="click">
                    <a href="/onBoardingScreens"> Get Started</a>
                </Button>
            </div>
        </header>
    )
}
