import { logo } from "../assets";
import {  Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
    <Link to="/">
      <img src={logo} alt="logo" className="w-28 object-contain" />
    </Link>
    <Link
      to="./new-post"
      className="font-medium bg-blue-500 text-white px-4 py-2 rounded-md"
    >
      Create
    </Link>
  </header>
  )
}

export default Header
