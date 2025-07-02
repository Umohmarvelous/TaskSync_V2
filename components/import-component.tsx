export function ImportContent() {
    return (
        <div className="flex flex-col items-center justify-center h-full p-6">
            <div className="text-center space-y-6 mt-30">
                <div className="flex justify-center">
                    <div className="relative">
                        <div className="w-24 h-16 bg-gray-400 rounded-lg"></div>
                        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="space-y-2">
                    <h2 className="text-xl font-semibold">Your imports will show here</h2>
                    <p className="text-gray-600">
                        Drag and drop files or{" "}
                        <span className="text-orange-500 cursor-pointer hover:underline">import from other channels</span>
                    </p>
                </div>
            </div>
        </div>
    )
}
