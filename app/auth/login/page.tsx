'use client'
import { signIn } from 'next-auth/react'
import React, { useRef } from 'react'

const Page = () => {

    const username = useRef<HTMLInputElement>(null)
    const password = useRef<HTMLInputElement>(null)

    const onSubmit = async () => {
        const result = await signIn('credentials', {
          username: username.current?.value,
          password: password.current?.value,
          redirect: true,
          callbackUrl: '/'
        })
    }

  return (
    <div className='flex flex-col container px-20 py-10'>
        <label htmlFor="username">E-mail</label>
        <input className='border w-[50%] text-black' id="username" type="text" ref={username} />
        <label htmlFor="password" className='mt-4'>Password</label>
        <input className='border w-[50%] text-black' type="password" id="password" ref={password} />

        <button className='border mt-4 border-black w-[50%]' onClick={() => onSubmit()}>Login</button>
    </div>
  )
}

export default Page;