"use client"

import { Search, Bell, Plus, ArrowLeft, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { usePathname, useRouter } from "next/navigation"
import Link from "next/link"
import { useState, useEffect, useRef } from "react"
// import Modal from "@/components/ui/modal" // Adjust path if needed
import { Modal } from "@mui/material"


interface User {
    id: number;
    firstName: string;
    lastName: string;
    company?: string;
    purpose?: string;
}

interface Notification {
    id: number;
    message: string;
    type: "info" | "error";
}

export default function PersonalDashboardHeader() {
    const pathname = usePathname()
    const router = useRouter()
    const showBackButton = pathname !== "/"
    const [userName, setUserName] = useState("No user")
    const [userRole, setUserRole] = useState("Freelancer")
    const [loading, setLoading] = useState(true)
    const [notifications, setNotifications] = useState<Notification[]>([])
    const [showNotificationModal, setShowNotificationModal] = useState(false)
    const bellRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                // Get user ID from localStorage
                const userId = localStorage.getItem('userId')
                if (!userId) {
                    setLoading(false)
                    return
                }

                // Fetch user data from backend (MySQL)
                const response = await fetch(`http://localhost:3001/api/users/${userId}`)
                if (!response.ok) {
                    // Add error notification
                    setNotifications(prev => [
                        ...prev,
                        { id: Date.now(), message: "Failed to fetch user data", type: "error" }
                    ])
                    throw new Error('Failed to fetch user data')
                }

                const userData: User = await response.json()
                const fullName = `${userData.firstName} ${userData.lastName}`.trim()

                if (fullName) {
                    setUserName(fullName)
                }
                if (userData.company) {
                    setUserRole(userData.company)
                }
                // Example: Add notification when user is loaded
                setNotifications(prev => [
                    ...prev,
                    { id: Date.now(), message: "A new user has been added!", type: "info" }
                ])
            } catch (error) {
                console.error('Error fetching user data:', error)
                // Fallback to default values
                setUserName("No user")
                setUserRole("Freelancer")
            } finally {
                setLoading(false)
            }
        }

        fetchUserData()
    }, [])

    // Bell vibration effect
    useEffect(() => {
        if (notifications.length > 0 && bellRef.current) {
            bellRef.current.classList.add("animate-bell-vibrate")
        } else if (bellRef.current) {
            bellRef.current.classList.remove("animate-bell-vibrate")
        }
    }, [notifications.length])

    // Delete notification
    const handleDeleteNotification = (id: number) => {
        setNotifications(prev => prev.filter(n => n.id !== id))
    }

    return (
        <header
            className="fixed top-0 right-0 z-30 flex items-center justify-between w-full sm:w-[75%] xl:w-[82.7%] 2xl:w-[170%] h-16 px-6 bg-white border-b border-gray-200">
            {showBackButton && (
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => router.back()}
                    className="rounded-full bg-slate-800 text-white hover:bg-slate-700"
                    name="button" title="Back to Home"
                >
                    <ArrowLeft className="w-4 h-4" />
                </Button>
            )}
            <div className="flex items-center space-x-4">
                <div className="relative max-w-md w-90">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input type="search" placeholder="Search" id="search" className="pl-10 bg-gray-50 border-gray-200 rounded-full" />
                </div>
                <div className="relative" ref={bellRef}>
                    <Button variant="ghost" size="icon" onClick={() => setShowNotificationModal(true)} className="relative">
                        <Bell className="w-5 h-5" />
                        {notifications.length > 0 && (
                            <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full px-1.5 py-0.5 min-w-[18px] text-center">
                                {notifications.length}
                            </span>
                        )}
                    </Button>
                </div>
            </div>

            <Button className="bg-slate-800 hover:bg-slate-700 text-white" onClick={() => router.push("/personalDashboard/addTaskPage?modal=true")}>
                <Plus className="w-4 h-4 mr-2" />
                Add Task
            </Button>

            <div className="flex items-center space-x-3">
                <Avatar>
                    <AvatarImage src="/placeholder-user.jpg" alt={userName} />
                    <AvatarFallback>{userName.split(' ').map(n => n[0]).join('').toUpperCase()}</AvatarFallback>
                </Avatar>
                <div className="hidden md:block">
                    <p className="text-sm font-medium">{userName}</p>
                    <p className="text-xs text-gray-500">{userRole}</p>
                </div>
            </div>

            {/* Notification Modal */}
            <Modal
                open={showNotificationModal}
                onClose={() => setShowNotificationModal(false)}
                aria-labelledby="notification-modal-title"
            >
                <div
                    style={{
                        position: 'absolute',
                        top: '40%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        background: 'white',
                        padding: 24,
                        borderRadius: 8,
                        boxShadow: '0 2px 16px rgba(0,0,0,0.2)',
                        minWidth: 320,
                        maxWidth: 400,
                    }}
                >
                    <h2 id="notification-modal-title" style={{ marginBottom: 16, fontWeight: 600 }}>
                        Notifications
                    </h2>
                    {notifications.length === 0 ? (
                        <div className="text-gray-500 text-center py-8">No notifications</div>
                    ) : (
                        <ul className="space-y-3">
                            {notifications.map(n => (
                                <li key={n.id} className="flex items-center justify-between bg-gray-50 rounded px-3 py-2">
                                    <span className={n.type === "error" ? "text-red-600" : "text-gray-800"}>
                                        {n.message}
                                    </span>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        onClick={() => handleDeleteNotification(n.id)}
                                        aria-label="Delete notification"
                                    >
                                        <Trash2 className="w-4 h-4 text-gray-400 hover:text-red-600" />
                                    </Button>
                                </li>
                            ))}
                        </ul>
                    )}
                    <div className="flex justify-end mt-4">
                        <Button variant="outline" size="sm" onClick={() => setShowNotificationModal(false)}>
                            Close
                        </Button>
                    </div>
                </div>
            </Modal>
        </header>
    )
}

// Add this to your global CSS (e.g. styles/globals.css or in a <style jsx global> block)
/*
@keyframes bell-vibrate {
  0% { transform: rotate(-10deg);}
  20% { transform: rotate(10deg);}
  40% { transform: rotate(-10deg);}
  60% { transform: rotate(10deg);}
  80% { transform: rotate(-10deg);}
  100% { transform: rotate(0deg);}
}
.animate-bell-vibrate {
  animation: bell-vibrate 0.5s infinite;
}
*/