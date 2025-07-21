"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { ArrowUpRight } from "lucide-react"
import { useEffect, useState } from "react"

interface User {
  id: number;
  // firstName: string;
  lastName: string;

}

export default function HomeContent() {
  const [userName, setUserName] = useState("No user")
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userId = localStorage.getItem('userId')
        if (!userId) {
          setLoading(false)
          return
        }

        const response = await fetch(`http://localhost:3001/api/users/${userId}`)
        if (!response) {
          throw new Error('Failed to fetch user data')
        }

        const userData: User = await response.json()
        const lastName = `${userData.lastName}`

        if (lastName) {
          setUserName(lastName)
        }

      } catch (error) {
        console.error('Error fetching user data:', error)
        // Fallback to default values
        setUserName("Jane")
        // setUserRole("Freelancer")
      } finally {
        setLoading(false)
      }
    }

    fetchUserData()
  }, [])


  return (
    <div className="p-6 mb-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Welcome,  {userName}</h1>

      {/* Action Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-3 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
          <Card className="bg-[#cde1fe]">
            <CardHeader className="sm:pb-4 pb-0 ">
              <CardTitle className="text-xl font-semibold text-gray-900">Create Profile</CardTitle>
              <CardDescription className="text-gray-600">
                Set up your profile to personalize your workspace
              </CardDescription>
            </CardHeader>
            <CardContent className="w-full flex items-center justify-center sm:justify-end">
              <Button className="bg-[#0d2c49] hover:bg-[#2a4a6b] text-white">Add members</Button>
            </CardContent>
          </Card>

          <Card className="border-2 border-gray-900">
            <CardHeader className="sm:pb-4 pb-0 ">
              <CardTitle className="text-xl font-semibold text-gray-900">Add your Team mates</CardTitle>
              <CardDescription className="text-gray-600">
                Invite your team to start collaborating seamlessly
              </CardDescription>
            </CardHeader>
            <CardContent className="w-full flex items-center justify-center sm:justify-end">
              <Button className="bg-[#0d2c49] hover:bg-[#2a4a6b] text-white">Add members</Button>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-[#dac3da]">
          <CardHeader className="sm:pb-4 pb-0 ">
            <CardTitle className="text-xl font-semibold text-gray-900">Set milestones and goals</CardTitle>
            <CardDescription className="text-gray-600">
              Define your goals and milestones to track progress effortlessly
            </CardDescription>
          </CardHeader>
          <CardContent className="w-full flex items-center justify-center sm:justify-end">
            <Button className="bg-[#0d2c49] hover:bg-[#2a4a6b] text-white">Create goals</Button>
          </CardContent>
        </Card>
      </div>
      {/* Dashboard Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="lg:col-span-1 bg-transparent flex flex-col items-center justify-between pb-4">
          <h2 className="p-0 m-0 text-xl text-left font-semibold text-gray-900">Your all-in-one workspace</h2>
          <p className="text-sm text-gray-600 p-0 m-0 text-left font-semibold">Use TaskSync to keep track of leads, projects and tasks</p>
        </div>


        <Card className="bg-[#e3e3e3] hover:bg-gray-100 cursor-pointer flex flex-col items-center justify-between">
          <CardHeader className="mb-2 w-full">
            <CardTitle className="text-xl font-semibold text-left text-gray-900">Projects</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-row items-center justify-between pb-2">
            <p className="text-sm text-gray-600 text-left">Project updates will show here</p>
            <ArrowUpRight className="h-5 w-5 text-gray-400" />
          </CardContent>
        </Card>
        <Card className="bg-[#e3e3e3] hover:bg-gray-100 cursor-pointer flex flex-col items-center justify-between">
          <CardHeader className="mb-2 w-full">
            <CardTitle className="text-xl font-semibold text-left text-gray-900">Board</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-row items-center justify-between pb-2">
            <p className="text-sm text-gray-600 text-left">No new ideas</p>
            <ArrowUpRight className="h-5 w-5 text-gray-400" />
          </CardContent>
        </Card>
        <Card className="bg-[#e3e3e3] hover:bg-gray-100 cursor-pointer flex flex-col items-center justify-between">
          <CardHeader className="mb-2 w-full">
            <CardTitle className="text-xl font-semibold text-left text-gray-900">Tasks</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-row items-center justify-between pb-2">
            <p className="text-sm text-gray-600 text-left">Your tasks will show here</p>
            <ArrowUpRight className="h-5 w-5 text-gray-400" />
          </CardContent>
        </Card>
      </div>

      {/* Task Progress */}
      <div>
        <hr className="my-4" />
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="text-sm bg-transparent">
            7 days
          </Button>
          <Button size="sm" className="bg-[#1e3a5f] hover:bg-[#2a4a6b] text-white text-sm">
            30 days
          </Button>
          <Button variant="outline" size="sm" className="text-sm bg-transparent">
            1 year
          </Button>
        </div>
        <div>
          <h1 className="text-xl font-semibold text-gray-900 text-left my-3">Task Progress</h1>
          <Card className="border-none border-transparent bg-transparent shadow-none flex flex-col items-start m-0 p-0">
            <CardTitle className="text-md font-normal text-gray-600 text-left flex self-start justify-self-start">Incoming tasks will show here</CardTitle>
          </Card>
        </div>
      </div>
    </div>
  )
}
