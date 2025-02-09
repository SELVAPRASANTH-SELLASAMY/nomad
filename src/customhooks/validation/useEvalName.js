const useEvalUserName = (userName) => {
    const pattern = /^[A-Za-z_ ]{5,10}$/;
    return pattern.test(userName);
}
export default useEvalUserName;