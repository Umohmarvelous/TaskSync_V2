import { ShimmerCard } from "@/components/shimmer-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";

export default function MessageLayout() {
    return (
        <div className="space-y-6 w-full m-20">
            {/* {showMessageInput && activeTab === "Messages" && ( */}
            <ShimmerCard delay={0.3} shimmerIntensity="light">
                <div className="bg-white rounded-lg p-4">
                    <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-orange-200 rounded-full flex items-center justify-center">
                            <Button
                                variant="ghost"
                                size="icon"
                                className="w-6 h-6 text-orange-600 hover:bg-orange-100"
                            // onClick={() => setShowMessageInput(false)}
                            >
                                <X className="w-4 h-4" />
                            </Button>
                        </div>
                        <Input
                            placeholder="Send message to members"
                            className="flex-1 border-0 bg-transparent focus-visible:ring-0 text-gray-600 border border-gray-200 px-4"
                        />
                    </div>
                </div>
            </ShimmerCard>
            {/* )} */}
            <div className="h-auto border-none">
                <Input className="h-50 text-left bg-white rounded-lg p-4 border-none" />
            </div>
        </div>
    )
}