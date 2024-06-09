"use client"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Autoplay from "embla-carousel-autoplay"




export default function Component() {
    return (
        <div className="flex flex-col">
            <section className="w-ful m-8 ">
                <Carousel className="w-full ">
                    
                    <CarouselContent>
                        <CarouselItem>
                            <img
                                src="https://www.denofgeek.com/wp-content/uploads/2022/05/Leged-of-Zelda-Link.jpg?resize=768%2C432"
                                width={1920}
                                height={100}
                                alt="Hero Image 1"
                                className="aspect-[16/7] w-full object-cover"
                            />
                        </CarouselItem>
                        <CarouselItem>
                            <img
                                src="https://www.denofgeek.com/wp-content/uploads/2022/05/Leged-of-Zelda-Link.jpg?resize=768%2C432"
                                width={1920}
                                height={100}
                                alt="Hero Image 2"
                                className="aspect-[16/7] w-full object-cover"
                            />
                        </CarouselItem>
                        <CarouselItem>
                            <img
                                src="https://www.denofgeek.com/wp-content/uploads/2022/05/Leged-of-Zelda-Link.jpg?resize=768%2C432"
                                width={1920}
                                height={100}
                                alt="Hero Image 3"
                                className="aspect-[16/7] w-full object-cover"
                            />
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-gray-900/50 p-2 text-white hover:bg-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 dark:bg-gray-50/50 dark:text-gray-900 dark:hover:bg-gray-50">
                        <ChevronLeftIcon className="h-6 w-6" />
                    </CarouselPrevious>
                    <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-gray-900/50 p-2 text-white hover:bg-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 dark:bg-gray-50/50 dark:text-gray-900 dark:hover:bg-gray-50">
                        <ChevronRightIcon className="h-6 w-6" />
                    </CarouselNext>
                </Carousel>
            </section>
            <section className="w-full py-12 md:py-24 lg:py-32">
                <div className="container space-y-12 px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">New Features</div>
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Faster iteration. More innovation.</h2>
                            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                The platform for rapid progress. Let your team focus on shipping features instead of managing
                                infrastructure with automated CI/CD, built-in testing, and integrated collaboration.
                            </p>
                        </div>
                    </div>
                    <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
                        <div className="grid gap-1">
                            <h3 className="text-lg font-bold">Infinite scalability, zero config</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                Enable code to run on-demand without needing to manage your own infrastructure or upgrade hardware.
                            </p>
                        </div>
                        <div className="grid gap-1">
                            <h3 className="text-lg font-bold">Real-time insights and controls</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                Get granular, first-party, real-user metrics on site performance per deployment.
                            </p>
                        </div>
                        <div className="grid gap-1">
                            <h3 className="text-lg font-bold">Personalization at the edge</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                Deliver dynamic, personalized content, while ensuring users only see the best version of your site.
                            </p>
                        </div>
                        <div className="grid gap-1">
                            <h3 className="text-lg font-bold">Real-time insights and controls</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                Get granular, first-party, real-user metrics on site performance per deployment.
                            </p>
                        </div>
                        <div className="grid gap-1">
                            <h3 className="text-lg font-bold">Personalization at the edge</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                Deliver dynamic, personalized content, while ensuring users only see the best version of your site.
                            </p>
                        </div>
                        <div className="grid gap-1">
                            <h3 className="text-lg font-bold">Infinite scalability, zero config</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                Enable code to run on-demand without needing to manage your own infrastructure or upgrade hardware.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
                <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
                    <div className="space-y-3">
                        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                            Experience the workflow the best frontend teams love.
                        </h2>
                        <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                            Let your team focus on shipping features instead of managing infrastructure with automated CI/CD.
                        </p>
                    </div>
                    <div className="mx-auto w-full max-w-sm space-y-2">
                        <form className="flex space-x-2">
                            <Input type="email" placeholder="Enter your email" className="max-w-lg flex-1" />
                            <Button type="submit">Sign Up</Button>
                        </form>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                            Sign up to get notified when we launch.
                            <Link href="#" className="underline underline-offset-2" prefetch={false}>
                                Terms &amp; Conditions
                            </Link>
                        </p>
                    </div>
                </div>
            </section>
            <section className="w-full py-12 md:py-24 lg:py-32">
                <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
                    <div className="space-y-3">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Meet our Customers</h2>
                        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                            Trusted by the best teams in the world. We help teams of all sizes.
                        </p>
                    </div>
                    <div className="divide-y rounded-lg border">
                        <div className="grid w-full grid-cols-3 items-stretch justify-center divide-x md:grid-cols-3">
                            <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                                <img
                                    src="/placeholder.svg"
                                    width="140"
                                    height="70"
                                    alt="Logo"
                                    className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                                />
                            </div>
                            <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                                <img
                                    src="/placeholder.svg"
                                    width="140"
                                    height="70"
                                    alt="Logo"
                                    className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                                />
                            </div>
                            <div className="mx-auto flex w-full items-center justify-center p-8">
                                <img
                                    src="/placeholder.svg"
                                    width="140"
                                    height="70"
                                    alt="Logo"
                                    className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                                />
                            </div>
                        </div>
                        <div className="grid w-full grid-cols-3 items-stretch justify-center divide-x md:grid-cols-3">
                            <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                                <img
                                    src="/placeholder.svg"
                                    width="140"
                                    height="70"
                                    alt="Logo"
                                    className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                                />
                            </div>
                            <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                                <img
                                    src="/placeholder.svg"
                                    width="140"
                                    height="70"
                                    alt="Logo"
                                    className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                                />
                            </div>
                            <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                                <img
                                    src="/placeholder.svg"
                                    width="140"
                                    height="70"
                                    alt="Logo"
                                    className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center space-x-4">
                        <Link
                            href="#"
                            className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                            prefetch={false}
                        >
                            Contact Sales
                        </Link>
                        <Link
                            href="#"
                            className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                            prefetch={false}
                        >
                            Learn more
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

function ChevronLeftIcon(props:any) {
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
            <path d="m15 18-6-6 6-6" />
        </svg>
    )
}


function ChevronRightIcon(props:any) {
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
            <path d="m9 18 6-6-6-6" />
        </svg>
    )
}