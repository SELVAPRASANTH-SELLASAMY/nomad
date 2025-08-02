const useEvalotp = (otp) => {
    const otpPattern = /^\d{6}$/;
    return otpPattern.test(otp);
}
export default useEvalotp;