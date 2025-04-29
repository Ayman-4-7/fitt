

import React from "react"
export default function DashboardLayout ({children}) {


    const Sidebar = () => {
        return (
          <div className="flex min-h-screen">
     
          <div className="w-64 bg-gray-800 text-white p-4 space-y-4">
            <h1 className="text-xl font-bold">Dashboard</h1>
            <nav className="space-y-2">
            <a href="/EditG" className="block px-3 py-2 rounded hover:bg-gray-700">
            Edit Contact us
              </a>
              <a href="/EditExercise" className="block px-3 py-2 rounded hover:bg-gray-700">
            Edit Exercise
              </a>
              <a href="/EditMemberShip" className="block px-3 py-2 rounded hover:bg-gray-700">
              EditMemberShip
              </a>
          
            </nav>
          </div>
          <div className="flex-1 ">
            {children}
          </div>
        </div>
        
        )
      }
      


    return (
        <>
        {Sidebar()}
        </>
    )
}