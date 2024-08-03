
export default function Section( { children, role }:
  { children: React.ReactNode, role?: string } ) {
  return <section className="w-full max-w-5xl mb-10" role={role ?? 'content'}>
    {children}
  </section>
}