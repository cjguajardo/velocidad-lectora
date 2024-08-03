
export default async function Page( { children }: { children: React.ReactNode } ) {
  return <main role="page-wrapper"
    className="flex flex-col w-full min-h-screen items-center p-4 lg:p-24">
    {children}
  </main>
}