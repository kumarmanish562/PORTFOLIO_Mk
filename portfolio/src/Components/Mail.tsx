// Mail component definition
const Mail=()=>{
    // Render a rotated, fixed-position email link with animation and horizontal line
    return <div className="flex md-mx:hidden text-textColor items-center gap-10 fixed bottom-32 -right-48 rotate-90">
        <div className="flex" data-aos-duration="800" data-aos="fade-down-left">
            {/* Email link with hover effect */}
            <a  href="mailto:chandrabhan.work@gmail.com" className="font-mono tracking-wide hover:text-primaryColor hover:-translate-x-1 transition transform duration-300 ease-in-out">
                qmanishkumar562@gmail.com
            </a>
        </div>
        {/* Decorative horizontal line */}
        <hr className="border w-40 rounded-full  bg-textColor border-textColor"/>
    </div>
}
// Exporting Mail component as default
export default Mail;