import { ActionIcon, Modal, ScrollArea, Tooltip, useMatches } from "@mantine/core";
import { IconArrowBigDownLineFilled } from "@tabler/icons-react";
import { Document, Page } from "react-pdf";
import { Info } from "../User";

// ResumeViewer component definition
const ResumeViewer = (props: any) => {
    // Responsive button size using useMatches hook
    const btn=useMatches({
        xs:'xs',
        sm:'sm',
        md:'md',
    })
    // Modal root with scrollable area and custom styling
    return <Modal.Root scrollAreaComponent={ScrollArea.Autosize} size="auto" centered className=" font-mono" opened={props.opened} onClose={props.close}>
        {/* Modal overlay with blur effect */}
        <Modal.Overlay className="!backdrop-opacity-85 blur-sm" />
        {/* Modal content with rounded corners */}
        <Modal.Content className="!rounded-3xl">
            {/* Modal header with title and close button */}
            <Modal.Header className="!bg-bgColor xs-mx:!p-2 !border-primaryColor xs-mx:!border  !border-2 xs-mx:!border-b-0 !border-b-0 !rounded-tl-3xl !rounded-tr-3xl">
                {/* Modal title with download tooltip and action icon */}
                <Modal.Title data-autofocus className="!text-4xl xs-mx:!text-2xl text-white flex gap-3 items-center !font-bold">Resume
                <Tooltip label="Download" className="!text-bgColor" color="#64FFDA" position="right" offset={5}>
                    <ActionIcon className="!text-primaryColor" component="a" href="Resume.pdf" size={btn} download={Info.name} variant="outline" color="#64FFDA">
                        <IconArrowBigDownLineFilled className=" xs-mx:!w-[16px] xs-mx:!h-" />
                    </ActionIcon>
                    </Tooltip>
                </Modal.Title>
                {/* Close button for modal */}
                <Modal.CloseButton size="md" iconSize="30px" className="!bg-bgColor !text-red-500" />
            </Modal.Header>
            {/* Modal body with PDF document preview */}
            <Modal.Body className="!bg-bgColor xs-mx:!p-2 !pt-2 !border-primaryColor  !border-2 xs-mx:!border xs-mx:!border-t-0 !border-t-0 !rounded-bl-3xl !rounded-br-3xl ">
                <Document className="w-full !rounded-2xl !overflow-hidden !min-w-40 !min-h-14" file="Resume.pdf" >
                    <Page className="w-full !min-w-40 !min-h-14 md-mx:[&>.react-pdf\_\_Page\_\_canvas]:!w-full md-mx:[&>.react-pdf\_\_Page\_\_canvas]:!h-auto" pageNumber={1} renderTextLayer={false} renderAnnotationLayer={false} />
                </Document>
            </Modal.Body>
        </Modal.Content>
    </Modal.Root>
}
// Exporting ResumeViewer component as default
export default ResumeViewer;