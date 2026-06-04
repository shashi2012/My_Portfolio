"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

import { projects } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

type Project = (typeof projects)[number];

export function ProjectCard({ project }: { project: Project }) {
  const Icon = project.icon;

  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="h-full"
    >
      <Card className="group flex h-full flex-col overflow-hidden transition duration-300 hover:border-cyan-300/45 hover:shadow-glow">
        {/* Project Screenshot */}
        <div className="relative aspect-[16/10] overflow-hidden border-b border-white/10">

          <div className="relative aspect-[16/10] overflow-hidden border-b border-white/10 bg-slate-950">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-contain p-3"
            />
          </div>
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

          {/* Project Badge */}
          <div className="absolute left-4 top-4 rounded-lg border border-white/10 bg-slate-950/70 px-3 py-2 backdrop-blur">
            <div className="flex items-center gap-2">
              <Icon className="size-4 text-cyan-300" />
              <span className="text-xs font-medium text-white">
                {project.title}
              </span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col p-5">
          <h3 className="text-xl font-semibold text-white">
            {project.title}
          </h3>

          <p className="mt-3 flex-1 text-sm leading-6 text-slate-300">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="mt-5 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 bg-white/[0.055] px-3 py-1 text-xs text-slate-300 transition group-hover:border-cyan-300/30"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="mt-6 flex gap-3">
            <Button asChild size="sm" variant="outline">
              <Link href={project.github} target="_blank">
                <Github className="size-4" />
                Code
              </Link>
            </Button>

            <Button asChild size="sm" variant="ghost">
              <Link href={project.demo} target="_blank">
                <ExternalLink className="size-4" />
                Live Demo
              </Link>
            </Button>
          </div>
        </div>
      </Card>
    </motion.article>
  );
}