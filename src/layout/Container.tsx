interface element{
  children:JSX.Element
}
export function Container({children}:element){
  return(
    <div className=" min-h-screen px-10  ">
 {children}
  </div>
  )
}