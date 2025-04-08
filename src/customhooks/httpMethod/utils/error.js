const error = (err,alert) => {
    if(err.response){
        const { data } = err.response;
        const { message, error } = data;
        alert(message,false);
        error ? console.error(error) : console.log(message);
    }
    else{
        alert(err.message,false);
        console.error(err);
    }
}
export { error };