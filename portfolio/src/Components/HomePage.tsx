import { useEffect, useState } from "react";
import Header from "./Header"
import { Toaster } from "react-hot-toast"; // Add this import or adjust the path if Toaster is local
import { Loader } from "./Loader";
import Mail from "./Mail";
import Social from "./Social";
import About from "./About";

const HomePage = () => {
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false);
        }, 5000) 
    }, [])
    return <div className={` focus-visible:[&_button]:!outline-none min-h-[100dvh] ${loading?"flex":""} items-center overflow-hidden justify-center`}>
{   loading!==true?<>
    <Toaster/>
        <Header />
        <Mail />
        <About />
        <Social />
        </>
        :<Loader/>

        }
    </div>
};
export default HomePage;