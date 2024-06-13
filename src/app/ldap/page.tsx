import PauseOnHover from "../../components/CaraouselImage";
import { MovingBorderDemo } from "@/components/ButtonWithLink";

export default function Ldap() {
  return (
    <>
      <div className="m-3 mt-8">
        <PauseOnHover />
      </div>
      <section className="flex flex-col items-center justify-center w-full bg-cover bg-center mt-2">
        <div className="flex flex-col items-center space-y-4">
          <h2 className="text-3xl font-bold text-white">The Secuirty Section, IIT Mumbai</h2>
          <p className="text-lg text-gray-200">Welcome to our Website</p>
          
          <MovingBorderDemo
            className="mt-6 bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-md bottom-0"
            content="Enter"
            link="/dashboard"
          />
        </div>
      </section>

    </>
  );
}