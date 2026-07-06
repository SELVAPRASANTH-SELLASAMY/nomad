import RectDom from 'react-dom';
import { useWindowSize } from '../hooks';
import Option from './Option';
function CompactOption({children}){
    const windowSize = useWindowSize();

    if(windowSize <= 768) {
        return RectDom.createPortal(
            <dialog className="d-flex items-center justify-center text-white fixed top-0 right-0 bottom-0 left-0 z-index-modal no-border w-full h-full bg-overlay px-xl py-xl">
                {children}
            </dialog>,
            document.getElementById('modal')
        );
    }

    return (
        <>{children}</>
    );
}

export default CompactOption;