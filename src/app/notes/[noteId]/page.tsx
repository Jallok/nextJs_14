import { notFound } from "next/navigation";
import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Note Detail Page",
//   description: "This is Note Detail Page",
// };

type Props = {
  params: {
    noteId: string
  }
}

// dinamic metadata
export const generateMetadata = ({params}: Props): Metadata => {
  return {
    title: `Note Detail ${params.noteId}`
  }
}

export default function NoteDetail({
  params,
}: Props) {
  if (parseInt(params.noteId) > 100) {
    notFound();
  }
  return <h1>Note Detail {params.noteId}</h1>;
}
