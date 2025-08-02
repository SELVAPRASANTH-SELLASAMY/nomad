function StatCard({icon,title,count}){
    return(
        <div className="bg-tile-blue d-flex center-y p-05 rounded-05 gap-1 shadow-primary w-min-15rem pointer scroll-snap-align-start">
            <div className="h-2_5rem aspect-ratio-equal bg-common-blue fs-5_5 d-iflex center-y justify-center border-grey-005 rounded-05">
                {icon}
            </div>
            <div>
                <p className="fs-3 text-secondary font-weight-500">{title}</p>
                <p className="fs-5 font-weight-600">{count}</p>
            </div>
        </div>
    );
}
export default StatCard;