export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <ul className="text-blue-500 flex gap-3">
        <li>Fahion</li>
        <li>Food</li>
        <li>Phone</li>
      </ul>
      {children}
    </>
  );
}
