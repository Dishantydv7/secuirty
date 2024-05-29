
import {MovingBorderDemo} from "@/components/Button"

export default function Component() {
  return (
    <section className="flex flex-col items-center justify-center h-screen w-full bg-cover bg-center">
      <div className="flex flex-col items-center space-y-4">
        <img
          alt="Hero Image"
          className="rounded-full"
          height={200}
          
          src="https://www.denofgeek.com/wp-content/uploads/2022/05/Leged-of-Zelda-Link.jpg?resize=768%2C432"
          style={{
            aspectRatio: "200/200",
            objectFit: "cover",
            
          }}
          width={200}
        />
        <h2 className="text-3xl font-bold text-white">The Secuirty Section , IIT Bombay</h2>
        <p className="text-lg text-gray-200 ">Welcome to our Website</p>
        <MovingBorderDemo className="mt-6 bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-md bottom-0" content = "sso login"></MovingBorderDemo>
      </div>
    </section>
  )
}