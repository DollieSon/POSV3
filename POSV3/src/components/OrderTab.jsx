import BreakdownCard from "./BreakdownCard";
import "../css/OrderTab.css"
import SubmitModal from "./SubmitModal";
import { useState } from "react";
const OrderTab = ({ItemListID,OrderList,Total,decreaseItem,removeID}) => {
    const [isModal, setIsModal] = useState(false)
    return ( 
        <div className="OrderTab">
            {/*{isModal ? <SubmitModal/> : null} */}
            <div className="Info">
                <p className="ContumerID">ID :</p>
                <p className="Total">Total: {Total.Total}</p>
            </div>
            <div className="Breakdown">
                {(OrderList && Object.keys(OrderList).length == 0) ? (null):(
                    Object.entries(OrderList).map(([key,val])=>(
                        // console.log(key,":",val['count'])    
                        <BreakdownCard key={"BC"+key} Count={val['count']} Name={ItemListID[key]['Name']} Price={ItemListID[key]['Price']} 
                            Total={Total[key]} decreaseItem={(type)=>{decreaseItem(key,type)}} removeItemById={()=>{removeID(key)}}/>
                    ))
                )}
            </div>   
            <div className="helperbutton">
                <button className="SendOrder" onClick={()=>{setIsModal(true)}}>Send Order</button>
                <button className="clearOrder">Clear Order</button>
            </div>
        </div>
     );
}
 
export default OrderTab;