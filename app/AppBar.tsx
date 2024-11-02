'use client'
import { signIn, signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

const AppBar = () => {

  const {data: session} = useSession();

  console.log(session)

  return (
   <div className='flex bg-gray-300 justify-between gap-4 flex-row'>
        <Link className='p-4 border border-gray-300 text-blue-600' href="/">Home</Link>
        <Link className='p-4 border border-gray-300 text-blue-600' href="/admin">Admin</Link>
        <Link className='p-4 border border-gray-300 text-blue-600 flex-1' href="/admin/panel">Painel</Link>

        <div className='mx-20 flex gap-2'>
          {session?.user ? (
            <>
              <p className='text-sky-600'>{session.user.username}</p>
              <button className='text-red-500' onClick={() => signOut()}>Sign Out</button>
            </>
          ) : (
            <button className='text-red-500' onClick={() => signIn("Credentials", {redirect: false})}>Sign In</button>
          )}
        </div>
   </div>
  )
}

export default AppBar