import { Google, X } from "@mui/icons-material";
import { Button } from "./ui/button";
import { Facebook } from "lucide-react";

export default function SigninOptions() {
    return (
        <div className="flex flex-col space-y-6 items-center justify-center">
            <div className="relative flex items-center justify-center space-x-5 flex-row w-full mt-5 text-sm">
                <hr className="w-30 border-gray-500 flex self-center" />
                <span className="py-5 bg-gray-50 text-gray-500 w-fit flex self-center justify-self-center">or continue with</span>
                <hr className="w-30 border-gray-500 flex self-center" />
            </div>

            <div className="flex justify-center gap-4">
                <Button variant="outline" size="icon" className="w-8 h-8 cursor-pointer border-black rounded-full bg-transparent">
                    <Google style={{ fontSize: '16px', color: '#000' }} />
                </Button>
                <Button variant="outline" size="icon" className="w-8 h-8 cursor-pointer border-black rounded-full bg-transparent">
                    <Facebook style={{ fontSize: '25px', color: 'black' }} />
                </Button>
                <Button variant="outline" size="icon" className="w-8 h-8 cursor-pointer border-black rounded-full bg-transparent">
                    <X style={{ fontSize: '16px', color: '#000' }} />
                </Button>
            </div>
        </div>
    )
}