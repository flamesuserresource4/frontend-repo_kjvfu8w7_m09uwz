import Spline from '@splinetool/react-spline';
import { Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* light gradient for text readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/80" />

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-black/80 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-white">
          <Sparkles className="h-3.5 w-3.5" />
          Video Editing • Motion Graphics
        </span>
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
          Crafting cinematic stories for modern brands
        </h1>
        <p className="mt-4 max-w-2xl text-base text-gray-700 sm:text-lg">
          I’m a video editor focused on clean, rhythmic cuts with a minimal aesthetic. From
          commercials to social content, I turn footage into feelings.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#projects"
            className="rounded-full bg-gray-900 px-6 py-3 text-sm font-semibold text-white shadow transition hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900/20"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="rounded-full bg-white/80 px-6 py-3 text-sm font-semibold text-gray-900 shadow ring-1 ring-gray-900/10 transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-gray-900/20"
          >
            Contact
          </a>
        </div>
      </div>
    </section>
  );
}
