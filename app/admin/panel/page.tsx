'use client'
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react'

const Page = () => {
  const [people, setPeople] = useState([])
  const {data: session} = useSession();
  
  const fetchPeople = async () => {
    const res = await fetch('http://localhost:8082/api/person', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${session?.user.accessToken}`,
      },
    })
    const data = await res.json()
    console.log(data)
    setPeople(data._embedded.personVOList)
  }

  useEffect(() => {
    if (session?.user) {
      fetchPeople()
    }
  }, [session])

  return (
    <div className='container px-10 py-4'>
      {people.map((person : {id: string, firstName: string}) => (
        <div key={person.id}>{person.firstName}</div>
      ))}
    </div>
  )
}

export default Page;