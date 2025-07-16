export default function TrashContent() {
    return (
        <div className="flex flex-col items-center justify-center h-full p-6 ">
            <div className="text-center space-y-6 mt-30">
                <div className="flex justify-center">
                    <div className="w-24 h-28 bg-gray-400 rounded-lg relative">
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1 w-8 h-2 bg-gray-400 rounded-full"></div>
                        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-1 h-12 bg-white rounded"></div>
                        <div className="absolute top-4 left-1/2 transform translate-x-2 w-1 h-12 bg-white rounded"></div>
                    </div>
                </div>
                <div className="space-y-2">
                    <h2 className="text-xl font-semibold">Trash will disappear after 30 days</h2>
                </div>
            </div>
        </div>
    )
}
