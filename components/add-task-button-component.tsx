"use client"

import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

interface AddTaskButtonProps {
    onClick: () => void;
    className?: string;
}

export function AddTaskButton({ onClick, className = "" }: AddTaskButtonProps) {
    return (
        <Button
            className={`bg-slate-800 hover:bg-slate-700 text-white ${className}`}
            onClick={onClick}
        >
            <Plus className="w-4 h-4 mr-2" />
            Add Task
        </Button>
    );
} 