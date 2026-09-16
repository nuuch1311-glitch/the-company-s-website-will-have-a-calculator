"use client"

import { useState } from "react"

type Props = {
  src: string
  fallback: string
  alt: string
  className?: string
}

export function ImageWithFallback({ src, fallback, alt, className }: Props) {
  const [current, setCurrent] = useState(src)
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={current || "/placeholder.svg"}
      alt={alt}
      loading="lazy"
      className={className}
      onError={() => {
        if (current !== fallback) setCurrent(fallback)
      }}
    />
  )
}
