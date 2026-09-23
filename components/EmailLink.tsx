'use client'
import { useEffect, useState, type ReactNode } from 'react'

type Props = {
  user?: string
  domain?: string
  address?: string
  label?: string
  className?: string
  icon?: ReactNode
}

export default function EmailLink({ user, domain, address, label, className, icon }: Props) {
  const email = (address ?? `${user}@${domain}`).split('@')
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return (
      <span className={className}>
        {icon}
        <span>Email us</span>
      </span>
    )
  }

  return (
    <a href={`mailto:${email[0]}@${email[1]}`} className={className}>
      {icon}
      <span>{label ?? `${email[0]}@${email[1]}`}</span>
    </a>
  )
}