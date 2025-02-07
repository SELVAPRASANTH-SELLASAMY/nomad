const useEvalPhone = (phone) => {
    const pattern = /^[789][0-9]{9}$/;
    return pattern.test(phone);
}
export default useEvalPhone;