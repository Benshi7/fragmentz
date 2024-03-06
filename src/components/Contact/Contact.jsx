import React from 'react'
import { Input, Textarea } from '@nextui-org/react'

// Reusable Input component
const TextInput = ({ label, type }) => (
  <>
    <label htmlFor={label.toLowerCase()} className='mt-5 sr-only'>{label}</label>
    <input
      type={type}
      id={label.toLowerCase()}
      placeholder={label}
      className="shrink-0 mt-4 h-8 w-full rounded-lg border border-solid bg-neutral-800 border-[color:var(--Jacarta-800,#5D3A9D)]"
      aria-label={label}
    />
  </>
)

// Reusable TextArea component
const TextArea = ({ label }) => (
  <>
    <label htmlFor={label.toLowerCase()} className="mt-6 sr-only">{label}</label>
    <textarea
      id={label.toLowerCase()}
      placeholder={label}
      className="shrink-0 mt-4 h-24 w-full rounded-lg border border-solid bg-neutral-800 border-[color:var(--Jacarta-800,#5D3A9D)]"
      aria-label={label}
    />
  </>
)

function Contact () {
  return (
    <></>
  )
}

export default Contact
