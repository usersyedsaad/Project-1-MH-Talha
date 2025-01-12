import Brand from "./Subcomponents/Brand"
import NavBar from "./Subcomponents/NavBar"
const Header = () => {
  return (
    <div className=" Header w-full  text-white h-auto fixed top-0 left-0 bg-[#1B2230]
      sm:px-[0.5rem] md:px-[0.75rem]  lg:px-[2.5rem] flex justify-between items-center px-0.5">
      
      <NavBar />
    </div>
  )
}

export default Header