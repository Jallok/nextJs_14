import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h2>A1 Page</h2>
      <div className="flex flex-col">
        <Link href="/a1/a2">Go to A2</Link>

        <Link href="/about">Go to about</Link>
      </div>
    </div>
  );
}
