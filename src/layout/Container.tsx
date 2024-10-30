interface element{
  children:JSX.Element
}
export function Container({children}:element){
  return(
    <div className=" min-h-screen md:px-20 px-10 ">
 {children}
  </div>
  )
}