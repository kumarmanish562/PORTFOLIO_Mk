import { useEffect, useState } from "react";
import Header from "./Header"
import { Toaster } from "react-hot-toast"; 
import Mail from "./Mail";
import Social from "./Social";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Experience from "./Experience";
import Contact from "./Contact";
import Footer from "./Footer";
import { Loader } from "./Loader";

// HomePage component definition
const HomePage = () => {
    // State to control loading spinner
    const [loading, setLoading] = useState(true);
    // useEffect to simulate loading for 5 seconds
    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false);
        }, 5000) 
    }, [])
    // Main container with conditional rendering for loader or main content
    return <div className={` focus-visible:[&_button]:!outline-none min-h-[100dvh] ${loading?"flex":""} items-center overflow-hidden justify-center`}>
        {/* Render main content after loading, otherwise show Loader */}
        {   loading!==true?<>
            {/* Toast notifications */}
            <Toaster/>
            {/* Header/navbar */}
            <Header />
            {/* About section */}
            <About />
            {/* Projects section */}
            <Projects />
            {/* Skills section */}
            <Skills />
            {/* Experience section */}
            <Experience />
            {/* Contact section */}
            <Contact />
            {/* Footer section */}
            <Footer />
            {/* Floating mail icon */}
            <Mail />
            {/* Social media sidebar */}
            <Social />
            </>
            // Loader spinner while loading is true
            :<Loader/>

        }
    </div>
};
// Exporting HomePage component as default
export default HomePage;