import { useState } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Header() {
  const [btn, setBtn] = useState(true);
  return (
    <div className="w-full overflow-x-hidden flex h-20 justify-between">
      <img
        className=" w-32 h-11 md:w-44 md:h-13 mx-2 md:mx-6 my-auto"
        src="./src/assets/Logo.png"
        alt="Donation"
      />
      <div className="">
        <div className=" w-fit h-fit text-2xl md:hidden mr-8 my-[28px] font-semibold" onClick={()=> setBtn(!btn)}>{btn? <AiOutlineMenu/>: <AiOutlineClose/>}</div>
        <ul className={` bg-[#0000002b] rounded-sm md:bg-[white] z-10 py-7 px-5 top-8 right-0 md:w-80 grid duration-1000 grid-cols-1 md:p-0 absolute md:static md:flex md:justify-between md:mr-6 my-[28px] font-semibold ${btn? "hidden": ""}`}>
          <NavLink
            to={""}
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }>
            Home
          </NavLink>
          <NavLink
            to={"donation"}
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }>
            Donation
          </NavLink>
          <NavLink
            to={"statistics"}
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }>
            Statistics
          </NavLink>
        </ul>
      </div>
    </div>
  );
}

export default Header;
