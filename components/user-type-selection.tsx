import { Card } from "@/components/ui/card"

export function UserTypeSelection() {
    return (
        <div className="min-h-screen flex">
            {/* Left side - TaskSync branding */}
            <div className="flex-1 bg-gradient-to-br from-blue-900 to-blue-700 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 left-20 w-32 h-32 border-4 border-white rounded-full" />
                    <div className="absolute bottom-40 right-20 w-24 h-24 border-4 border-white rounded-full" />
                    <div className="absolute top-1/2 left-1/4 w-16 h-16 border-4 border-white rounded-full" />
                </div>
                <h1 className="text-6xl font-bold text-white">TaskSync</h1>
            </div>
            className="hover:shadow-lg transition-shadow cursor-pointer"

            {/* Right side - User type selection */}
            <div className="flex-1 bg-gray-50 flex items-center justify-center p-8">
                <div className="w-full max-w-lg">
                    <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Who will be using Tasksync?</h2>

                    <div className="grid grid-cols-2 gap-6">
                        <Card className="p-8 text-center hover:shadow-lg transition-shadow cursor-pointer bg-orange-100">
                            <div className="mb-4">
                                <div className="w-16 h-16 mx-auto bg-orange-200 rounded-lg flex items-center justify-center">
                                    <div className="w-8 h-8 bg-orange-400 rounded" />
                                </div>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900">Individual</h3>
                        </Card>

                        <Card className="p-8 text-center hover:shadow-lg transition-shadow cursor-pointer bg-purple-100">
                            <div className="mb-4">
                                <div className="w-16 h-16 mx-auto bg-purple-200 rounded-lg flex items-center justify-center">
                                    <div className="w-8 h-8 bg-purple-400 rounded" />
                                </div>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900">Team</h3>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}
