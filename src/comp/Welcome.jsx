import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const Welcome = () => {
  const count = useSelector((state) => state)
  console.log(count)

  if  (!count || !count.username || !count.userData) return <div>Loading...</div>

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Welcome to this web app</div>
        <div className="mb-2">
          <h1 className="text-gray-700 text-base">Username: {count.username}</h1>
          <h1 className="text-gray-700 text-base">Password: {count.userData}</h1>
        </div>
      </div>
    </div>
    
  )
}

export default Welcome