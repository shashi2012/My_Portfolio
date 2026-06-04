"use client";

import { motion } from "framer-motion";
import { techOrbit } from "@/data/portfolio";
import { Card } from "@/components/ui/card";

export function HeroVisual() {
  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      className="relative mx-auto w-full max-w-[420px]"
      initial={{ opacity: 0, y: 28 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
    >
      <div className="absolute inset-8 rounded-full bg-cyan-300/18 blur-3xl" />
      <Card className="noise relative overflow-hidden p-4">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/18 via-cyan-400/8 to-indigo-500/20" />
        <div className="relative grid min-h-[470px] place-items-center overflow-hidden rounded-lg border border-white/10 bg-slate-950/80 p-6">
          <div className="absolute left-6 top-6 flex items-center gap-2 rounded-full border border-white/10 bg-white/8 px-3 py-1 text-xs text-slate-300">
            <span className="size-2 rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(52,211,153,0.9)]" />
            Systems online
          </div>

          <div className="absolute inset-x-8 top-20 h-px bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent" />
          <div className="absolute bottom-10 left-8 right-8 h-px bg-gradient-to-r from-transparent via-blue-300/30 to-transparent" />

          <div className="relative grid size-56 place-items-center rounded-full border border-cyan-300/20 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-950 shadow-glow">
            <div className="absolute inset-4 rounded-full border border-white/10" />
            <div className="absolute inset-10 rounded-full bg-blue-cyan opacity-20 blur-2xl" />
            <div className="grid size-32 place-items-center rounded-full border border-white/15 bg-slate-950 text-center shadow-2xl">
              <span className="text-4xl font-black text-gradient">SR</span>
              <span className="mt-1 block text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                MERN
              </span>
            </div>
          </div>

          <div className="absolute inset-0">
            {techOrbit.map((tech, index) => {
              const Icon = tech.icon;
              const positions = [
                "left-8 top-28",
                "right-8 top-28",
                "right-7 top-1/2",
                "right-16 bottom-24",
                "left-16 bottom-24",
                "left-7 top-1/2"
              ];

              return (
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  className={`absolute ${positions[index]} rounded-full border border-white/12 bg-white/[0.075] px-3 py-2 text-xs font-medium text-slate-200 shadow-xl backdrop-blur`}
                  key={tech.label}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.18
                  }}
                >
                  <span className="flex items-center gap-2">
                    <Icon className="size-4 text-cyan-200" />
                    {tech.label}
                  </span>
                </motion.div>
              );
            })}
          </div>

          <div className="absolute bottom-5 left-5 right-5 grid grid-cols-3 gap-2">
            {["Next.js", "APIs", "AI"].map((item) => (
              <div
                className="rounded-lg border border-white/10 bg-white/[0.055] px-3 py-2 text-center text-xs font-semibold text-slate-300"
                key={item}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
