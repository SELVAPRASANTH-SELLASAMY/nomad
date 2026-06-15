function Checkbox({check,setCheck}){
    return(
        <label htmlFor="show-password" className="fs-sm my-lg d-inline-flex gap-md">
            <input 
                type="checkbox" 
                id="show-password"
                value={check}
                onChange={(e) => setCheck(e.target.checked)}
            />
            show password
        </label>
    );
}

export default Checkbox;