const error = (err,alert) => {
    if(err.response){
        const { status, data } = err.response;
        if(status === 500){
            const { message, error } = data;
            alert(message,false);
            console.error(error);
        }
        else{
            alert(data,false);
            console.error(data);
        }
    }
    else{
        alert(err.message,false);
        console.error(err);
    }
}
export { error };