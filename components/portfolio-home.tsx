"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Download,
  ExternalLink,
  Github,
  Mail,
  MapPin,
  Sparkles
} from "lucide-react";
import {
  achievements,
  githubShowcase,
  interests,
  profile,
  projects,
  skills,
  socials
} from "@/data/portfolio";
import { BackgroundAura } from "@/components/background-aura";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { HeroVisual } from "@/components/hero-visual";
import { Navbar } from "@/components/navbar";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 }
};

function MotionSection({
  children,
  className = "",
  id
}: {
  children: React.ReactNode;
  className?: string;
  id: string;
}) {
  return (
    <motion.section
      className={`section-shell scroll-mt-28 py-20 ${className}`}
      id={id}
      initial="hidden"
      transition={{ duration: 0.65, ease: "easeOut" }}
      variants={fadeUp}
      viewport={{ once: true, margin: "-120px" }}
      whileInView="visible"
    >
      {children}
    </motion.section>
  );
}

export function PortfolioHome() {
  return (
    <>
      <BackgroundAura />
      <Navbar />
      <main id="home">
        <section className="section-shell grid min-h-screen grid-cols-1 items-center gap-12 pb-16 pt-32 lg:grid-cols-[1.04fr_0.96fr] lg:pt-28">
          <motion.div
            animate="visible"
            className="max-w-3xl"
            initial="hidden"
            transition={{ staggerChildren: 0.11 }}
          >
            <motion.div variants={fadeUp}>
              <Badge>
                <Sparkles className="size-3.5" />
                {profile.status}
              </Badge>
            </motion.div>
            <motion.h1
              className="mt-6 text-5xl font-black leading-[0.98] tracking-normal text-white sm:text-6xl lg:text-7xl"
              variants={fadeUp}
            >
              <span className="text-gradient">{profile.name}</span>
              <span className="mt-2 block">builds scalable</span>
              <span className="block text-gradient">MERN products.</span>
            </motion.h1>
            <motion.p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300" variants={fadeUp}>
              <span className="block font-semibold text-slate-100">{profile.education}</span>
              <span className="mt-3 block">{profile.tagline}</span>
            </motion.p>
            <motion.div
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
              variants={fadeUp}
            >
              <Button asChild variant="premium">
                <Link href="#projects">
                  View Projects
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href={profile.github} target="_blank">
                  <Github className="size-4" />
                  GitHub
                </Link>
              </Button>
              <Button asChild variant="ghost">
                <Link href="/resume">
                  <Download className="size-4" />
                  Resume
                </Link>
              </Button>
            </motion.div>
            <motion.div className="mt-10 grid grid-cols-3 gap-3 max-w-xl" variants={fadeUp}>
              {["MERN", "Next.js", "AI APIs"].map((item) => (
                <div
                  className="rounded-lg border border-white/10 bg-white/[0.045] px-3 py-4 text-center"
                  key={item}
                >
                  <p className="text-sm font-semibold text-white">{item}</p>
                  <p className="mt-1 text-xs text-slate-400">Product craft</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
          <HeroVisual />
        </section>

        <MotionSection id="about">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <Badge>About</Badge>
              <h2 className="mt-5 text-3xl font-semibold text-white md:text-5xl">
                Product-minded engineering with a full stack core.
              </h2>
            </div>
            <div className="grid gap-4 text-slate-300">
              <p className="text-base leading-8">
               Full-Stack Developer skilled in React, Next.js, Node.js, Express, and MongoDB, passionate about building scalable applications, solving complex problems, and integrating AI to create smarter products.
              </p>
              
              <div className="mt-2 flex flex-wrap gap-2">
                {interests.map((interest) => (
                  <span
                    className="rounded-full border border-white/10 bg-white/[0.045] px-3 py-1.5 text-xs font-medium text-slate-300"
                    key={interest}
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </MotionSection>

        <MotionSection id="skills">
          <SectionHeading
            description="Focused on building scalable web applications using industry-standard tools, clean architecture, and efficient development practices."
            eyebrow="Skills"
            title="Crafting Solutions with Modern Technologies."
          />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {skills.map((group) => {
              const Icon = group.icon;
              return (
                <Card
                  className="group p-5 transition duration-300 hover:border-cyan-300/45 hover:shadow-glow"
                  key={group.title}
                >
                  <div className="flex items-center gap-3">
                    <span className="grid size-10 place-items-center rounded-lg border border-cyan-300/20 bg-cyan-300/8">
                      <Icon className="size-5 text-cyan-200" />
                    </span>
                    <h3 className="text-lg font-semibold text-white">{group.title}</h3>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        className="rounded-full border border-white/10 bg-white/[0.055] px-3 py-1.5 text-sm text-slate-300 transition group-hover:border-cyan-300/25 group-hover:text-white"
                        key={item}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>
        </MotionSection>

        <MotionSection id="projects">
          <SectionHeading
            description="From full-stack platforms to AI-powered tools, each project reflects a focus on performance, usability, and clean engineering."
            eyebrow="Projects"
            title="Projects That Solve Real Problems."
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </MotionSection>

        <MotionSection id="education">
          <div className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr]">
            <div>
              <Badge>Education</Badge>
              <h2 className="mt-5 text-3xl font-semibold text-white md:text-5xl">
                IIIT Ranchi.
              </h2>
              <h3>
                B.Tech - Electronics and Communication Engineering
              </h3>
            </div>
            <Card className="relative overflow-hidden p-6 md:p-8">
              <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-cyan-300 via-blue-500 to-transparent" />
              <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                <div>
                  <p className="text-sm font-medium text-cyan-200">2023 - 2027</p>
                  <h3 className="mt-3 text-2xl font-semibold text-white">
                    Indian Institute of Information Technology Ranchi
                  </h3>
                  <p className="mt-2 text-slate-300">Bachelor&apos;s Degree</p>
                </div>
                <Badge>Final Year Student</Badge>
              </div>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {["CGPA 8.23", "Problem Solving", "Data Structures", "Web Engineering"].map(
                  (item) => (
                    <div
                      className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] p-3 text-sm text-slate-300"
                      key={item}
                    >
                      <CheckCircle2 className="size-4 text-cyan-200" />
                      {item}
                    </div>
                  )
                )}
              </div>
            </Card>
          </div>
        </MotionSection>

        <MotionSection id="github">
          <SectionHeading
            description="A focused coding presence centered on full stack projects, backend architecture, and continuous practice."
            eyebrow="GitHub"
            title="Consistent builder signal."
          />
          <Card className="grid gap-6 p-6 md:grid-cols-[0.9fr_1.1fr] md:p-8">
            <div>
              <Badge>
                <Github className="size-3.5" />
                GitHub Profile
              </Badge>
              <h3 className="mt-5 text-3xl font-semibold text-white">{profile.name}</h3>
              <p className="mt-4 leading-7 text-slate-300">
                {githubShowcase.contributionSummary}
              </p>
              <Button asChild className="mt-6" variant="outline">
                <Link href={githubShowcase.profile} target="_blank">
                  Open GitHub
                  <ExternalLink className="size-4" />
                </Link>
              </Button>
            </div>
            <div className="grid gap-3">
              
              {githubShowcase.featuredRepositories.map((repo) => (
                <div
                  className="flex items-center justify-between rounded-lg border border-white/10 bg-slate-950/45 p-4"
                  key={repo}
                >
                  <span className="font-medium text-white">{repo}</span>
                  <Github className="size-4 text-cyan-200" />
                </div>
              ))}
            </div>
          </Card>
        </MotionSection>

        <MotionSection id="achievements">
          <SectionHeading
            description="A collection of accomplishments that reflect growth, consistency, and a passion for building impactful solutions."
            eyebrow="Achievements"
            title="Momentum that compounds."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {achievements.map((achievement) => {
              const Icon = achievement.icon;
              return (
                <Card className="p-5 transition hover:border-cyan-300/40" key={achievement.title}>
                  <Icon className="size-6 text-cyan-200" />
                  <h3 className="mt-5 text-base font-semibold text-white">{achievement.title}</h3>
                </Card>
              );
            })}
          </div>
        </MotionSection>

        <MotionSection className="pb-10" id="contact">
          <Card className="overflow-hidden p-6 md:p-8">
            <div className="grid gap-8 lg:grid-cols-[1fr_0.92fr]">
              <div>
                <Badge>Contact</Badge>
                <h2 className="mt-5 text-3xl font-semibold text-white md:text-5xl">
                  Let&apos;s build something useful.
                </h2>
                <p className="mt-4 max-w-2xl leading-7 text-slate-300">
                  Open to internships, development opportunities, and collaboration on
                  modern web products with strong engineering fundamentals.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {socials.slice(0, 3).map((social) => {
                    const Icon = social.icon;
                    return (
                      <Button asChild key={social.label} variant="outline">
                        <Link href={social.href} target={social.href.startsWith("mailto") ? undefined : "_blank"}>
                          <Icon className="size-4" />
                          {social.label}
                        </Link>
                      </Button>
                    );
                  })}
                </div>
              </div>
              <div className="rounded-lg border border-white/10 bg-slate-950/55 p-5">
                <div className="flex items-center gap-3">
                  <span className="grid size-11 place-items-center rounded-full bg-blue-cyan text-sm font-black text-slate-950">
                    SR
                  </span>
                  <div>
                    <p className="font-semibold text-white">{profile.name}</p>
                    <p className="text-sm text-slate-400">{profile.role}</p>
                  </div>
                </div>
                <div className="mt-6 grid gap-3 text-sm text-slate-300">
                  <p className="flex items-center gap-3">
                    <MapPin className="size-4 text-cyan-200" />
                    {profile.location}
                  </p>
                  <p className="flex items-center gap-3">
                    <Mail className="size-4 text-cyan-200" />
                    {profile.email}
                  </p>
                  <p className="rounded-lg border border-cyan-300/20 bg-cyan-300/8 p-4 leading-6 text-cyan-50">
                   Crafting end-to-end digital products with a focus on performance, scalability, and exceptional user experience.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </MotionSection>
      </main>

      <footer className="section-shell flex flex-col gap-4 border-t border-white/10 py-8 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold text-white">{profile.name}</p>
          <p>{profile.role}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          {socials.slice(0, 3).map((social) => (
            <Link
              className="transition hover:text-cyan-200"
              href={social.href}
              key={social.label}
              target={social.href.startsWith("mailto") ? undefined : "_blank"}
            >
              {social.label}
            </Link>
          ))}
        </div>
        <p>Copyright {new Date().getFullYear()} Shashi Raj.</p>
      </footer>
    </>
  );
}
