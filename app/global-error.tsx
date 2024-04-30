"use client"

import Link from 'next/link'

const Error = () => {
  return (
    <main className="min-h-dvh flex flex-col place-items-center">
      <p>An unexpected error has occurred</p>
      <p>
        Please contact{' '}
        <Link
          href="mailto: odinakachiogbujiagba@gmail.com"
          className="underline"
        >
          odinakachiogbujiagba@gmail.com
        </Link>
      </p>
      <Link href="/" className='underline'>Let&apos;s get you back home.</Link>
    </main>
  )
}

export default Error
