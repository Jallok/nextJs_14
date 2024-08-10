"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function Food() {
  const router = useRouter();
  const searchParam = useSearchParams()
  console.log(searchParam.get('q'));
  
  return (
    <div className="h-[900px]">
      <h1>Food Page YGYYY</h1>
      <button
        onClick={() => router.push("/products")}
        className="border border-blue-400 text-pink-500"
      >
        Back
      </button>
    </div>
  );
}
