import { useState, useEffect } from 'react'

interface CountdownTime {
  days: number
  hours: number
  mins: number
  secs: number
  totalHours: number
}

const STORAGE_KEY = 'deeper30_deadline'

export function useCountdown(): CountdownTime {
  const getDeadline = (): number => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) return parseInt(stored)
    const deadline = Date.now() + 72 * 60 * 60 * 1000
    localStorage.setItem(STORAGE_KEY, String(deadline))
    return deadline
  }

  const deadline = getDeadline()

  const calc = (): CountdownTime => {
    const diff = Math.max(0, deadline - Date.now())
    const days = Math.floor(diff / (1000 * 60 * 60 * 24))
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
    const secs = Math.floor((diff % (1000 * 60)) / 1000)
    return { days, hours, mins, secs, totalHours: days * 24 + hours }
  }

  const [time, setTime] = useState<CountdownTime>(calc)

  useEffect(() => {
    const interval = setInterval(() => setTime(calc()), 1000)
    return () => clearInterval(interval)
  }, [])

  return time
}
