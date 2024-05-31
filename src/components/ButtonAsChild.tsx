import Link from "next/link"
 
import { Button } from "@/components/ui/button"
 
export function ButtonAsChild({content}:any) {
  return (
    <Button asChild>
      <Link href="/login">{content}</Link>
    </Button>
  )
}