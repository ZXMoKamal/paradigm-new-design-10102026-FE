import Branches from '@/components/sections/branches'
import ContactLocation from '@/components/sections/contactLocation'
import React from 'react'

function Contacts() {
  return (
    <main className="relative w-full overflow-hidden pt-30">
      <ContactLocation/>
      <Branches/>
    </main>
  )
}

export default Contacts