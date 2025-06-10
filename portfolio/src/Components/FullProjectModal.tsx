// Importing Mantine UI components and hooks
import { Badge, Button, Group, Image, Indicator, Modal, ScrollArea, Text, useMatches } from "@mantine/core";

// FullProjectModal component definition
const FullProjectModal = (props: any) => {
    // Responsive badge size for download indicator
    const download=useMatches({xs:"xs", md:"sm", lg:"md", bs:"lg"});
    // Responsive badge size for technology tags
    const techno=useMatches({xs:"md", sm:"md", md:"lg", bs:"xl"});
    // Responsive button size
    const btn =useMatches({xs:'xs',sm:'sm',md:'md',lg:'lg'});
    // Modal root with scrollable area and custom styling
    return <Modal.Root scrollAreaComponent={ScrollArea.Autosize} size="auto" centered className=" font-mono" opened={props.opened} onClose={props.close}>
        {/* Modal overlay with blur effect */}
        <Modal.Overlay className="!backdrop-opacity-85 blur-sm" />
        {/* Modal content with rounded corners */}
        <Modal.Content className="!rounded-3xl">
            {/* Modal header with title and close button */}
            <Modal.Header className="!bg-bgColor xs-mx:!p-2  !border-primaryColor  !border-2 !border-b-0 !rounded-tl-3xl !rounded-tr-3xl">
                {/* Project title and live badge if applicable */}
                <Modal.Title data-autofocus className="!text-4xl sm-mx:!text-3xl xs-mx:!text-2xl xsm-mx:!text-xl text-white flex gap-3 xs-mx:gap-1 items-center !font-bold">{props.title}{props.live === true && <Badge className="flex items-center gap-1" size={download} variant="outline" color="red" rightSection={<Indicator color="red" position="middle-end" size={10} processing></Indicator>} >Live</Badge>}</Modal.Title>
                {/* Close button */}
                <Modal.CloseButton size="md" iconSize="30px" className="!bg-bgColor !text-red-500" />
            </Modal.Header>
            {/* Modal body with project details */}
            <Modal.Body className="!bg-bgColor xs-mx:!p-2 !pt-2 !border-primaryColor  !border-2 !border-t-0 !rounded-bl-3xl !rounded-br-3xl">
                {/* Project image */}
                <Image
                    className="!rounded-xl !shadow-[0_0_5px_0_#64FFDA]"
                    src={props.image}
                    alt={props.image}
                />
                {/* Technology badges */}
                <div className="flex flex-wrap gap-3 xs-mx:gap-2 my-3">
                    {props.technologies.map((tech: string, index: number) => <Badge key={index} size={techno} variant="light" color="#64FFDA">{tech}</Badge>)}
                </div>
                {/* Project description */}
                <Text className="!text-justify !text-lg sm-mx:!text-base xs-mx:!text-xs"  c="dimmed">
                    {props.desc}
                </Text>
                {/* Action buttons for code and live app */}
                <Group justify="space-between" mt="md" mb={3} >
                    {/* Button to view code on GitHub */}
                    <a href={props.github} target="_blank" className="!w-[48%] sm-mx:!w-[46%]"><Button variant="outline" size={btn} color="#64FFDA" fullWidth  radius="md">
                        View Code
                    </Button>
                    </a>
                    {/* Button to view live app */}
                    <a href={props.link} target="_blank" className="!w-[48%] "><Button size={btn} color="#64FFDA" className="!text-bgColor" fullWidth radius="md">
                        View Live App
                    </Button></a>
                </Group>
            </Modal.Body>
        </Modal.Content>
    </Modal.Root>

}
// Exporting FullProjectModal component as default
export default FullProjectModal;