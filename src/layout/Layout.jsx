import { Outlet } from "react-router-dom"
import Sidebar from "../components/Sidebar"
import Resumen from "../components/Resumen"


function Layout() {
  return (
    <div className="md:flex">
        <Sidebar/>
        <main className="flex-1 h-screen overflow-y-scroll bg-gray-50 p-3">
          <Outlet/>
        </main>
        
        <Resumen/>
    </div>
  )
}

export default Layout
