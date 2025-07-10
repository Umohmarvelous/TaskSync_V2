import { HomeContent } from "@/components/home-component";
import { AuthCheck } from "@/components/auth-check";

export default function DashboardHome() {
    return (
        <div>
            <AuthCheck />
            <HomeContent />
        </div>
    )
}
