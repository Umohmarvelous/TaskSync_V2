import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { Header } from "./header"

export function PasswordReset() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            <div className="flex items-center justify-center min-h-[calc(100vh-88px)] p-8">
                <Card className="w-full max-w-md p-8 space-y-6">
                    <form className="space-y-6">
                        <div>
                            <Label htmlFor="currentPassword">Enter password</Label>
                            <Input
                                id="currentPassword"
                                type="password"
                                placeholder="Enter email received from mail"
                                className="mt-1"
                            />
                        </div>

                        <div>
                            <Label htmlFor="newPassword">Enter new password</Label>
                            <Input id="newPassword" type="password" placeholder="Enter new password" className="mt-1" />
                        </div>

                        <div>
                            <Label htmlFor="confirmPassword">Confirm new password</Label>
                            <Input id="confirmPassword" type="password" placeholder="Confirm new password" className="mt-1" />
                        </div>

                        <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">Submit</Button>
                    </form>
                </Card>
            </div>
        </div>
    )
}
