import { useState, useEffect, useRef } from 'react'

const COUNTDOWN_START = 5
export default function CountDown(
  { onCountdownFinished, start = false }: { onCountdownFinished: () => void, start: boolean }
) {
  const [count, setCount] = useState<number>( COUNTDOWN_START )
  const [intervalId, setIntervalId] = useState<number | NodeJS.Timeout>( 0 )
  const countRef = useRef<HTMLDivElement>( null );

  const audio = new Audio( '/ding.mp3' );

  useEffect( () => {
    if ( start ) {
      if ( intervalId ) clearInterval( intervalId as number )
      setIntervalId( setInterval( () => {
        setCount( count => count - 1 )
        audio.currentTime = 0
        audio.play()
      }, 1000 ) )

      document.querySelector( 'body' )?.classList.add( 'overflow-hidden' )
    }
    else {
      setCount( COUNTDOWN_START )
      if ( intervalId ) clearInterval( intervalId as number )
      audio.pause()
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [start] )

  useEffect( () => {
    if ( !start ) return

    const setCountContent = ( count: number ) => {
      if ( countRef.current ) {
        if ( count === 0 ) countRef.current.innerHTML = `<div class="animate-blurIn animate-in zoom-in duration-500 ease-in-out">Ya!</div>`
        else if ( count > 0 ) countRef.current.innerHTML = `<div class="animate-blurIn animate-in zoom-in duration-500 ease-in-out">${count}</div>`
        else countRef.current.innerHTML = ""
      }
    }

    setCountContent( count )
    if ( count <= 0 ) {
      clearInterval( intervalId as number )
      onCountdownFinished()
      audio.pause()

      document.querySelector( 'body' )?.classList.remove( 'overflow-hidden' )
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count, start] )

  if ( !start ) return null

  return ( <div className="backdrop-blur absolute rounded-xl border-white top-0 left-0 text-center flex justify-center items-center w-full h-[100%] max-h-screen bg-white/70 dark:bg-slate-950/70">
    <div className="my-10 p-4 text-9xl text-red-600 drop-shadow-lg" ref={countRef}></div>
  </div> )
}