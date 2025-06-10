// validateForm function to validate form fields based on id and value
const validateForm=(id:string, value:any)=>{
    switch(id){
        // Name validation
        case 'name':
            if(value.length===0)return "Name is required";
            if(value.length<3)return "Name must be atleast 3 characters long";
            return "";
        // Email validation
        case 'email':
            if(value.length===0)return "Email is required";
            if(!/[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/.test(value))return "Email is invalid";
            return "";
        // Phone number validation
        case 'phone':
            if(value.length===0)return "Phone Number is required";
            if(!/^[0-9]*$/.test(value))return "Phone Number is invalid";
            if(value.length!==10)return "Phone Number must be 10 digits long";
            return "";
        // Message validation
        case 'message':
            if(value.length===0)return "Message is required";
            return "";
        // Default case for unknown fields
        default:
            return "";
    }
}
// Exporting validateForm function
export {validateForm}