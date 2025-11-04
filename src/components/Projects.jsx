import { Play, Clock, Award } from 'lucide-react';

const projects = [
  {
    title: 'Urban Apparel — 30s Spot',
    role: 'Editor • Color • Sound',
    duration: '0:30',
    cover:
      'https://images.unsplash.com/photo-1518131678677-a90f4e0d7e6d?q=80&w=1887&auto=format&fit=crop',
  },
  {
    title: 'Minimal Tech Product Launch',
    role: 'Editor • Motion',
    duration: '1:10',
    cover:
      'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1950&auto=format&fit=crop',
  },
  {
    title: 'Lifestyle Travel Reel',
    role: 'Editor',
    duration: '0:45',
    cover:
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2069&auto=format&fit=crop',
  },
];

function ProjectCard({ item }) {
  return (
    <div className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md">
      <div className="relative aspect-video overflow-hidden">
        <img
          src={item.cover}
          alt={item.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 backdrop-blur-0 transition group-hover:opacity-100 group-hover:backdrop-blur-sm">
          <button className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-gray-900 shadow">
            <Play className="h-4 w-4" />
            Watch
          </button>
        </div>
        <div className="pointer-events-none absolute bottom-2 left-2 inline-flex items-center gap-1 rounded-full bg-black/70 px-2 py-1 text-[11px] font-medium text-white">
          <Clock className="h-3 w-3" /> {item.duration}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-base font-semibold text-gray-900">{item.title}</h3>
        <p className="mt-1 text-sm text-gray-600">{item.role}</p>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            Selected Work
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            A few recent edits across commercials, product, and lifestyle.
          </p>
        </div>
        <div className="hidden sm:flex items-center gap-2 text-sm text-gray-600">
          <Award className="h-4 w-4" />
          <span>Adobe Premiere Pro • After Effects • DaVinci Resolve</span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p.title} item={p} />
        ))}
      </div>
    </section>
  );
}
