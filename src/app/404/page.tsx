/**
 * v0 by Vercel.
 * @see https://v0.dev/t/EAF2ztCNBaH
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"

export default function Component({heading , content}:any) {
  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center gap-6 px-4 md:px-6 bg-gray-950">
      <div className="space-y-4 text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl text-white">{heading || "404 - Page Not Found"}</h1>
        <p className="max-w-[600px] text-gray-400 md:text-xl">
          {content || "The page you are looking for could not be found. "}
        </p>
        <Link
          href="/ldap"
          className="inline-flex h-10 items-center justify-center rounded-md bg-gray-50 px-8 text-sm font-medium text-gray-900 shadow transition-colors hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-300 disabled:pointer-events-none disabled:opacity-50"
          prefetch={false}
        >
          Back to Login
        </Link>
      </div>
    </div>
  )
}