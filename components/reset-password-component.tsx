import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { DashboardHeader } from "@/components/dashboard-header-component"

export function PasswordReset() {
    return (
        <div className="min-h-screen bg-gray-50">
            <DashboardHeader />
            <div className="flex items-center justify-center min-h-[calc(100vh-88px)] p-8 pt-2">
                <Card className="w-full max-w-md p-8 space-y-6">
                    <form className="space-y-10">
                        <div>
                            <Label htmlFor="currentPassword" className="mb-5">Enter password</Label>
                            <Input id="currentPassword" type="password" required placeholder="Enter email received from mail" className="mt-1" />
                        </div>

                        <div>
                            <Label htmlFor="newPassword" className="mb-5">Enter new password</Label>
                            <Input id="newPassword" type="password" required placeholder="Enter new password" className="mt-1" />
                        </div>

                        <div>
                            <Label htmlFor="confirmPassword" className="mb-5">Confirm new password</Label>
                            <Input id="confirmPassword" type="password" required placeholder="Confirm new password" className="mt-1" />
                        </div>

                        <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white mt-4">Submit</Button>
                    </form>
                </Card>
            </div>
        </div>
    )
}
