export default function DashboarLayout({
  children,
  social,
  users,
  analitycs,
  login,
}: {
  children: React.ReactNode;
  social: React.ReactNode;
  users: React.ReactNode;
  analitycs: React.ReactNode;
  login: React.ReactNode;
}) {
  const isLogin = true;
  return (
    <div className="my-4 mx-4">
      <div>{children}</div>
      {isLogin ? (
        <div className="flex gap-2">
          <div className="flex flex-col gap-2 border-2">
            <div className="border-2 my-2">{users}</div>
            <div>{social}</div>
          </div>
          <div className=" flex flex-1 border-2">{analitycs}</div>
        </div>
      ) : (
        <div>{login}</div>
      )}
    </div>
  );
}
