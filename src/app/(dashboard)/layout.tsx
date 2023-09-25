import Sidebar from './_components/Sidebar'

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full ">
      <div className="fixed inset-y-0 z-50 hidden h-full w-56 flex-col bg-red-50 md:flex">
        <Sidebar />
      </div>
      {children}
    </div>
  )
}
export default DashboardLayout
