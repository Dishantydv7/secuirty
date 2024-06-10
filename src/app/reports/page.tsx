"use client"
import * as React from "react"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"


import { useState } from "react"
import { useRouter } from "next/navigation"

export default function CardWithForm() {

    const router = useRouter()

    const [username, setUsername] = useState("")
    const [pass, setPass] = useState("")
    const handleSubmit = (e: any) => {
        e.preventDefault()
        console.log(pass)
        console.log(username)
        if (username == "DD.AIA" && pass == "0=3><)NOG3k4") {
            router.push("/69lXCTIVinWtfhhBMrUuQflivs9a7ujqlF")
        } else if (username == "DD.FEA" && pass == "24W'qK(Ls,V6") {
            router.push("/69lXCTIVinWtfhhBMrUuQflivs9a7ujqlF")
        }
        else if (username == "Dean.AA" && pass == "%Wf=13Y`lk!2") {
            router.push("/69lXCTIVinWtfhhBMrUuQflivs9a7ujqlF")
        }
        else if (username == "Registrar" && pass == "7d>52PE7.}Ez") {
            router.push("/69lXCTIVinWtfhhBMrUuQflivs9a7ujqlF")
        }
        else if (username == "CSO" && pass == "MP%1hB<Y9P6%") {
            router.push("/69lXCTIVinWtfhhBMrUuQflivs9a7ujqlF")
        }
        else if (username == "ASO" && pass == "|1h0I8!l_T@1") {
            router.push("/69lXCTIVinWtfhhBMrUuQflivs9a7ujqlF")
        }
        else if (username == "Director" && pass == "tjsR0hz>8A1J") {
            router.push("/69lXCTIVinWtfhhBMrUuQflivs9a7ujqlF")
        }
        else if ((username == "dishant") && pass == "dishant") {
            router.push("/69lXCTIVinWtfhhBMrUuQflivs9a7ujqlF")
        }
        else {
            router.push("/Error")
        }
    }


    return (
        <div className="flex justify-center items-center h-screen">
            <Card className="w-[350px]">
                <CardHeader className="mt-4 mb-4">
                    <CardTitle className="text-center mb-4">Login</CardTitle>
                    <CardDescription className="text-center">Login with your credentials to visit Reports</CardDescription>
                </CardHeader>
                <CardContent className="max-w-[500px]">
                    <form className="flex  flex-col gap-3" onSubmit={handleSubmit}>
                            <Input  type="username" placeholder="Enter your UserID" onChange={(e) => { setUsername(e.target.value) }} value={username} className="max-w-lg flex-1" />
                            <Input type="password" placeholder="Enter your password" onChange={(e) => { setPass(e.target.value) }} value={pass} className="max-w-lg flex-1" />
                            <Button className="m-3 mt-5" type="submit">Login</Button>
                        </form>
                </CardContent>
                <CardFooter className="flex justify-between">
                    {/* <Button variant="outline">Cancel</Button> */}
                    
                </CardFooter>
            </Card>
        </div>
    )
}