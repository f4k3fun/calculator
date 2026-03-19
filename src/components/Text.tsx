import React from "react"

type Props = {
  variants?: 'default' | 'muted' | 'heading' | 'blast'
  as?: string
  title: string
  className?: string
}

const textVariants = { 
  default: 'text-xl',
  muted: 'text-xl text-text-secondary',
  heading: 'text-2xl text-text',
  blast: 'text-3xl text-text'
}

export function Text({ as = 'span', title, className, variants = 'default',...props}: Props){
  return React.createElement(
      as,
      {
        className: `${textVariants[variants]} ${className ? className : ''}`,
        ...props
      },
      title
    )
  
}