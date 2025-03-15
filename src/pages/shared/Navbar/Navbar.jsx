import { Link } from "react-router-dom";
import Container from "../../Container/Container";
import { useEffect, useState } from "react";

const Navbar = () => {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navlink = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/fund">Fund</Link></li>
        <li><Link to="/crisis">Crisis</Link></li>
        <li><Link to="/volunteer">Volunteer</Link></li>
        <li><Link to="/inventory">Inventory</Link></li>
    </>
    return (
        <div className={`navbar w-full fixed z-10 font-poppin mx-auto py-2 ${scrolled ? "bg-white text-black" : "text-white border-b border-black"}`}>
            <Container>
                <div className="navbar">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-52">
                                {navlink}
                            </ul>
                        </div>
                        <Link to="/" className={scrolled ? "lg:text-2xl font-bold text-[rgb(243,197,119)]": "lg:text-2xl font-bold text-white"}>Disaster Management</Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 space-x-4 font-medium">
                            {navlink}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <Link to="/login" className="py-2 px-6 text-sm bg-[#F3C577] text-black font-semibold rounded-full">Login</Link>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Navbar;
