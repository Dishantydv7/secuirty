"use client"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function Component() {

    const router = useRouter()


  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-100 dark:bg-gray-950">
      <div className="mx-4 w-full max-w-md rounded-lg bg-white p-8 shadow-lg dark:bg-gray-900">
        <div className="flex flex-col items-center space-y-4">
          <TriangleAlertIcon className="h-12 w-12 text-red-500" />
          <h1 className="text-2xl font-bold text-red-500">Invalid Credentials</h1>
          <p className="text-center text-gray-500 dark:text-gray-400">
            The email or password you entered is incorrect. Please try again or navigate to the login page.
          </p>
          <div className="flex w-full flex-col gap-2 sm:flex-row">
            <Button variant="outline" className="flex-1" onClick={() => (
                router.push('/photos')
            )}>
              Try Again
            </Button>
            <Link
              href="/dashboard"
              className="flex-1 rounded-lg bg-red-500 px-4 py-2 text-center text-white transition-colors hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
              prefetch={false}
            >
              Go to Main Menu
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

function TriangleAlertIcon(props:any) {
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
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
      <path d="M12 9v4" />
      <path d="M12 17h.01" />
    </svg>
  )
}