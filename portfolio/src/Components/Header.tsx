// Importing Mantine and Tabler icon components
import { IconHexagonLetterM } from "@tabler/icons-react";
import SideBar from "./SideBar";
import { useMediaQuery } from "@mantine/hooks";
import { em } from "@mantine/core";
import { useEffect, useState } from "react";

// Navigation links array
const links=["About","Projects","Skills","Experience","Contact"];
// navLinks function to generate navigation link elements
const navLinks=(col:Boolean, clicked:any)=>{
    // Handles click event for navigation links
    const handleClick=()=>{
        if(clicked)clicked();
    }
    // Map through links and return anchor elements
    return links.map((link, index)=>{
        return  <a key={index} onClick={handleClick} className={`${col?'flex flex-col items-center':''} text-textColor text-lg font-mono hover:text-primaryColor`} href={`#${link}`}><span className="text-primaryColor">0{index+1}. </span>{link}</a>
    })
}

// Header component definition
const Header=()=>{
    // Responsive check for mobile devices
    const isMobile = useMediaQuery(`(max-width: ${em(476)})`);
    // State to control navbar visibility
    const [show, setShow] = useState(true);
    // State to track last scroll position
    const [lastScrollY, setLastScrollY] = useState(0);
    // State to control shadow effect on navbar
    const [shadow, setShadow] = useState(false);
    // Function to control navbar visibility and shadow on scroll
    const controlNavbar = () => {
        if(window.scrollY>lastScrollY && window.scrollY>70)setShow(false);
        else setShow(true);
        if(window.scrollY>70)setShadow(true);
        else setShadow(false);
        setLastScrollY(window.scrollY);
    }
    // useEffect to add/remove scroll event listener
    useEffect(()=>{
        window.addEventListener('scroll', controlNavbar);
        return ()=>window.removeEventListener('scroll', controlNavbar);
    })
    // Render navigation bar with logo, links, and sidebar
    return (
        <nav className={`flex ${show?"translate-y-0":"-translate-y-28"} ${shadow?"shadow-[0px_10px_30px_-10px_#020c1b]":""} transition-transform duration-500 ease-in-out fixed w-full z-10 bg-bgColor h-28  px-10  justify-between items-center xs-mx:px-4 xs-mx:h-20 `}>

            {/* Logo icon */}
            <IconHexagonLetterM className="z-10" size={isMobile?45:60} color="#64FFDA" stroke={1.25}/>
            {/* Navigation links for desktop */}
            <div className="bs:flex gap-8 hidden">
                {navLinks(false, null)}
            </div>
            {/* Sidebar for mobile navigation */}
            <SideBar/>
        </nav>
    );
}
// Exporting Header component as default and navLinks function
export default Header;
export {navLinks};