'use client'

import { UserButton } from '@clerk/nextjs'
import { usePathname } from 'next/navigation'
import { Button } from './ui/button'
import { LogOut } from 'lucide-react'
import Link from 'next/link'

export const NavbarRoutes = () => {
  const pathname = usePathname()

  const isTeacherPage = pathname?.startsWith('/teacher')
  const isPlayerPage = pathname?.includes('/chapter')

  return (
    <div className="ml-auto flex gap-x-2">
      {isTeacherPage || isPlayerPage ? (
        <Link href="/">
          <Button size="sm" variant="ghost">
            <LogOut className="mr-2 h-4 w-4" />
            Exit
          </Button>
        </Link>
      ) : (
        <div>
          <Link href="/teacher/courses">
            <Button size="sm" variant="ghost">
              Teacher mode
            </Button>
          </Link>
          <Link href="/upload-button">
            <Button size="sm" variant="ghost">
              Upload Button
            </Button>
          </Link>
          <Link href="/upload-dnd">
            <Button size="sm" variant="ghost">
              Upload DnD
            </Button>
          </Link>
        </div>
      )}
      <UserButton afterSignOutUrl="/" />
    </div>
  )
}
