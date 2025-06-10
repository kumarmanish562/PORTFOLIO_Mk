import { socialLinks } from "../User";

// Social component definition
const Social=()=>{
    // Map through socialLinks to render social media icons with links
    const socialIcons=socialLinks.map((socialLink, index)=>{
        return <a key={index} href={`${socialLink.link}`} target="_blank"  className="font-mono text-lg  hover:text-primaryColor hover:-translate-x-1 transition transform duration-300 ease-in-out">
            {/* Animated social icon */}
            <div data-aos="fade-up-left" data-aos-duration="800" > 
                <socialLink.icon stroke={1.5} className="-rotate-90" size={25} />
            </div>
        </a>
    })

    // Render rotated, fixed-position social icons with horizontal line
    return <div  className="flex md-mx:hidden text-textColor items-center gap-8 fixed bottom-32 -left-48 rotate-90 " >
        {socialIcons}
        {/* Decorative horizontal line */}
        <hr className="border w-40 rounded-full  bg-textColor border-textColor"/>
    </div>
}
// Exporting Social component as default
export default Social;