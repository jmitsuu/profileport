interface element{
  children:JSX.Element
}
export function Container({children}:element){
  return(
    <div className=" min-h-screen px-20  ">
 {children}
  </div>
  )
}