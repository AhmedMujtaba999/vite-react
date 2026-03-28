import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
  
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 pb-4 text-3xl'>Github followers: {data.followers}
    <img className='mx-auto h-auto max-w-lg m-4' src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  )
}
export default Github



export const githubinfoload = async () => {
    const response = await fetch('https:api.github.com/users/AhmedMujtaba999')
    return response.json()
}

