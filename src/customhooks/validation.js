const useEvalEmail = (email) => {
    console.log(email);
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
}
const useEvalPassword = (password) => {
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/;
    return passwordPattern.test(password);
}
const useEvalotp = (otp) => {
    const otpPattern = /^\d{6}$/;
    return otpPattern.test(otp);
}
export {useEvalEmail, useEvalPassword, useEvalotp};