// Importing Info object containing user details
import { Info } from "../User";
// Importing Typewriter effect for animated text
import Typewriter from "typewriter-effect";
// Importing Button and useMatches hook from Mantine UI library
import { Button, useMatches } from "@mantine/core";
// Importing ResumeViewer component for displaying resume modal
import ResumeViewer from "./ResumeViewer";
// Importing useDisclosure hook for modal open/close state
import { useDisclosure } from "@mantine/hooks";
// Importing download icon from Tabler Icons
import { IconDownload } from "@tabler/icons-react";
// Importing custom Particles background component
import Particles from "./magicui/Particles";
// Importing NeonGradientCard for profile image styling
import { NeonGradientCard } from "./magicui/neon-gradient-card";

// About component definition
const About = () => {
    // useDisclosure hook to manage ResumeViewer modal state
    const [opened, { open, close }] = useDisclosure(false);
    // useMatches hook to determine button size responsively
    const btn =useMatches({
        xs:'xs',
        sm:'sm',
        md:'md',
        lg:'lg'
    })
    return (
        <>
            {/* Main container with animation and responsive classes */}
            <div data-aos="zoom-out-up" data-aos-duration="800" className="mt-28 flex relative overflow-hidden justify-around items-center font-mono px-10 py-10 sm-mx:px-4 xs-mx:px-2 xs-mx:py-4 h-fit lg-mx:justify-between bs-mx:flex-wrap bs-mx:flex-col-reverse bs-mx:!overflow-visible bs-mx:gap-6 md-mx:px-6" id="About">
                {/* Animated particles background */}
                <Particles
                    className="absolute -z-20 inset-0"
                    quantity={1000}
                    ease={80}
                    vx={.1}
                    vy={.1}
                    color="#64FFDA"
                    refresh
                />
                {/* Left section: Text and buttons */}
                <div className="bs:ml-10 bs:w-3/5 flex flex-col lg-mx:gap-3  bs-mx:items-center">
                    {/* Greeting text */}
                    <div className="text-primaryColor text-3xl lg-mx:text-2xl xs-mx:text-xl xsm-mx:text-lg">Hi, I am</div>
                    {/* User name */}
                    <div className="text-white text-[4.25rem] font-extrabold lg-mx:text-5xl sm-mx:text-4xl xs-mx:text-3xl xsm-mx:text-[27px]">{Info.name}</div>
                    {/* Typewriter effect for stack/role */}
                    <div className="text-white text-4xl flex font-semibold lg-mx:text-[27px] sm-mx:text-2xl xs-mx:text-xl xsm-mx:text-lg">I'm a&nbsp;<span className="text-primaryColor"><Typewriter options={{ strings: Info.stack, autoStart: true, loop: true, }} /> </span></div>
                    {/* User bio */}
                    <div className="text-textColor text-xl w-[90%] text-justify my-8 lg-mx:my-0 font-semibold lg-mx:text-base sm-mx:text-sm xs-mx:text-xs">{Info.bio}</div>
                    {/* Buttons for resume modal and download */}
                    <div className="xs-mx:w-[90%] flex gap-3 xs-mx:justify-between">
                        {/* Button to open ResumeViewer modal */}
                        <Button onClick={open} className="focus-visible:!outline-none !text-bgColor !w-fit xs-mx:!w-[46%]" size={btn} variant="filled" color="#64FFDA">Check Resume</Button>
                        {/* Button to download resume PDF */}
                        <Button component="a" href="Resume.pdf" download={Info.name} className="focus-visible:!outline-none !text-primaryColor !w-fit xs-mx:!w-[46%]" size={btn} variant="outline" color="#64FFDA" rightSection={<IconDownload size={20} />}>Download</Button>
                    </div>
                </div>
                {/* Right section: Profile image with neon gradient card */}
                <div className="h-fit flex justify-center items-center rounded-full bs:mr-10 w-fit">
                    <NeonGradientCard className="w-[325px] h-[325px] lg-mx:w-64 lg-mx:h-64 xsm-mx:w-56 xsm-mx:h-56 items-center justify-center text-center">
                        <img className="w-full  h-full rounded-full " src="profile.jpg" alt="profile" />
                    </NeonGradientCard>
                </div>
            </div>
            {/* ResumeViewer modal component */}
            <ResumeViewer opened={opened} close={close} />
        </>
    )
}
// Exporting About component as default
export default About;