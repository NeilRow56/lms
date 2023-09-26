import { NavbarRoutes } from '@/components/NavbarRoutes'
import { MobileSidebar } from './MobileSidebar'

export const Navbar = () => {
  return (
    <div className="border-d flex h-full items-center bg-white p-4 shadow-sm">
      <MobileSidebar />
      <NavbarRoutes />
    </div>
  )
}
