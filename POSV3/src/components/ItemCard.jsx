import '../css/ItemCard.css'
const ItemCard = ({ItemInfo,addItem}) => {
    //console.log(ItemInfo.types);
    
    return ( 
        <div className="ItemCard">
            <p>{ItemInfo.Name}</p>
            <p>{ItemInfo.Price}</p>
            <div className="Types">
                {ItemInfo.types != null ? (ItemInfo.types.map(type=>(
                    <button key={ItemInfo.id + type} onClick={()=>{addItem(ItemInfo.id,type)}}>{type}</button>
                ))): (<button onClick={()=>{addItem(ItemInfo.id,null)}}>Order</button>)}
            </div>
        </div>
     );
}
 
export default ItemCard;