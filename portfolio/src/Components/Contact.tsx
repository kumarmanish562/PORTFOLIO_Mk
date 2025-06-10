// Importing React useState hook for state management
import { useState } from "react";
// Importing custom FloatingInput component for form fields
import FloatingInput from "./FloatingInput";
// Importing Button and useMatches hook from Mantine UI library
import { Button, useMatches } from "@mantine/core";
// Importing icons from Tabler Icons
import { IconArrowRight, IconTopologyStar3 } from "@tabler/icons-react";
// Importing custom validation function for form fields
import { validateForm } from "./Validation";
// Importing toast for notifications
import toast from "react-hot-toast";

// Importing Firebase Firestore functions for database operations
import { collection, addDoc } from "firebase/firestore";
// Importing Firebase database instance
import { db } from "../Firebase";

// Formspree endpoint for sending form data
const FORMSPREE_ENDPOINT = "https://formspree.io/f/meokanlq";

// Contact component definition
const Contact = () => {
    // Initial form state
    const form = {
        name: "",
        email: "",
        phone: "",
        message: ""
    };
    // State for form data
    const [formData, setFormData] = useState<{ [key: string]: string }>(form);
    // State for form errors
    const [formError, setFormError] = useState<{ [key: string]: string }>(form);
    // State for loading indicator
    const [loading, setLoading] = useState(false);

    // Handler for input changes, updates form data and error state
    const handleChange = (id: string, value: string) => {
        setFormData({ ...formData, [id]: value });
        setFormError({ ...formError, [id]: validateForm(id, value) });
    };

    // Handler for form submission, sends data to Firebase and Formspree
    const handleSubmit = async () => {
        let valid = true;
        let newFormError: { [key: string]: string } = {};
        // Validate each form field
        for (let key in formData) {
            const error = validateForm(key, formData[key]);
            if (error.length > 0) {
                newFormError[key] = error;
                valid = false;
            }
        }
        setFormError(newFormError);
        if (valid) {
            setLoading(true);
            let firebaseSuccess = true;
            let formspreeSuccess = true;

            // Send form data to Firebase
            try {
                await addDoc(collection(db, "portfolio"), formData);
            } catch (e) {
                firebaseSuccess = false;
            }

            // Send form data to Formspree
            try {
                const response = await fetch(FORMSPREE_ENDPOINT, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(formData),
                });
                if (!response.ok) {
                    formspreeSuccess = false;
                }
            } catch {
                formspreeSuccess = false;
            }

            setLoading(false);

            // Show toast notifications based on submission results
            if (firebaseSuccess && formspreeSuccess) {
                setFormData(form);
                toast.success('Submitted Successfully!', { duration: 4000 });
            } else if (!firebaseSuccess && !formspreeSuccess) {
                toast.error('Failed to send message to both services!', { duration: 4000 });
            } else if (!firebaseSuccess) {
                toast.error('Formspree sent, but Firebase failed!', { duration: 4000 });
            } else if (!formspreeSuccess) {
                toast.error('Firebase saved, but Formspree failed!', { duration: 4000 });
            }
        } else {
            toast.error('Some error occurred!', { duration: 4000 });
        }
    };

    // Responsive button size using useMatches hook
    const btn = useMatches({
        xsm: 'xs',
        sm: "sm",
        md: 'md',
        lg: "lg"
    });

    // Component JSX rendering
    return (
        <div className="px-16 md-mx:px-8 sm-mx:px-4 mx-20 lg-mx:mx-10 md-mx:mx-0 my-10 font-mono" id="Contact">
            {/* Section title */}
            <h1 className="text-4xl sm-mx:text-3xl xs-mx:text-2xl mb-10 font-bold text-center text-white">
                <span className="text-primaryColor">05.&nbsp;</span>Contact
            </h1>
            {/* Contact form container */}
            <div data-aos="flip-left" data-aos-duration="800" className="w-[70%] lg-mx:w-full shadow-[0_0_10px_0_#64FFDA50] m-auto flex flex-col gap-6 border border-primaryColor p-8 rounded-3xl sm-mx:p-4">
                {/* Form heading with icon */}
                <div className="text-3xl flex gap-2 items-center text-white font-semibold sm-mx:text-2xl xs-mx:text-xl">
                    Let's Connect
                    <IconTopologyStar3 className="w-10 text-primaryColor h-10 sm-mx:w-7 sm-mx:h-7" />
                </div>
                {/* Name input field */}
                <FloatingInput id="name" name="Name" value={formData.name} handleChange={handleChange} error={formError.name} />
                {/* Email input field */}
                <FloatingInput id="email" name="Email" value={formData.email} handleChange={handleChange} error={formError.email} />
                {/* Phone input field */}
                <FloatingInput id="phone" name="Phone Number" value={formData.phone} handleChange={handleChange} error={formError.phone} />
                {/* Message input field */}
                <FloatingInput id="message" name="Message" value={formData.message} handleChange={handleChange} error={formError.message} />
                {/* Submit button */}
                <Button
                    fullWidth
                    onClick={handleSubmit}
                    rightSection={<IconArrowRight size={20} />}
                    className="!text-bgColor !font-bold"
                    variant="filled"
                    size={btn}
                    radius="lg"
                    color="#64FFDA"
                    loading={loading}
                >
                    Send
                </Button>
            </div>
        </div>
    );
};
// Exporting Contact component as default
export default Contact;