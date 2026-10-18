import { useState } from 'react'
import arezoImage from './assets/arezo.jpg'
const skills = [
'HTML5',
'CSS3',
'JavaScript',
'React',
'Tailwind CSS',
'Git & GitHub',
'REST APIs',
'Responsive Design',
]

const projects = [
{
title: 'MyPatientHUB',
description:
'A healthcare website designed to help users find doctors and clinics.',
technologies: ['React', 'Tailwind CSS', 'JavaScript'],
number: '01',
},
{
title: 'Country Finder',
description:
'A web application for exploring countries and viewing information using an API.',
technologies: ['React', 'JavaScript', 'REST API'],
number: '02',
},
{
title: 'Smart Book Library',
description:
'A digital library application for organizing and managing books.',
technologies: ['React', 'JavaScript', 'Local Storage'],
number: '03',
},
]

function App() {
const [menuOpen, setMenuOpen] = useState(false)

return (
<div className="min-h-screen bg-[#090909] text-white">
{/* Navbar */}
<header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#090909]/95">
<nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
<a href="#home" className="text-2xl font-black">
AREZO<span className="text-yellow-400">.</span>
</a>

      <button
        type="button"
        className="text-2xl text-yellow-400 md:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? '✕' : '☰'}
      </button>

      <div
        className={`${
          menuOpen ? 'flex' : 'hidden'
        } absolute left-0 top-full w-full flex-col gap-5 border-b border-white/10 bg-[#090909] p-6 md:static md:flex md:w-auto md:flex-row md:items-center md:border-0 md:p-0`}
      >
        {['Home', 'About', 'Skills', 'Projects', 'Contact'].map(
          (item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="text-sm text-gray-300 transition hover:text-yellow-400"
            >
              {item}
            </a>
          ),
        )}

        <a
          href="#contact"
          onClick={() => setMenuOpen(false)}
          className="rounded-full bg-yellow-400 px-5 py-3 text-center text-sm font-bold text-black hover:bg-yellow-300"
        >
          Contact Me
        </a>
      </div>
    </nav>
  </header>

  <main>
    {/* Hero */}
    <section
      id="home"
      className="mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-6 pb-20 pt-32 md:grid-cols-2 lg:px-12"
    >
      <div>
        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-yellow-400">
          Welcome to my portfolio
        </p>

        <p className="mb-3 text-lg text-gray-400">
          Hi, I'm Arezo Ahmadi
        </p>

        <h1 className="text-5xl font-black leading-tight sm:text-6xl lg:text-7xl">
          Aspiring
          <br />
          <span className="text-yellow-400">Full-Stack</span>
          <br />
          Developer<span className="text-yellow-400">.</span>
        </h1>

        <p className="mt-6 max-w-xl leading-8 text-gray-400">
          I'm passionate about web development, building user-friendly
          websites, and learning modern technologies to create useful
          digital experiences.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-full bg-yellow-400 px-7 py-4 font-bold text-black transition hover:-translate-y-1 hover:bg-yellow-300"
          >
            View My Projects ↗
          </a>

          <a
            href="#contact"
            className="rounded-full border border-white/20 px-7 py-4 font-semibold hover:border-yellow-400 hover:text-yellow-400"
          >
            Contact Me
          </a>
        </div>

        <div className="mt-12 flex flex-wrap gap-8 border-t border-white/10 pt-7">
          <div>
            <p className="font-bold text-yellow-400">Frontend</p>
            <p className="mt-1 text-sm text-gray-500">Development</p>
          </div>

          <div>
            <p className="font-bold text-yellow-400">Intermediate</p>
            <p className="mt-1 text-sm text-gray-500">English</p>
          </div>

          <div>
            <p className="font-bold text-yellow-400">Afghanistan</p>
            <p className="mt-1 text-sm text-gray-500">My Home</p>
          </div>
        </div>
      </div>

      {/* Profile placeholder */}
      <div className="mx-auto w-full max-w-sm">
        <div className="flex aspect-[4/5] flex-col items-center justify-center rounded-[2rem] border border-yellow-400/30 bg-gradient-to-br from-yellow-400/15 to-[#111111] p-8 text-center">
         <div className="h-44 w-44 overflow-hidden rounded-full border-2 border-yellow-400 bg-[#090909]">
       <img src={arezoImage} alt="Arezo Ahmadi" className="block h-full w-full rounded-full object-cover object-center" onError={(e) => {
      console.error('Profile image could not be loaded:', e.currentTarget.src)
    }}
  />
  </div>

          <h2 className="mt-7 text-2xl font-bold">Arezo Ahmadi</h2>

          <p className="mt-3 text-sm text-gray-400">
            Aspiring Full-Stack Developer
          </p>

          <p className="mt-5 text-sm text-gray-500">
            Badakhshan, Afghanistan
          </p>

        </div>
      </div>
    </section>

    {/* About */}
    <section id="about" className="scroll-mt-24 border-y border-white/10 bg-[#101010]">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-24 md:grid-cols-2 lg:px-12">
        <div>
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-yellow-400">
            About Me
          </p>

          <h2 className="text-4xl font-black sm:text-5xl">
            Get to Know <span className="text-yellow-400">Me.</span>
          </h2>
        </div>

        <div className="space-y-5 leading-8 text-gray-400">
          <p>
            My name is Arezo Ahmadi, and I'm from Badakhshan, Afghanistan.
            I have completed grade twelve and am passionate about
            technology and web development.
          </p>

          <p>
            I'm developing my front-end skills and working toward my
            long-term goal of becoming a full-stack developer.
          </p>

          <p>
            I enjoy learning new technologies, solving problems, and
            building accessible and user-friendly websites.
          </p>
        </div>
      </div>
    </section>

    {/* Education */}
    <section id="education" className="mx-auto max-w-7xl px-6 py-24 lg:px-12">
      <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-yellow-400">
        Education
      </p>

      <h2 className="mb-10 text-4xl font-black">
        Academic <span className="text-yellow-400">Background.</span>
      </h2>

      <div className="rounded-2xl border border-white/10 bg-[#111111] p-8">
        <p className="text-sm font-semibold text-yellow-400">
          COMPLETED
        </p>

        <h3 className="mt-4 text-2xl font-bold">
          High School Graduate
        </h3>

        <p className="mt-3 text-gray-400">
          Grade 12 · Afghanistan
        </p>

        <p className="mt-4 leading-7 text-gray-500">
          I have completed my high school education and continue to develop
          my technical skills through independent learning and practical
          projects.
        </p>
      </div>
    </section>

    {/* Skills */}
    <section id="skills" className="scroll-mt-24 border-y border-white/10 bg-[#101010]">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-12">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-yellow-400">
          My Toolkit
        </p>

        <h2 className="mb-12 text-4xl font-black sm:text-5xl">
          Skills & <span className="text-yellow-400">Technologies.</span>
        </h2>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {skills.map((skill, index) => (
            <div
              key={skill}
              className="rounded-2xl border border-white/10 bg-[#151515] p-6 transition hover:-translate-y-1 hover:border-yellow-400/50"
            >
              <p className="mb-5 text-sm text-yellow-400">
                {String(index + 1).padStart(2, '0')}
              </p>

              <h3 className="font-bold">{skill}</h3>
            </div>
          ))}
        </div>

        <p className="mt-7 text-sm leading-7 text-gray-500">
          These are the technologies and tools I'm learning and using in
          my web development journey.
        </p>
      </div>
    </section>

    {/* Projects */}
    <section id="projects" className="scroll-mt-24">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-12">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-yellow-400">
          My Work
        </p>

        <h2 className="mb-12 text-4xl font-black sm:text-5xl">
          Featured <span className="text-yellow-400">Projects.</span>
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.number}
              className="overflow-hidden rounded-3xl border border-white/10 bg-[#111111] transition hover:-translate-y-2 hover:border-yellow-400/40"
            >
              <div className="flex h-44 items-center justify-center bg-gradient-to-br from-yellow-400/20 to-[#111111]">
                <span className="text-7xl font-black text-yellow-400">
                  {project.number}
                </span>
              </div>

              <div className="p-7">
                <h3 className="text-xl font-bold">{project.title}</h3>

                <p className="mt-4 min-h-20 text-sm leading-7 text-gray-400">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-white/10 px-3 py-2 text-xs text-gray-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://github.com/Arezo0101"
            target="_blank"
            rel="noreferrer"
            className="inline-block rounded-full border border-yellow-400 px-7 py-4 font-semibold text-yellow-400 transition hover:bg-yellow-400 hover:text-black"
          >
            Visit My GitHub ↗
          </a>
        </div>

        <p className="mt-7 text-center text-xs leading-6 text-gray-500">
          Project descriptions should be checked against your actual work
          before the portfolio is published.
        </p>
      </div>
    </section>

    {/* Experience */}
    <section id="experience" className="scroll-mt-24 border-y border-white/10 bg-[#101010]">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-12">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-yellow-400">
          My Journey
        </p>

        <h2 className="mb-8 text-4xl font-black">
          Experience & <span className="text-yellow-400">Growth.</span>
        </h2>

        <div className="rounded-2xl border border-white/10 bg-[#151515] p-8">
          <h3 className="text-xl font-bold">Continuous Learning</h3>

          <p className="mt-4 max-w-2xl leading-8 text-gray-400">
            I'm developing my technical and professional skills through
            independent learning and practical web development projects.
            My goal is to grow into a capable full-stack developer.
          </p>
        </div>
      </div>
    </section>

    {/* Contact */}
    <section id="contact" className="scroll-mt-24 mx-auto max-w-7xl px-6 py-24 lg:px-12">
      <div className="rounded-[2rem] border border-yellow-400/20 bg-gradient-to-br from-yellow-400/10 to-[#111111] p-8 sm:p-12 lg:p-16">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-yellow-400">
          Get In Touch
        </p>

        <h2 className="max-w-3xl text-4xl font-black leading-tight sm:text-6xl">
          Let's Build Something
          <br />
          <span className="text-yellow-400">Meaningful.</span>
        </h2>

        <p className="mt-6 max-w-xl leading-8 text-gray-400">
          I'm interested in learning opportunities, internships, and
          collaborations that help me grow as a developer.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="mailto:arezoahmadiarezo1@gmail.com"
            className="rounded-full bg-yellow-400 px-7 py-4 font-bold text-black transition hover:bg-yellow-300"
          >
            Email Me ↗
          </a>

          <a
            href="https://github.com/Arezo0101"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/20 px-7 py-4 font-semibold transition hover:border-yellow-400 hover:text-yellow-400"
          >
            GitHub ↗
          </a>
        </div>

        <p className="mt-8 break-all border-t border-white/10 pt-6 text-sm text-gray-400">
          arezoahmadiarezo1@gmail.com
        </p>
      </div>
    </section>
  </main>

  {/* Footer */}
  <footer className="border-t border-white/10 px-6 py-8">
    <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center sm:flex-row">
      <a href="#home" className="text-xl font-black">
        AREZO<span className="text-yellow-400">.</span>
      </a>

      <p className="text-sm text-gray-500">
        © {new Date().getFullYear()} Arezo Ahmadi. Built with React.
      </p>

      <a
        href="#home"
        className="text-sm text-gray-400 hover:text-yellow-400"
      >
        Back to Top ↑
      </a>
    </div>
  </footer>
</div>

)
}

export default App