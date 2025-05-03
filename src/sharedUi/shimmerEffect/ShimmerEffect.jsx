import "./loading.css";
function ShimmerEffect(){
    return(
        <div className="bg-tile-blue p-1 rounded-1 d-flex flex-col gap-05 justify-space-between border-grey-005">
            <div className="w-100 aspect-ratio-21 rounded-top-1 loading-tile"></div>
            <div style={{height:"25px"}} className="title-animation loading-tile rounded-025"></div>
            {
                Array.from({length:1},(_,index) => (
                    <div key={index} className='fs-3 d-iflex gap-05'>
                        <span style={{height:"15px"}} className="title-animation loading-tile rounded-025 w-100"></span>
                        <span style={{height:"15px"}} className="title-animation loading-tile rounded-025 w-100"></span>
                    </div>
                ))
            }
            <hr className='border-grey-005 mtb-025'></hr>
            <div className='fs-3 d-iflex gap-05'>
                <div style={{minWidth:'1.5rem'}} className='loading-tile w-015rem aspect-ratio-equal rounded-100px'></div>
                <span style={{height:"25px"}} className="title-animation loading-tile rounded-025 w-100"></span>
            </div>
        </div>
    );
}
export default ShimmerEffect;