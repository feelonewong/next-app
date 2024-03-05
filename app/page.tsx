import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      Hello World~ <br />
      <Link href="/users">users</Link> <br />
      <a href="/users/new">new</a> <br />
    </main>
  )
}
