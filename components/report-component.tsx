"use client"

export default function ReportContent() {
    return (
        <div className="flex flex-col items-center justify-center h-full p-6">
            <div className="text-center space-y-6 relative overflow-hidden rounded-lg p-8 mt-30">
                {/* <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-100/30 to-transparent -skew-x-12 animate-shimmer"></div> */}
                <div className="flex justify-center">
                    <div className="flex items-end space-x-2 ">
                        <div className="w-8 h-12 bg-gray-400 rounded "></div>
                        <div className="w-8 h-8 bg-gray-400 rounded"></div>
                        <div className="w-8 h-16 bg-gray-400 rounded"></div>
                        <div className="w-8 h-12 bg-gray-400 rounded"></div>
                    </div>
                </div>
                <div className="space-y-2">
                    <h2 className="text-xl font-semibold">Your reports will show here</h2>
                    <p className="text-gray-600">
                        Drag and drop files or{" "}
                        <span className="text-orange-500 cursor-pointer hover:underline">import from other channels</span>
                    </p>
                </div>
            </div>
        </div>
    )
} 