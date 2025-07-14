import { Button } from "@/components/ui/button"
import {
  ArrowUp,
  Edit,
  Copy,
} from "lucide-react"

export default function WorkspaceBoardPage() {
  return (
    <div className="flex items-center justify-center min-h-auto w-full">
      {/* Dotted Grid Background */}
      <div className="relative inset-0 w-full h-screen opacity-30"
        style={{
          backgroundImage: "radial-gradient(circle,rgb(0, 0, 0) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />
      {/* Floating Action Buttons */}
      <div className="absolute bottom-7 z-50 w-auto flex self-end transform space-x-3 bg-white rounded-full">
        <Button size="default" className="rounded-full bg-purple-500 hover:bg-purple-600 h-auto w-auto shadow-lg">
          <ArrowUp className="h-4 w-4" />
        </Button>

        <Button size="default" className="rounded-full bg-gray-400 hover:bg-gray-500 h-auto w-auto shadow-lg">
          <div className="h-4 w-4 rounded-full bg-white" />
        </Button>

        <Button size="default" className="rounded-full bg-gray-300 hover:bg-gray-400 h-auto w-auto shadow-lg">
          <div className="h-4 w-4 rounded bg-white" />
        </Button>

        <div className="bg-yellow-200 px-3 py-2 rounded-lg text-xs font-medium shadow-lg">Write something</div>

        <Button size="default" className="rounded-full bg-gray-300 hover:bg-gray-400 h-auto w-auto shadow-lg">
          <Edit className="h-4 w-4" />
        </Button>

        <Button size="default" className="rounded-full bg-gray-300 hover:bg-gray-400 h-auto w-auto shadow-lg">
          <Copy className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
