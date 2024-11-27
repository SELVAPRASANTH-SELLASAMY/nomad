import sampImg from '../../assets/2150062008.webp';
function Blogtile(){
    return(
        <div className='w-20rem'>
            <img className='w-100' src={sampImg} alt="Blog" />
            <h6 className='fs-4 font-weight-500'>What is React hooks? Best practices in react hooks.</h6>
        </div>
    );
}
export default Blogtile;