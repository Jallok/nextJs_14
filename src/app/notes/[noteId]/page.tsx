export default function NoteDetail({
  params,
}: {
  params: {
    noteId: string;
  };
}) {
  return <h1>Note Detail {params.noteId}</h1>;
}
