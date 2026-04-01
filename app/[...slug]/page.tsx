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
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>404 - Link Not Found</h1>
      <p>The short URL <code>/{path}</code> does not exist.</p>
      <a href="/" style={{ color: "#0070f3", textDecoration: "underline" }}>
        Go back home
      </a>
    </div>
  );
}
