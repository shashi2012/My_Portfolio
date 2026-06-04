export function BackgroundAura() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute left-1/2 top-[-18rem] h-[36rem] w-[52rem] -translate-x-1/2 rounded-full bg-blue-500/18 blur-3xl" />
      <div className="absolute right-[-18rem] top-[24rem] h-[30rem] w-[30rem] rounded-full bg-cyan-400/12 blur-3xl" />
      <div className="absolute bottom-[8rem] left-[-16rem] h-[28rem] w-[28rem] rounded-full bg-indigo-500/14 blur-3xl" />
    </div>
  );
}
