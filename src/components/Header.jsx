import { NavLink } from "react-router-dom";
function Header() {
    return ( 
        <div className=" w-full flex h-20 justify-between">
            <img className=" w-44 h-13 mx-6 my-auto" src="../src/assets/Logo.png" alt="Donation" />
            <ul className=" w-80 flex justify-between mr-6 my-auto">
                <NavLink to={''}>Home</NavLink>
                <NavLink to={'donation'}>Donation</NavLink>
                <NavLink to={'statistics'}>Statistics</NavLink>
            </ul>
        </div>
     );
}

export default Header;