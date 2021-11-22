import NavBarTitle from "./NavBarTitle"
import logo from "../logo.png"

const NavBar = () => {
    return (
        <div className="NavBar">
            <img src={logo} id="logo" alt="" />
            <NavBarTitle text="Products"/>
            <NavBarTitle text="Use Cases"/>
            <NavBarTitle text="FAQ"/>
            <NavBarTitle text="About us"/>
            <NavBarTitle text="Contact us"/>
        </div>
    )
}

export default NavBar
