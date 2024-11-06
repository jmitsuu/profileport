import { RiCheckboxMultipleBlankFill } from "react-icons/ri";
interface typeIcon{
cn?:string
}
export function TitleIcon({cn}:typeIcon){
  return(
    <RiCheckboxMultipleBlankFill className={`text-[#38bdf8] ${cn}`} />
  )
}