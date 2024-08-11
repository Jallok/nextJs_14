"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className=" flex flex-col gap-3 bg-red-500">
      <h2>{error.message}</h2>
      <button
        onClick={reset}
        className="bg-slate-800 hover:opacity-50 text-white"
      >
        Try again
      </button>
    </div>
  );
}
