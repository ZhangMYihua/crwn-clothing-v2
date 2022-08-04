export const defaultRegisterFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
};

export const RegisterFormInputData = [
    {
        label: "Name",
        required: true,
        type: "text",
        name: "displayName",
        value: "displayName",
    },
    {
        label: "Email",
        required: true,
        type: "email",
        name: "email",
        value: "email",
    },
    {
        label: "Password",
        required: true,
        type: "password",
        name: "password",
        value: "password",
    },
    {
        label: "Confirm Password",
        required: true,
        type: "password",
        name: "confirmPassword",
        value: "confirmPassword",
    }
]
