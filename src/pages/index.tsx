import Head from "next/head";
import { Navbar } from "@/components/Navbar";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";
import { Intro } from "@/components/Introducation";
import { config } from "../../data";

const SITE_TITLE = `${config.name} — ${config.title}`;
const SITE_DESCRIPTION = `${config.name} is a ${config.title} with ${config.yearsOfExperience} years building production web and mobile apps with ${config.tagline}.`;

export default function Home() {
  return (
    <div className="min-h-screen bg-surface">
      <Head>
        <title>{SITE_TITLE}</title>
        <meta name="description" content={SITE_DESCRIPTION} />
        <meta name="author" content={config.name} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={SITE_TITLE} />
        <meta property="og:description" content={SITE_DESCRIPTION} />
        <meta property="og:image" content="/assets/img/web-icon.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={SITE_TITLE} />
        <meta name="twitter:description" content={SITE_DESCRIPTION} />
        <meta name="twitter:image" content="/assets/img/web-icon.png" />
      </Head>
      <Navbar />
      <main>
        <Intro />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
    </div>
  );
}
