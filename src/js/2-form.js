const formData = {
 email: "",
 message: "",
}

const form = document.querySelector(".feedback-form");
const formStringData = localStorage.getItem("feedback-form-state") ?? "";
const formParseData = formStringData ? JSON.parse(formStringData) : { email: "", message: "" };
form.elements.email.value = formParseData.email;
form.elements.message.value = formParseData.message;
form.addEventListener("input", () => {
    formData.email = form.elements.email.value.trim()
    formData.message = form.elements.message.value.trim()
    localStorage.setItem("feedback-form-state", JSON.stringify(formData))
    
})
form.addEventListener("submit", evt => {
    evt.preventDefault()
    const submitFormData = {
        email: evt.target.elements.email.value.trim(),
        message: evt.target.elements.message.value.trim()
    };
    
    if (submitFormData.email === "" || submitFormData.message === "") {
        return alert("All form fields must be filled in");
    }
    
    console.log(submitFormData)
    localStorage.removeItem("feedback-form-state")
    form.reset()
})