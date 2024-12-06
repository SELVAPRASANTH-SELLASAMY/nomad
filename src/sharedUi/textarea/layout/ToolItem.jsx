function ToolItem({children, name}){
    return(
        <span title={name} className={`${name} fs-5_5 pointer w-3rem h-100p d-flex center-y justify-center hover-green`}>
            {children}
        </span>
    );
}
export default ToolItem;