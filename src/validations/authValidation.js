export const validateLogin = ({ username, password }) => {
    let errors = {};


    //    USERNAME VALIDATION

    const usernameRegex = /^[A-Za-z]+$/;

    if (!username || username.trim() === "") {
        errors.username = "Username is required";
    } else if (!usernameRegex.test(username)) {
        errors.username = "Username must contain only letters";
    } else if (username.length < 3) {
        errors.username = "Username must be at least 3 characters";
    }

    /* 
       PASSWORD VALIDATION (STRONG)
       - At least 8 characters
       - One uppercase
       - One lowercase
       - One special character
    */
    const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/;

    if (!password || password.trim() === "") {
        errors.password = "Password is required";
    } else if (!passwordRegex.test(password)) {
        errors.password =
            "Password must be at least 8 characters, include uppercase, lowercase, and special character";
    }

    return {
        isValid: Object.keys(errors).length === 0,
        errors,
    };
};
