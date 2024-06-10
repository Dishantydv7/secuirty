"use client"
import { Button } from "@/components/ui/button"
import { PDFViewer } from '@react-pdf/renderer';
import { useRouter } from "next/navigation";
import { useState , useEffect } from "react";





export default function Component() {

  const [buttonColor_1, setButtonColor_1] = useState('white');
  const [buttonColor_2, setButtonColor_2] = useState('white');
  const [buttonColor_3, setButtonColor_3] = useState('white');
  const [buttonColor_4, setButtonColor_4] = useState('white');

   useEffect(() => {
    const buttonClicked_1 = localStorage.getItem('buttonClicked_1');
    const buttonClicked_2 = localStorage.getItem('buttonClicked_2');
    const buttonClicked_3 = localStorage.getItem('buttonClicked_3');
    const buttonClicked_4 = localStorage.getItem('buttonClicked_4');

    if (buttonClicked_1 === '1') {
      setButtonColor_1('#4f60ab');
    }
    if (buttonClicked_2 === '1') {
      setButtonColor_2('#4f60ab');
    }
    if (buttonClicked_3 === '1') {
      setButtonColor_3('#4f60ab');
    }
    if (buttonClicked_4 === '1') {
      setButtonColor_4('#4f60ab');
    }
  }, []);


  const router = useRouter();
  return (
    <>
    <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-6">PDF Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div className="bg-black border-2 border-solid  border-white rounded-lg shadow-md overflow-hidden">
          <div className="aspect-w-4 aspect-h-3 m-1.5">
            <img
              src="https://www.denofgeek.com/wp-content/uploads/2022/05/Leged-of-Zelda-Link.jpg?resize=768%2C432"
              alt="PDF Thumbnail"
              width={400}
              height={300}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="p-4 ">
            <h3 className="text-lg font-semibold truncate">Annual Report 2023.pdf</h3>
            <div className="flex justify-end mt-4">
              <Button style={{ backgroundColor: buttonColor_1 }}  
                onClick={() => {
                  localStorage.setItem('buttonClicked_1', '1');
                  router.push("https://www.clickdimensions.com/links/TestPDFfile.pdf")
                }}
              >
                <EyeIcon className="w-5 h-5 mr-2" />
                View PDF
              </Button>
            </div>
          </div>
        </div>
        <div className="bg-black border-2 border-solid  border-white rounded-lg shadow-md overflow-hidden">
          <div className="aspect-w-4 aspect-h-3 m-1.5">
            <img
              src="https://www.denofgeek.com/wp-content/uploads/2022/05/Leged-of-Zelda-Link.jpg?resize=768%2C432"
              alt="PDF Thumbnail"
              width={400}
              height={300}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold truncate">Marketing Presentation.pdf</h3>
            <div className="flex justify-end mt-4">
              <Button style={{ backgroundColor: buttonColor_2 }}  
                onClick={() => {
                  localStorage.setItem('buttonClicked_2', '1');
                  router.push("https://www.clickdimensions.com/links/TestPDFfile.pdf")
                }}>
                <EyeIcon className="w-5 h-5 mr-2" />
                View PDF
              </Button>
            </div>
          </div>
        </div>
        <div className="bg-black border-2 border-solid  border-white rounded-lg shadow-md overflow-hidden">
          <div className="aspect-w-4 aspect-h-3 m-1.5">
            <img
              src="https://www.denofgeek.com/wp-content/uploads/2022/05/Leged-of-Zelda-Link.jpg?resize=768%2C432"
              alt="PDF Thumbnail"
              width={400}
              height={300}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold truncate">Product Roadmap.pdf</h3>
            <div className="flex justify-end mt-4">
              <Button style={{ backgroundColor: buttonColor_3 }}  
                onClick={() => {
                  localStorage.setItem('buttonClicked_3', '1');
                  router.push("https://www.clickdimensions.com/links/TestPDFfile.pdf")
                }}>
                <EyeIcon className="w-5 h-5 mr-2" />
                View PDF
              </Button>
            </div>
          </div>
        </div>
        <div className="bg-black border-2 border-solid  border-white rounded-lg shadow-md overflow-hidden">
          <div className="aspect-w-4 aspect-h-3 m-1.5">
            <img
              src="https://www.denofgeek.com/wp-content/uploads/2022/05/Leged-of-Zelda-Link.jpg?resize=768%2C432"
              alt="PDF Thumbnail"
              width={400}
              height={300}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold truncate">Financial Statements.pdf</h3>
            <div className="flex justify-end mt-4">
              <Button style={{ backgroundColor: buttonColor_4 }}  
                onClick={() => {
                  localStorage.setItem('buttonClicked_4', '1');
                  router.push("https://www.clickdimensions.com/links/TestPDFfile.pdf")
                }}>
                <EyeIcon className="w-5 h-5 mr-2" />
                View PDF
              </Button>
            </div>
          </div>
        </div>
        {/* <div className="bg-black border-2 border-solid  border-white rounded-lg shadow-md overflow-hidden">
          <div className="aspect-w-4 aspect-h-3 m-1.5">
            <img
              src="https://www.denofgeek.com/wp-content/uploads/2022/05/Leged-of-Zelda-Link.jpg?resize=768%2C432"
              alt="PDF Thumbnail"
              width={400}
              height={300}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold truncate">User Manual.pdf</h3>
            <div className="flex justify-end mt-4">
              <Button onClick={() => {
              router.push("https://www.clickdimensions.com/links/TestPDFfile.pdf")
              }}>
                <EyeIcon className="w-5 h-5 mr-2" />
                View PDF
              </Button>
            </div>
          </div>
        </div>
        <div className="bg-black border-2 border-solid  border-white rounded-lg shadow-md overflow-hidden">
          <div className="aspect-w-4 aspect-h-3 m-1.5">
            <img
              src="https://www.denofgeek.com/wp-content/uploads/2022/05/Leged-of-Zelda-Link.jpg?resize=768%2C432"
              alt="PDF Thumbnail"
              width={400}
              height={300}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold truncate">Project Proposal.pdf</h3>
            <div className="flex justify-end mt-4">
              <Button onClick={() => {
              router.push("https://www.clickdimensions.com/links/TestPDFfile.pdf")
              }}>
                <EyeIcon className="w-5 h-5 mr-2" />
                View PDF
              </Button>
            </div>
          </div>
        </div>
        <div className="bg-black border-2 border-solid  border-white rounded-lg shadow-md overflow-hidden">
          <div className="aspect-w-4 aspect-h-3 m-1.5">
            <img
              src="https://www.denofgeek.com/wp-content/uploads/2022/05/Leged-of-Zelda-Link.jpg?resize=768%2C432"
              alt="PDF Thumbnail"
              width={400}
              height={300}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold truncate">Sales Report.pdf</h3>
            <div className="flex justify-end mt-4">
              <Button onClick={() => {
              router.push("https://www.clickdimensions.com/links/TestPDFfile.pdf")
              }}>
                <EyeIcon className="w-5 h-5 mr-2" />
                View PDF
              </Button>
            </div>
          </div>
        </div>
        <div className="bg-black border-2 border-solid  border-white rounded-lg shadow-md overflow-hidden">
          <div className="aspect-w-4 aspect-h-3 m-1.5">
            <img
              src="https://www.denofgeek.com/wp-content/uploads/2022/05/Leged-of-Zelda-Link.jpg?resize=768%2C432"
              alt="PDF Thumbnail"
              width={400}
              height={300}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold truncate">HR Policies.pdf</h3>
            <div className="flex justify-end mt-4 m-1.5">
              <Button onClick={() => {
              router.push("https://www.clickdimensions.com/links/TestPDFfile.pdf")
              }}>
                <EyeIcon className="w-5 h-5 mr-2" />
                View PDF
              </Button>
            </div>
          </div> 
        </div>*/}
      </div>
    </div>
    </>
  )
}

function EyeIcon(props:any) {
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
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}