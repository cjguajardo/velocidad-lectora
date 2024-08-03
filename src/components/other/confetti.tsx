'use client'
import JSConfetti from "js-confetti";
import { useEffect } from "react"

export default function Confetti() {

  useEffect( () => {
    const confetti = new JSConfetti();

    confetti.addConfetti()
  }, [] )

  return null
}