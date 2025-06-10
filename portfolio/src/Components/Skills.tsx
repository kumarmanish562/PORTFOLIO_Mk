import { SkillInfo } from "../User";
import SkillCard from "./SkillCard";

// Skills component definition
const Skills=()=>{
    // Render skills section with title and skill cards
    return <div className="px-16 md-mx:px-6 my-10 font-mono" id="Skills">
            {/* Section title */}
            <h1 className="text-4xl sm-mx:text-3xl xs-mx:text-2xl mb-10 font-bold text-center text-white"><span className="text-primaryColor">03.&nbsp;</span>Skills</h1>
            {/* Container for skill cards */}
            <div className="flex flex-wrap justify-around md-mx:justify-between sm-mx:justify-center gap-4 md-mx:gap-2">
            {
                // Map through SkillInfo and render a SkillCard for each skill group
                SkillInfo.map((skill:any, index:number)=><SkillCard key={index} title={skill.title} skills={skill.skills} />)
            }
            </div>
        </div>
}
// Exporting Skills component as default
export default Skills;