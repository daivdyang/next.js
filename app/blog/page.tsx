'use client'
import HomeClient from '@/components/type-writer/Client'

const messages = [
  '施工中...'
]
export default function Page() {

  return (
    <div>
      <HomeClient messages={messages} fontSize='3rem' />
    </div>
  )
}