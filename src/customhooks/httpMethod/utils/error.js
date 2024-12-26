const error = (err,alert) => {
    if(err.response){
        const { status, data } = err.response;
        if(status === 500){
            const { message, error } = data;
            alert(message,false);
            console.log(error);
        }
        else{
            alert(data,false);
            console.log(data);
        }
    }
    else{
        alert(err.message,false);
        console.log(err);
    }
}
export { error };