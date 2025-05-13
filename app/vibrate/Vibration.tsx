'use client'
import { useState, useEffect, ChangeEvent } from 'react'


export default function Vibration() {
  const [time, setTime] = useState(200)
  const [vibrate, setVibrate] = useState({
      support: false,
      done: false,
  })

  const onClickVibration = () => {
    if (!vibrate.support) return

    setVibrate((state) => ({ ...state, done: false }))
    const isVibrate = window.navigator.vibrate(time)
    setVibrate((state) => ({...state, done: isVibrate }))
    console.log('isVibrate', isVibrate)
  }

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const time = Number(e.target.value)
    console.log('time', time)
    setTime(time)
  }

  useEffect(() => {
    const support = 'vibrate' in window.navigator
    setVibrate(() => ({ support, done: false }))
  }, [])

  return (
    <div className="border-4 p-4">
      <div>{ `支援震動: ${vibrate.support.toString()}` }</div>
      <div>
        <label htmlFor="vibrate">震動時間(ms):</label>
        <input type="number" id="vibrate" value={time} onChange={onInputChange} />
      </div>
      <button className="my-4 rounded-xl p-2 bg-[#0000001d]" onClick={onClickVibration}>震動</button>
    </div>
  )
}