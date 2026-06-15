const isValidEmail = (email) => {
    const condition  = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return condition.test(email);
}

const isValidPassword = (password) => {
    const condition = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{6,}/;
    return condition.test(password);
}

const isValidOTP = (OTP) => {
    return OTP.length === 6;
}

const isValidName = (name) => {
    return name.length >= 3;
}

export { isValidEmail, isValidPassword, isValidOTP, isValidName };