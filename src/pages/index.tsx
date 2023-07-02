import { Navbar } from "@/components/Navbar";
import { config } from "../../data";
import { About } from "@/components/About";

export default function Home() {
  return (
    <div className="">
      <div>
        <Navbar />
      </div>
      <div className="flex flex-col md:ml-48">
        <div className="h-screen bg-green-200"></div>
        <About />
        <div id="projects" className="h-screen w-full bg-gray-400"></div>
        <div id="education" className="h-screen w-full bg-orange-300"></div>
      </div>
    </div>
  );
}
