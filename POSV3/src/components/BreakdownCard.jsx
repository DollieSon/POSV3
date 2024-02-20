import "../css/BreakdownCard.css"
const BreakdownCard = ({Count,Name,Price,Total,decreaseItem,removeItemById}) => {
    return ( 
    <div className="BreakdownCard">
        {/* {console.log(Price)} */}
        <p className="BCName">{Name}</p>
        <p className="BCPrice">{Price}</p>
        <div className="BCCount">
            {Object.entries(Count).map(([ind,val])=>(
            <div key={Name+ind} className="buttoned">
            <p>{ind} : {val}</p>
            <button className="RemoveOne MiniB" onClick={()=>{decreaseItem(ind)}}>-</button>
            </div>
            ))}
        </div>
        <p className="BCTotal">{Total}</p>
        <div className="Minibuttons">
            <button className="RemoveAll MiniB" onClick={()=>{removeItemById()}}>X</button>
        </div>
    </div> );
}
 
export default BreakdownCard;