
export default function CGButton( { children, onClick }: { children: React.ReactNode, onClick?: Function } ) {
  const onClickHandler = () => {
    if ( typeof onClick === 'function' ) {
      onClick()
    }
  }
  return <button type="button" onClick={onClickHandler}
    className="mx-8 lg:mx-0 w-full lg:w-auto p-4 border rounded-md bg-secondary hover:bg-blue-500 dark:hover:bg-blue-800 relative border rounded-md hover:cursor-pointer hover:opacity-80">
    <div className="absolute inset-0 -z-50 rounded-lg bg-ai-gradient bg-blend-normal transition-[filter] blur-sm opacity-10 animate-pulse">
    </div>
    {children}
  </button>
}