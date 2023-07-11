import { Navbar } from "@/components/Navbar";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";
import { Intro } from "@/components/Introducation";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <div className="flex flex-col md:ml-48">
        {/* <div className="h-screen"></div> */}
        <Intro />
        <About />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </div>
    </div>
  );
}
