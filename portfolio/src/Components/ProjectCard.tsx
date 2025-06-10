import { Badge, Button, Card, Group, Image, Indicator, Text, useMatches } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import FullProjectModal from "./FullProjectModal";

// ProjectCard component definition
const ProjectCard = (props: any) => {
    // useDisclosure hook to manage modal open/close state
    const [opened, { open, close }] = useDisclosure(false);
    // Responsive badge size for technology tags
    const badge=useMatches({
        xsm:"sm", md:"md", lg:"lg"
    });
    // Responsive button size
    const btn =useMatches({
        xs:"xs", sm:"sm", md:"md"
    });
    // Main card container with project preview and modal trigger
    return <div className="w-[32%] lg-mx:w-[46%] md-mx:w-[48%] sm-mx:w-[90%] xs-mx:w-full" data-aos="fade-up" data-aos-duration="800">
        {/* Card component with image, title, badges, description, and button */}
        <Card onClick={open}  className="!bg-bgColor cursor-pointer transition-transform duration-300 ease-in-out hover:!scale-[1.02] mb-5 hover:!shadow-[0_0_10px_1px_#64FFDA80] xs-mx:!shadow-[0_0_10px_1px_#64FFDA80] !border-primaryColor border-2"  shadow="lg" padding="sm" radius="lg" withBorder>
            {/* Project image */}
            <Card.Section className="p-3">
                <Image
                    className="!rounded-xl !shadow-[0_0_5px_0_#64FFDA]"
                    src={props.image}
                    alt={props.image}
                />
            </Card.Section>
            {/* Project title and live badge */}
            <Group justify="space-between" mt="xs" mb="xs">
                <div className="!text-2xl gap-2 !font-bold !text-white flex items-center sm-mx:!text-xl" >
                    {props.title}
                    {props.live === true && 
                        <Badge className="!px-1" variant="outline" color="red" rightSection={<Indicator className="!mr-0.5 !z-0" color="red" position="middle-end" size={7} processing></Indicator>} >
                            Live
                        </Badge>
                    }
                </div>
            </Group>
            {/* Technology badges (show up to 3) */}
            <Group mb="sm" className="!gap-2">
                {props.technologies.map((tech: string, index: number) => index < 3 && <Badge key={index} size={badge} variant="light" color="#64FFDA">{tech}</Badge>)}
            </Group>
            {/* Project description (clamped to 5 lines) */}
            <Text className="!text-justify !text-sm xs-mx:!text-xs" lineClamp={5} size="sm" c="dimmed">
                {props.desc}
            </Text>
            {/* Show More button to open modal */}
            <Button onClick={open} className="" color="#64FFDA" variant="outline" mt="md" radius="md">
                Show More
            </Button>
        </Card>
        {/* FullProjectModal for detailed project view */}
        <FullProjectModal opened={opened} close={close} title={props.title} desc={props.desc} image={props.image} live={props.live} link={props.link} github={props.github} technologies={props.technologies} />
    </div>
}
// Exporting ProjectCard component as default
export default ProjectCard;