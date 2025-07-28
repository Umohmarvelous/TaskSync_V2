"use client"
import { Input } from "./ui/input";
import { Modal } from "@mui/material";
import { useState, useRef } from 'react'
import { Button } from "@/components/ui/button"
import { Textarea } from "./ui/textarea"

import { useRouter } from "next/navigation"


interface UserProp {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: any;
}

export default function FeedbackModalComponent({ isOpen, onClose, onSubmit }: UserProp) {
    const router = useRouter()

    const [userName, setUserName] = useState("")
    const [feedbackUserName, setFeedbackUserName] = useState("")
    const [feedbackUserRole, setFeedbackUserRole] = useState("")
    const [feedbackUserDetails, setFeedbackUserDetails] = useState("")

    const [loading, setLoading] = useState(false)
    const [openFeedbackModal, setOpenFeedbackModal] = useState(false)
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const [error, setError] = useState("")



    // Create an endpoint to store Feedback users to Database
    const feedbackFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);
        router.back();

        const response = await fetch("http://localhost:3001/api/feedbackuser", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                feedbackUserName,
                feedbackUserRole,
                feedbackUserDetails
            }),
        });

        if (response.ok) {
            setFeedbackUserName("")
            setFeedbackUserRole("");
            setFeedbackUserDetails("");
            // router.back()

        } else {
            const errorData = await response.json();
            setError(errorData.message || "Failed to add task");
        }

        setLoading(false);
        onClose()
    };


    return (
        <Modal open={isOpen} onOpenChange={onClose} aria-labelledby="feedback-modal-title"
            aria-describedby="feedback-modal-description"
            className="flex self-center justify-self-center"
        >
            <form
                className="flex justify-center items-center space-y-6 flex-col bg-white p-[24px] rounded-lg"
                onSubmit={feedbackFormSubmit}
                style={{
                    // transform: 'translate(-50%, -50%)',
                    boxShadow: '0 2px 16px rgba(0,0,0,0.2)',
                    minWidth: 320,
                }}>
                <h2 id="feedback-modal-title" className='flex self-start' style={{ marginBottom: 16, fontWeight: 600 }}>
                    Give Feedback
                </h2>
                <Input
                    type="text"
                    placeholder="State your name here..."
                    value={feedbackUserName}
                    id="feedbackUserName"
                    required
                    onChange={(e) => setFeedbackUserName(e.target.value)}
                    className="bg-white border-1 border-gray-200 w-full p-[8px] mb-[16px] rounded-lg text-sm"
                />
                <Input
                    type="text"
                    placeholder="State your role here..."
                    value={feedbackUserRole}
                    id="feedbackUserRole"
                    required
                    onChange={(e) => setFeedbackUserRole(e.target.value)}
                    className="bg-white border-1 border-gray-200 w-full p-[8px] mb-[16px] rounded-lg text-sm"
                />
                <Textarea
                    placeholder="Write a feedback..."
                    value={feedbackUserDetails}
                    id="feedbackUserDetails"
                    onChange={(e) => setFeedbackUserDetails(e.target.value)}
                    required
                    className="min-h-[100px] text-sm bg-white border-1 border-gray-200  rounded-lg"
                />
                <div className="w-full flex flex-row items-center justify-end space-x-3" >
                    <Button
                        onClick={onClose}
                        variant="outline"
                        size="sm" >
                        Cancel
                    </Button>
                    <Button
                        type="submit"
                        variant="default"
                        size="sm"
                        disabled={loading}
                        onClick={() => setOpenFeedbackModal(true)}
                        className="w-auto bg-slate-800 hover:bg-slate-300 hover:text-gray-600 text-white rounded-md"
                    >
                        {loading ? "Submitting Feedback..." : "Submit"}
                    </Button>
                </div>
            </form>
        </Modal>
    )
}