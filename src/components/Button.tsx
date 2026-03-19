import { Text } from './Text'

type Props = React.ComponentProps<"button"> & { 
  variants?: 'default' | 'primary'
  title: string
}

const buttonVariants = {
  default: 'bg-(--color-background)',
  primary: 'bg-(--color-primary)'
}

export function Button({variants = 'default', title , children, className, ...props}: Props){
  return(
    <Text 

    as="button"
    variants="heading"
    className={`
      flex items-center justify-center rounded-xl
      p-3 cursor-pointer text-(--color-text) 
      bg-linear-(--background-image-gradient) 
      hover:bg-linear-gradient-hover
      shadow-(--shadow-custom) 

      ${buttonVariants[variants]} 
      
      ${className ? className : ''}
      `}
     {...props}
      title={title}
    />
  )
}