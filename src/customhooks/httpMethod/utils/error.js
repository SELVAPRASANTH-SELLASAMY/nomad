const error = (err,alert) => {
    console.log(err);
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
    else if(err.request){
        alert(err.request,false);
        console.log(err.request);
    }
    else{
        alert(err.message,false);
        console.log(err.message);
    }
}
export { error };