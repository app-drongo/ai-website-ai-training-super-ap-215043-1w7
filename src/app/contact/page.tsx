import type { Metadata } from 'next'

import Page-header from '@/components/sections/contact/Page-header'
import Contact from '@/components/sections/contact/Contact'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Welcome to Contact',
}

export default function ContactPage() {
  return (
    <>
      <Page-header />
      <Contact />
    </>
  )
}
