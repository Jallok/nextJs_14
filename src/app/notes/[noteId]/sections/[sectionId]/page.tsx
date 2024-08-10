export default function Section({
  params,
}: {
  params: {
    noteId: string;
    sectionId: string;
  };
}) {
  return (
    <h1>
      Note {params.noteId} Section {params.sectionId}
    </h1>
  );
}
