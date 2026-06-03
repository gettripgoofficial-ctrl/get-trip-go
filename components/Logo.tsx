import React from 'react'

interface LogoProps {
  variant?: 'dark' | 'light' | 'yellow-go'
  height?: number | string
  className?: string
}

export default function Logo({ variant = 'dark', height = 36 }: LogoProps) {
  const main = variant === 'light' ? '#ffffff' : '#002080'
  const go = (variant === 'light' || variant === 'yellow-go') ? '#FFCC00' : '#002080'

  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        fontFamily: "var(--font-nunito), 'Nunito', 'Varela Round', sans-serif",
        fontWeight: 900,
        fontSize: typeof height === 'number' ? `${height * 1.1}px` : '36px',
        letterSpacing: '-0.06em',
        lineHeight: 1,
        userSelect: 'none',
      }}
    >
      <span style={{ color: main }}>get trip&thinsp;</span>
      <span style={{ color: go }}>go</span>
    </span>
  )
}