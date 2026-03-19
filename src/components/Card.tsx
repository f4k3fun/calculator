type Props = React.ComponentProps<"div">

export function Card({children, className, ...props}: Props){
  return(
      <div 
      className={`
        bg-(--color-background) shadow-(--shadow-custom)
        rounded-2xl

        ${className ? className : ''}
        `}> {children} </div> 
  )
}