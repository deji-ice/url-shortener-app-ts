import { FaArrowRight } from "react-icons/fa";

const URLInput = () => {
  return (
    <form className="px-5 relative" action="">
        <input className="w-full rounded-full bg-[#181E29] py-3 px-5 border-2 border-[#353C4A]" type="text" placeholder="Enter the link here"/>
        <button className="bg-[#144EE3] right-6 p-3.5 top-1 rounded-full absolute" ><FaArrowRight/></button>
    </form>
  )
}

export default URLInput