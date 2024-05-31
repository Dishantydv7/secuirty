"use client";
import Link from "next/link"
import { MovingBorderDemo } from "@/components/ButtonNoLink"
import { useState } from "react"
import { useRouter } from 'next/navigation'
import { ButtonAsChild } from "@/components/ButtonAsChild";
import { Button } from "@mui/material";

export default function Terms() {


  const [isChecked, setIsChecked] = useState(false)
  const router = useRouter();
  const push = () => {
    if (isChecked === true) {
      router.push("/dashboard")
    } else {
      router.push("/404")
    }
  }

  function handleChange() {
    setIsChecked(!isChecked)
   }


  return (
    <div className="relative h-screen w-full">
      <div className="absolute top-4 left-4">
        <Link href="#">
          <img src="https://www.computerhope.com/jargon/l/link.jpg" alt="Acme Inc" className="h-8 w-8" />
          <span className="sr-only">Acme Inc</span>
        </Link>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] max-w-full rounded-3xl bg-gray-900 p-8 text-center shadow-lg dark:bg-gray-800">
        <div className="space-y-4 py-5">
          <h1 className="text-3xl font-bold text-gray-50 md:text-4xl pb-8 ">Welcome to Acme Inc</h1>
          <p className="text-gray-400">The information contained in this site is meant purely for the IIT Bombay
                        Employees and Students or any such person so authorised by
                        CSO/Registrar/HoDs/ Deans/ DDs/ Director</p>
            <p className="text-gray-400">The information provided here is subject to the Indian Official Act 1958 and as revised</p>
            <p className="text-gray-400">The information contained here might also be exempted under RTI Act,</p>
            <p className="text-gray-400">It is prohibited to share the information with any third party without the approval of the competent authority. The information can not be shared with press in any form</p>
        </div>

        {/* <CheckboxLabels  /> */}
        <input value="test" type="checkbox" onChange={() => setIsChecked(!isChecked)} />
        
        <div className="mt-8">
          <Button onClick={() => isChecked ? router.push("/dashboard") : router.push("/404")}>
            Continue
          </Button>
        </div>
      </div>
    </div>
  )
}

function ArrowRightIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}


function MountainIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}