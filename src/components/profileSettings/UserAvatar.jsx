function UserAvatar(){
    return(
        <div className="d-flex center-y gap-2">
            <input type="file" accept="image/*" style={{display:"none"}}/>
            <canvas className='h-7rem aspect-ratio-equal border-green-01 rounded-100px bg-lgreen'></canvas>
            <button className="bg-green fs-4 ptb-025 plr-15 rounded-05 font-weight-500 uppercase">Upload new picture</button>
            <button className="bg-lgreen fs-4 ptb-025 plr-15 text-white rounded-05 font-weight-500 uppercase outline-green-01">Delete</button>
        </div>
    );
}
export default UserAvatar;