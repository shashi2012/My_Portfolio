import Link from "next/link";
import { ArrowLeft, Mail } from "lucide-react";
import { PrintButton } from "@/components/print-button";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { achievements, profile, projects, skills } from "@/data/portfolio";

export const metadata = {
  title: "Resume"
};

export default function ResumePage() {
  return (
    <main className="section-shell min-h-screen py-10 text-slate-200">
      <div className="mb-8 flex flex-wrap items-center justify-between gap-3 print:hidden">
        <Button asChild variant="outline">
          <Link href="/">
            <ArrowLeft className="size-4" />
            Portfolio
          </Link>
        </Button>
        <div className="flex gap-3">
          <Button asChild variant="outline">
            <Link href={`mailto:${profile.email}`}>
              <Mail className="size-4" />
              Contact
            </Link>
          </Button>
          <PrintButton />
        </div>
      </div>

      <Card className="mx-auto max-w-4xl p-6 md:p-10 print:border-none print:bg-white print:text-slate-950 print:shadow-none">
        <header className="border-b border-white/10 pb-6 print:border-slate-200">
          <h1 className="text-4xl font-black text-white print:text-slate-950">{profile.name}</h1>
          <p className="mt-2 text-lg text-cyan-200 print:text-slate-700">{profile.role}</p>
          <p className="mt-3 max-w-2xl leading-7 text-slate-300 print:text-slate-700">
            {profile.education}. {profile.tagline}
          </p>
          <div className="mt-4 flex flex-wrap gap-3 text-sm text-slate-400 print:text-slate-700">
            <span>{profile.email}</span>
            <span>{profile.github}</span>
            <span>{profile.linkedin}</span>
          </div>
        </header>

        <section className="mt-8">
          <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-200 print:text-slate-900">
            Skills
          </h2>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {skills.map((group) => (
              <p className="text-sm leading-6 text-slate-300 print:text-slate-700" key={group.title}>
                <strong className="text-white print:text-slate-950">{group.title}:</strong>{" "}
                {group.items.join(", ")}
              </p>
            ))}
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-200 print:text-slate-900">
            Projects
          </h2>
          <div className="mt-4 grid gap-5">
            {projects.map((project) => (
              <div key={project.title}>
                <h3 className="font-semibold text-white print:text-slate-950">{project.title}</h3>
                <p className="mt-1 text-sm leading-6 text-slate-300 print:text-slate-700">
                  {project.description}
                </p>
                <p className="mt-1 text-xs text-slate-400 print:text-slate-600">
                  {project.technologies.join(" | ")}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-200 print:text-slate-900">
            Education
          </h2>
          <p className="mt-4 font-semibold text-white print:text-slate-950">
            Indian Institute of Information Technology Ranchi
          </p>
          <div className="mt-3">
  <p className="text-base font-semibold text-white print:text-slate-900">
    B.Tech in Electronics and Communication Engineering
  </p>

  <div className="mt-2 flex flex-wrap gap-2">
    <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-200">
      2023 - 2027
    </span>

    <span className="rounded-full border border-indigo-400/20 bg-indigo-400/10 px-3 py-1 text-xs font-medium text-indigo-200">
      CGPA 8.23
    </span>
  </div>
</div>
        </section>

        <section className="mt-8">
          <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-200 print:text-slate-900">
            Achievements
          </h2>
          <ul className="mt-4 grid gap-2 text-sm text-slate-300 print:text-slate-700">
            {achievements.map((achievement) => (
              <li key={achievement.title}>{achievement.title}</li>
            ))}
          </ul>
        </section>
      </Card>
    </main>
  );
}
