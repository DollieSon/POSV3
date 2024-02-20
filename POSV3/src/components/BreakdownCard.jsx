import "../css/BreakdownCard.css"
const BreakdownCard = ({Count,Name,Price,Total}) => {
    return ( 
    <div className="BreakdownCard">
        {/* {console.log(Price)} */}
        <p className="BCName">{Name}</p>
        <p className="BCPrice">{Price}</p>
        <div className="BCCount">
            {Object.entries(Count).map(([ind,val])=>(<p key={Name+ind}>{ind} : {val}</p>))}
        </div>
        <p className="BCTotal">{Total}</p>
    </div> );
}
 
export default BreakdownCard;