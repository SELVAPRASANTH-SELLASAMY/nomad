import RectDom from 'react-dom';
function CompactOption({children}){
    return RectDom.createPortal(
        <dialog onScroll={(e) => e.preventDefault()} className="d-flex items-center justify-center text-white fixed top-0 right-0 bottom-0 left-0 z-index-modal no-border w-full h-full bg-overlay">
            {children}
        </dialog>,
        document.getElementById('modal')
    );
}

export default CompactOption;