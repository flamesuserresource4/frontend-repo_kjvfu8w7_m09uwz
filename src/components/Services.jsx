import { Film, Scissors, Camera } from 'lucide-react';

const services = [
  {
    title: 'Editing & Story',
    desc: 'Clean, rhythmic cuts that highlight emotion and clarity with a minimalist approach.',
    icon: Scissors,
  },
  {
    title: 'Color & Sound',
    desc: 'Balanced color and tasteful sound design to reinforce mood and brand tone.',
    icon: Film,
  },
  {
    title: 'Motion Graphics',
    desc: 'Subtle titles, lower-thirds, and product callouts that feel modern and intentional.',
    icon: Camera,
  },
];

function ServiceCard({ item }) {
  const Icon = item.icon;
  return (
    <div className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
      <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 text-white">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
      <p className="mt-2 text-sm text-gray-600">{item.desc}</p>
    </div>
  );
}

export default function Services() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-8 max-w-2xl">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Services</h2>
        <p className="mt-2 text-sm text-gray-600">
          From concept to delivery, I create polished edits built for performance across platforms.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <ServiceCard key={s.title} item={s} />
        ))}
      </div>
    </section>
  );
}
