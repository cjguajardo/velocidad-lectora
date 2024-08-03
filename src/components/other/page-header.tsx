
export default function PageHeader() {
  return <>
    <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex mb-20 lg:mb-10">
      <div className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800">
        <p className="text-white text-lg lg:text-xl">
          Mide tu Velocidad Lectora usando&nbsp;
          <code className="text-blue-800 dark:text-blue-600 font-mono font-bold">IA</code>
        </p>
      </div>
    </div>
  </>
}

export function CustomHeader( { title }: { title: string } ) {
  return <div className="z-10 w-full max-w-5xl items-center justify-between font-mono lg:flex h-[56px] bg-slate-800/90">
    <div className="fixed left-0 top-0 flex w-full justify-center pb-6 pt-8 backdrop-blur-2xl">
      <p className="text-bold text-lg">{title}</p>
    </div>
  </div>

}