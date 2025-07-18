import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

import {

    Plus,
    Grid3X3,

} from "lucide-react"


export default function OverviewLayout() {
    return (
        <div className="space-y-8">
            {/* Task Description */}
            <Card>
                <CardHeader className="pb-4">
                    <CardTitle className="text-xl font-semibold text-gray-900">Task description</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-gray-500">Click here to add a description...</p>
                </CardContent>
            </Card>

            {/* Members */}
            <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-4">
                    <CardTitle className="text-xl font-semibold text-gray-900">Members</CardTitle>
                    <Button variant="link" className="text-gray-500 p-0 h-auto">
                        Manage members
                    </Button>
                </CardHeader>
                <CardContent>
                    <Button variant="outline" className="w-full justify-start h-12 border-dashed bg-transparent">
                        <Plus className="h-4 w-4 mr-2" />
                        Add team members..
                    </Button>
                </CardContent>
            </Card>

            {/* Projects */}
            <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-4">
                    <CardTitle className="text-xl font-semibold text-gray-900">Projects</CardTitle>
                    <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm" className="text-sm bg-transparent">
                            Filter
                        </Button>
                        <Button variant="outline" size="sm" className="text-sm bg-transparent">
                            <Grid3X3 className="h-4 w-4 mr-1" />
                            List view
                        </Button>
                    </div>
                </CardHeader>
                <CardContent className="space-y-3">
                    <Button variant="outline" className="w-full justify-start h-12 border-dashed bg-transparent">
                        <Plus className="h-4 w-4 mr-2" />
                        New Project
                    </Button>
                    <Button variant="outline" className="w-full justify-start h-12 border-dashed bg-transparent">
                        <Plus className="h-4 w-4 mr-2" />
                        New Project
                    </Button>
                </CardContent>
            </Card>
        </div>
    )
}