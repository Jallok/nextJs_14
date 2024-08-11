"use client";

function getRandom(arr: string[]) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export default function Section({
  params,
}: {
  params: {
    noteId: string;
    sectionId: string;
  };
}) {
  const item = getRandom(["", "ikan"]);
  if (item === "") {
    throw new Error("Item is empty guys");
  }
  return (
    <h1>
      Note {params.noteId} Section {params.sectionId}
    </h1>
  );
}
