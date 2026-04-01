import { redirect } from "next/navigation";
import { links } from "@/app/data";

interface Params {
  slug: string[];
}

export default async function Page({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const path = slug.join("/");
  
  const normalizedSlug = path.toLowerCase();
  
  console.log(`[Redirect] Attempting to resolve: ${path}`);
  
  const url = links[normalizedSlug];
  
  if (url) {
    console.log(`[Redirect] Found: ${normalizedSlug} -> ${url}`);
    redirect(url);
  }
  
  console.log(`[Redirect] Not found: ${normalizedSlug}`);
  
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 p-6 text-white">
      <article className="w-full max-w-xl rounded-3xl border border-white/10 bg-white/10 p-8 text-center shadow-2xl shadow-black/40 backdrop-blur-md">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-indigo-200">Parepran</p>
        <h1 className="mb-3 text-4xl font-extrabold sm:text-5xl">404 - Link Not Found</h1>
        <p className="mb-6 text-sm leading-relaxed text-slate-200">
          The short URL <code className="rounded px-1.5 py-1 bg-slate-900 text-indigo-100">/{path}</code> does not exist.
        </p>
        <a
          href="/"
          className="inline-flex items-center justify-center rounded-xl bg-indigo-500 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-400"
        >
          Back to Home
        </a>
      </article>
    </div>
  );
}
