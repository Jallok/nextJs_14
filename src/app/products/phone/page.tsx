import { redirect } from "next/navigation";

export default function Phone() {
  const isAdmin = false;

  if (!isAdmin) {
    redirect("/");
  }
  return <h1 className="h-[900px]">Phone Page YGYGY</h1>;
}
