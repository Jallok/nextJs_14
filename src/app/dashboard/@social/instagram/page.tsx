import Link from "next/link";

export default function Instagram() {
  return (
    <div className=" flex flex-col gap-2">
      <h2>Instagram</h2> <Link href="/dashboard" className="border-2 bg-green-400">Back</Link>
    </div>
  );
}
