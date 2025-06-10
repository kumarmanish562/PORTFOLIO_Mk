// Importing Mantine UI components and hooks
import { Text, Timeline, useMatches } from "@mantine/core";
// Importing icons from Tabler Icons
import { IconBriefcaseFilled, IconGitBranch, IconGitCommit, IconGitPullRequest, IconMessageDots } from "@tabler/icons-react";
// Importing ExperienceInfo data from User file
import { ExperienceInfo } from "../User";

// TimelineItem component to render each experience item
const TimelineItem = (items: any) => {
    // Responsive icon size using useMatches hook
    const size=useMatches({
        xs:15,
        md:20,
    })
    // Mapping through each experience item and rendering Timeline.Item
    return items.map((item: any, index: number) => <Timeline.Item data-aos="fade-up" data-aos-duration="800"
        key={index} className="!pt-12 !mb-2 sm-mx:!p-1" bullet={<IconBriefcaseFilled className="!text-bgColor" size={size} />} >
        <div className="border shadow-[0_0_10px_0_#64FFDA50] hover:-translate-y-2 transition transform duration-300 ease-in-out flex flex-col gap-2 border-primaryColor p-4 rounded-2xl sm-mx:p-2">
            {/* Company logo and role */}
            <div className="flex gap-2 items-center">
                <img className="rounded-lg w-16 md-mx:w-14" src={`${item.company}.png`} alt="Company" />
                <div className="flex flex-col">
                    <div className="text-white text-2xl font-semibold sm-mx:text-xl xs-mx:text-lg xsm-mx:text-base">{item.role}</div>
                    <div className="text-lg font-semibold text-textColor md-mx:text-base sm-mx:text-sm xs-mx:text-xs">{item.company} &#x2022; {item.date}</div>
                </div>
            </div>
            {/* Experience description */}
            <div className="text-textColor leading-6 text-justify md-mx:text-sm xs-mx:text-xs ">
                {item.desc}
            </div>
            {/* Skills used in the experience */}
            <div className="text-lg font-medium text-textColor md-mx:text-base sm-mx:text-sm xs-mx:text-xs flex gap-1"><div className="font-semibold text-white">Skills:</div>
                <div className="flex gap-1 flex-wrap">
                    {
                        item.skills.map((skill: any, index: number) => <div key={index}> &#x2022; {skill} </div>)
                    }
                </div>
            </div>
        </div>
    </Timeline.Item>)
}

// Experience component definition
const Experience = () => {
    // Responsive icon and dot sizes using useMatches hook
    const size=useMatches({
        xs:15,
        md:20,
    })
    const dot=useMatches({
        xs:25,
        md:30,
    })
    // Main container rendering the timeline of experiences
    return <div className="px-16 mx-20 md-mx:px-6 sm-mx:px-2 lg-mx:mx-0 my-10 mb-28 font-mono" id="Experience">
        {/* Section title */}
        <h1 className="text-4xl sm-mx:text-3xl xs-mx:text-2xl  mb-10 font-bold text-center text-white"><span className="text-primaryColor">04.&nbsp;</span>Experience</h1>
        {/* Timeline component with experience items */}
        <Timeline color="#64FFDA" active={5} bulletSize={dot} lineWidth={2}>
            {
                TimelineItem(ExperienceInfo)
            }
            {/* Final timeline item as a placeholder */}
            <Timeline.Item bullet={<IconBriefcaseFilled className="!text-bgColor" size={size} />} ></Timeline.Item>
        </Timeline>
    </div>
}
// Exporting Experience component as default
export default Experience;