import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
     <div className="flex justify-between items-center py-6 px-10  bg-(--c2) ">
        <h2 className=" font-semibold text-2xl">Media Search</h2>
        <div className="flex items-center gap-5 text-xl">
           
          <Link className="text-medium  rounded px-4 py-2b bg-(--c4) text-(--c1)" to="/">Search</Link>
          <Link className="text-medium  rounded px-4 py-2b bg-(--c4) text-(--c1)" to='/collection'>Collection</Link>
        </div>
      </div>
    </>
  )
}

export default Navbar