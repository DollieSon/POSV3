import { useState,useContext } from "react";
import { BasicNeedsContext } from "../App";
import '../css/SubmitModal.css'

const SubmitModal = () => {
    const {OrderList,Total,ItemsbyID} = useContext(BasicNeedsContext);
    return ( 
    <div className="SubmitionModal">
        <div className="Contents">
            <p className="Title">Order Summary</p>
            <div className="OrderList">
                {Object.entries(OrderList).map(([key,val])=>(
                    <div className="OrderItem" key={"OI"+key}>
                        <p className="Count">{Object.values(val['count']).reduce((a,b)=>a+b)}</p>
                        <p className="Name">{ItemsbyID[key]['Name'] }</p>
                        <p className="Price">{Total[key]}</p>
                    </div>
                ))}
            </div>
            <p className="Total">Total : {Total.Total}</p>
        </div>
        <div className="btns">
            <button className="Submit">Submit</button>
            <button className="Cancel">Cancel</button>
        </div>
    </div> );
}
 
export default SubmitModal;