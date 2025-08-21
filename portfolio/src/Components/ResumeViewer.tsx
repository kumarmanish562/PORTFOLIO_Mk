import { ActionIcon, Modal, ScrollArea, Tooltip, useMatches } from "@mantine/core";
import { IconArrowBigDownLineFilled } from "@tabler/icons-react";
import { Document, Page } from "react-pdf";
import { Info } from "../User";
import { useState } from "react";

// ResumeViewer component definition
const ResumeViewer = (props: any) => {
    // Responsive button size using useMatches hook
    const btn=useMatches({
        xs:'xs',
        sm:'sm',
        md:'md',
    })
    
    // State to track if PDF failed to load
    const [pdfError, setPdfError] = useState(false);
    // State to track if we should use iframe fallback
    const [useIframeFallback, setUseIframeFallback] = useState(false);
    
    // Error handling for PDF loading
    const onDocumentLoadError = (error: any) => {
        console.error('PDF load error:', error);
        setPdfError(true);
        // Try iframe fallback first
        setUseIframeFallback(true);
    };

    // Success handler for PDF loading
    const onDocumentLoadSuccess = () => {
        setPdfError(false);
        setUseIframeFallback(false);
    };

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
                    <ActionIcon className="!text-primaryColor" component="a" href="ManishKumar.pdf" size={btn} download="ManishKumar.pdf" variant="outline" color="#64FFDA">
                        <IconArrowBigDownLineFilled className=" xs-mx:!w-[16px] xs-mx:!h-" />
                    </ActionIcon>
                    </Tooltip>
                </Modal.Title>
                {/* Close button for modal */}
                <Modal.CloseButton size="md" iconSize="30px" className="!bg-bgColor !text-red-500" />
            </Modal.Header>
            {/* Modal body with PDF document preview */}
            <Modal.Body className="!bg-bgColor xs-mx:!p-2 !pt-2 !border-primaryColor  !border-2 xs-mx:!border xs-mx:!border-t-0 !border-t-0 !rounded-bl-3xl !rounded-br-3xl ">
                {useIframeFallback ? (
                    /* iframe fallback when react-pdf fails */
                    <div className="w-full">
                        <iframe 
                            src="ManishKumar.pdf#toolbar=0&navpanes=0&scrollbar=0" 
                            className="w-full h-96 rounded-xl border border-primaryColor"
                            title="Resume Preview"
                            onError={() => {
                                // If iframe also fails, show download option
                                setUseIframeFallback(false);
                                setPdfError(true);
                            }}
                        >
                            <p className="text-textColor p-4">
                                Your browser does not support PDF viewing. 
                                <a href="ManishKumar.pdf" className="text-primaryColor underline ml-1">
                                    Click here to download
                                </a>
                            </p>
                        </iframe>
                    </div>
                ) : pdfError ? (
                    /* Final fallback when both react-pdf and iframe fail */
                    <div className="text-center p-8">
                        <div className="text-red-500 text-xl mb-4">Unable to preview PDF</div>
                        <div className="text-textColor mb-6">The PDF file cannot be displayed in the browser.</div>
                        <a 
                            href="ManishKumar.pdf" 
                            download="ManishKumar.pdf"
                            className="inline-block bg-primaryColor text-bgColor px-6 py-3 rounded-lg hover:bg-opacity-90 transition-all duration-300"
                        >
                            Download Resume Instead
                        </a>
                    </div>
                ) : (
                    /* Primary PDF Document viewer using react-pdf */
                    <Document 
                        className="w-full !rounded-2xl !overflow-hidden !min-w-40 !min-h-14" 
                        file="ManishKumar.pdf"
                        onLoadError={onDocumentLoadError}
                        onLoadSuccess={onDocumentLoadSuccess}
                        loading={<div className="text-white text-center p-4">Loading Resume...</div>}
                    >
                        <Page 
                            className="w-full !min-w-40 !min-h-14 md-mx:[&>.react-pdf\_\_Page\_\_canvas]:!w-full md-mx:[&>.react-pdf\_\_Page\_\_canvas]:!h-auto" 
                            pageNumber={1} 
                            renderTextLayer={false} 
                            renderAnnotationLayer={false} 
                        />
                    </Document>
                )}
            </Modal.Body>
        </Modal.Content>
    </Modal.Root>
}
// Exporting ResumeViewer component as default
export default ResumeViewer;