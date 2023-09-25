import { UserButton } from '@clerk/nextjs'

export default function Home() {
  return (
    <main className="flex h-screen flex-grow items-center justify-center bg-blue-50 ">
      <UserButton afterSignOutUrl="/" />
    </main>
  )
}
