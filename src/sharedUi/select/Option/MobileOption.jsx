import ReactDOM from 'react-dom';

function MobileOption({onClick,expand,children}){
    if(!expand) return null;

    return ReactDOM.createPortal(
        <div onClick={onClick} className="fixed top-0 bottom-0 left-0 right-0 bg-overlay d-grid place-content-center z-index-110 w-child-min-18rem_L_768">
            {children}
        </div>,
        document.getElementById('flash')
    );
}

export default MobileOption;