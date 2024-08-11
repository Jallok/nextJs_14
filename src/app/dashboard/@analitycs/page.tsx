"use client";

function getRandom(arr: string[]) {
  return arr[Math.floor(Math.random() * arr.length)];
}
export default function Analitycs() {
  const item = getRandom(["", "ikan"]);
  if (item === "") {
    throw new Error("Item is empty guys");
  }
  return <h1>Analitycs Page</h1>;
}
