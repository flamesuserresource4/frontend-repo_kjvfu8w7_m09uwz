import { Mail, Play } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="border-t border-gray-200 bg-white/70">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Let’s edit something great
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Available for freelance and collaborations. Send a brief and I’ll reply within 24 hours.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="mailto:hello@example.com?subject=Project%20Inquiry"
                className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-gray-800"
              >
                <Mail className="h-4 w-4" /> Email Me
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-gray-900 shadow ring-1 ring-gray-900/10 hover:bg-gray-50"
              >
                <Play className="h-4 w-4" /> Watch Reel
              </a>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white p-6 shadow-sm">
            <div className="text-sm font-medium text-gray-900">Capabilities</div>
            <ul className="mt-4 grid grid-cols-2 gap-3 text-sm text-gray-700 sm:grid-cols-3">
              <li className="rounded-md bg-white px-3 py-2 shadow ring-1 ring-gray-200">Commercial</li>
              <li className="rounded-md bg-white px-3 py-2 shadow ring-1 ring-gray-200">Product</li>
              <li className="rounded-md bg-white px-3 py-2 shadow ring-1 ring-gray-200">Social</li>
              <li className="rounded-md bg-white px-3 py-2 shadow ring-1 ring-gray-200">Color</li>
              <li className="rounded-md bg-white px-3 py-2 shadow ring-1 ring-gray-200">Motion</li>
              <li className="rounded-md bg-white px-3 py-2 shadow ring-1 ring-gray-200">SFX</li>
            </ul>
            <p className="mt-4 text-xs text-gray-500">Premiere Pro • After Effects • Resolve • Figma</p>
          </div>
        </div>
      </div>
      <footer className="border-t border-gray-200">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 text-sm text-gray-600">
          <span>© {new Date().getFullYear()} Your Name — Video Editor</span>
          <a href="#" className="hover:text-gray-900">Instagram</a>
        </div>
      </footer>
    </section>
  );
}
