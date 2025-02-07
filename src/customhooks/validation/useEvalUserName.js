const useEvalUserName = (userName) => {
    const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{5,}$/;
    return pattern.test(userName);
}
export default useEvalUserName;