import Brand from "./Subcomponents/Brand"
import NavBar from "./Subcomponents/NavBar"
const Header = () => {
  return (
    <header className="Header fixed  w-full  text-white h-auto top-0 left-0 bg-[#1B2230]
       flex justify-center items-center">
      
      <NavBar />
    </header>
  )
}

export default Header