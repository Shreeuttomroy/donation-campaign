import { NavLink } from "react-router-dom";
function Header() {
  return (
    <div className="w-[400px] overflow-hidden md:w-full flex h-20 justify-between">
      <img
        className=" w-44 h-13 mx-6 my-auto"
        src="../src/assets/Logo.png"
        alt="Donation"
      />
      <ul className=" w-80 flex justify-between mr-6 my-auto font-semibold">
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
  );
}

export default Header;
