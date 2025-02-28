const useEvalUserName = (userName) => {
    const pattern = /^[A-Za-z_ ]{5,20}$/;
    return pattern.test(userName);
}
export default useEvalUserName;