import { Sidebar } from "@/components/side-bar-component"
import { Header } from "@/components/header"
import { HomeContent } from "@/components/home-component"
import { ForgotPassword } from "@/components/forgot-password-component"
import { UserTypeSelection } from "@/components/user-type-selection"
import Welcome from "./welcome/page"

export default function HomePage() {
  return (
    // <div className="min-h-auto bg-gray-50">
    //   <Sidebar />
    //   <div className="ml-64">
    //     <Header />
    //     <main className="pt-16">
    //       <HomeContent />
    //     </main>
    //   </div>
    // </div>
    <div>
      <Welcome />
    </div>
  )
}
