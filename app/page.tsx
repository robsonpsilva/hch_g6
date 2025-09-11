import Link from "next/link";
export default function HomePage() {
  return (
    <section className="grid gap-6">
      <h1 className="text-3xl font-bold">Discover unique, handcrafted treasures</h1>
      <p>Support local artisans and shop sustainably.</p>
      <div>
        <Link href="/products" className="btn">Browse Products</Link>
      </div>
    </section>
  );
}
