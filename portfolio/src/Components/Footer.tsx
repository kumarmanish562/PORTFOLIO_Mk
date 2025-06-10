// Importing Info and socialLinks from User file
import { Info, socialLinks} from "../User";

// Footer component definition
const Footer=()=>{
    // Mapping through socialLinks to render social media icons with links
    const socialIcons=socialLinks.map((socialLink, index)=>{
        return <a   key={index} href={`${socialLink.link}`} target="_blank"  className="font-mono text-lg  hover:text-primaryColor hover:scale-105 transition transform duration-300 ease-in-out">
        <socialLink.icon stroke={1.5}  size={25} />
    </a>
    })
    // Main footer container with name, social icons, and copyright
    return <div className="mt-20 mb-10 font-mono flex flex-col gap-2 items-center">
        {/* Display user name */}
        <div className="text-3xl md-mx:text-2xl text-primaryColor font-semibold">{Info.name}</div>
        {/* Social icons, hidden on small screens */}
        <div className="md-mx:flex hidden text-textColor gap-8 sm-mx:gap-6">{socialIcons}</div>
        {/* Copyright and rights */}
        <div className="text-textColor text-xl md-mx:text-lg sm-mx:text-base xs-mx:text-sm xs-mx:flex flex-col items-center">Copyright &copy; {new Date().getFullYear()} {Info.name} <span className="xs-mx:hidden">|</span> <span>All Rights Reserved</span></div>
    </div>
}
// Exporting Footer component as default
export default Footer;