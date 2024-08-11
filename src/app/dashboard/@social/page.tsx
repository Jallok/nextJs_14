import Link from "next/link";

export default function Sosial() {
  return (
    <div className=" flex flex-col gap-2">
      <h2>Social Page</h2>{" "}
      <Link href="/dashboard/instagram" className="border-2 bg-green-400">
        To Instagram
      </Link>
    </div>
  );
}
