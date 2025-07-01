"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ShimmerCard } from "./shimmer-card"
import { MotionContainer } from "./motion-component"

export function MyTasksContent() {
    return (
        <div className="p-6 space-y-8 min-h-screen bg-gray-50">
            {/* Header */}
            <MotionContainer className="text-center space-y-2">
                <p className="text-gray-600">Monday October 21st</p>
                <h1 className="text-2xl font-bold">Good morning, Lola</h1>
            </MotionContainer>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 min-h-[calc(100vh-200px)]">
                {/* Left Column */}
                <div className="lg:col-span-2 space-y-8">
                    {/* My Goals */}
                    <ShimmerCard shimmerIntensity="light">
                        <Card className="h-full">
                            <CardHeader>
                                <CardTitle>My goals</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                                    <span className="text-gray-500">You don't have any goals yet</span>
                                    <Button variant="ghost" className="text-blue-600 hover:text-blue-700">
                                        + Add goals
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </ShimmerCard>

                    {/* Tasks Table */}
                    <ShimmerCard shimmerIntensity="medium" className="flex-1">
                        <Card className="h-full">
                            <CardHeader>
                                <CardTitle>Tasks</CardTitle>
                            </CardHeader>
                            <CardContent className="flex-1">
                                <div className="overflow-x-auto">
                                    <table className="w-full">
                                        <thead>
                                            <tr className="border-b">
                                                <th className="text-left py-3 px-4 font-medium text-gray-600">Task name</th>
                                                <th className="text-left py-3 px-4 font-medium text-gray-600">Status</th>
                                                <th className="text-left py-3 px-4 font-medium text-gray-600">Assigned</th>
                                                <th className="text-left py-3 px-4 font-medium text-gray-600">Due</th>
                                                <th className="text-left py-3 px-4 font-medium text-gray-600">Priority</th>
                                                <th className="text-left py-3 px-4 font-medium text-gray-600">Summary</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="border-b">
                                                <td className="py-4 px-4">Call Steve</td>
                                                <td className="py-4 px-4"></td>
                                                <td className="py-4 px-4">
                                                    <Badge className="bg-purple-100 text-purple-800">Ola</Badge>
                                                </td>
                                                <td className="py-4 px-4"></td>
                                                <td className="py-4 px-4">
                                                    <Badge className="bg-yellow-100 text-yellow-800">High</Badge>
                                                </td>
                                                <td className="py-4 px-4"></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </CardContent>
                        </Card>
                    </ShimmerCard>
                </div>

                {/* Right Column - Personal Notepad */}
                <div className="h-full">
                    <ShimmerCard shimmerIntensity="strong" className="h-full">
                        <Card className="h-full">
                            <CardHeader>
                                <CardTitle>Personal notepad</CardTitle>
                            </CardHeader>
                            <CardContent className="flex-1">
                                <div className="h-96 bg-gray-50 rounded-lg p-4">
                                    <div className="flex space-x-2 mb-4">
                                        <Button variant="ghost" size="sm" className="p-1">
                                            <span className="text-lg">≡</span>
                                        </Button>
                                        <Button variant="ghost" size="sm" className="p-1">
                                            <span className="text-lg">/</span>
                                        </Button>
                                        <Button variant="ghost" size="sm" className="p-1 font-bold">
                                            B
                                        </Button>
                                    </div>
                                    <div className="text-gray-400 text-sm">Start typing your notes here...</div>
                                </div>
                            </CardContent>
                        </Card>
                    </ShimmerCard>
                </div>
            </div>
        </div>
    )
}
