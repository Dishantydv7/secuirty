
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/moving-border"
import { ButtonAsChild } from "@/components/ButtonAsChild"

export default function Component() {
  return (
    <>
    <div className="text-center p-3 mt-4 border rounded-3xl ">
    <h1 className="text-4xl font-bold tracking-tight">Checklist for planning any major official/students' event</h1>
    </div>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-950 text-white">
      <div className="space-y-8 max-w-2xl w-full px-4">
        
        <div className="grid gap-6">
          <div className="grid gap-1.5">
            <Label htmlFor="name" className="text-center">Name of event</Label>
            <Input type="text" id="name" placeholder="Enter your name" />
            <p className="text-sm text-gray-400">Plciubsivcbweease provide your full name.</p>
          </div>
          <div className="grid gap-1.5">
            <Label htmlFor="name" className="text-center">Date of event</Label>
            <Input type="text" id="name" placeholder="dd/mm/yyyy" />
            <p className="text-sm text-gray-400">Please provide your full name.</p>
          </div>
          <div className="grid gap-1.5">
            <Label htmlFor="email" className="text-center">Location of event</Label>
            <Input type="email" id="email" placeholder="Enter your email" />
            <p className="text-sm text-gray-400">We&lsquo;ll never share your email with anyone else.</p>
          </div>
          <div className="grid gap-1.5">
            <Label htmlFor="email" className="text-center">Organizing Department</Label>
            <Input type="email" id="email" placeholder="Enter your email" />
            <p className="text-sm text-gray-400">We&lsquo;ll never share your email with anyone else.</p>
          </div>
          <div className="grid gap-1.5">
            <Label htmlFor="email" className="text-center">Number of participants</Label>
            <Input type="email" id="email" placeholder="Enter your email" />
            <p className="text-sm text-gray-400">We&lsquo;ll never share your email with anyone else.</p>
          </div>
          <div className="grid gap-1.5">
            <Label htmlFor="password" className="text-center">Password</Label>
            <Input type="password" id="password" placeholder="Enter a password" />
            <p className="text-sm text-gray-400">Your password must be at least 8 characters long.</p>
          </div>
          <div className="grid gap-1.5">
            <Label htmlFor="message" className="text-center">Message</Label>
            <Textarea id="message" placeholder="Enter your message" rows={4} />
            <p className="text-sm text-gray-400">Tell us what&lsquo;s on your mind.</p>
          </div>
          <div className="grid gap-1.5">
            <Label htmlFor="image" className="text-center">Image</Label>
            <Input type="file" id="image" />
            <p className="text-sm text-gray-400">Upload an image to share with us.</p>
          </div>
          <ButtonAsChild content = "Submit"></ButtonAsChild>
        </div>
      </div>
    </div>
    </>
  )
}