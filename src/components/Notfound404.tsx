import Link from 'next/link'
 
export default function NotFound({leftcontent , rightcontent}:any) {
  return (
    <div>
      <h2>{leftcontent}</h2>
      <p>{rightcontent}</p>
      <Link href="/">Return Home</Link>
    </div>
  )
}