import ItemCard from "./ItemCard";
import supabase from "../Supabase";
import { useState,useEffect } from "react";
import '../css/ItemMenu.css'
const ItemMenu = ( {ItemsbyCat,FetchError,addItem} ) => {
    
    return (
        <div className="ItemList">
            {FetchError != null ? (<p>{FetchError}</p> ) : (null)}
            {ItemsbyCat && (Object.keys(ItemsbyCat).map(elem=>(
                <div key={"Cat"+elem} className={"Cat"+elem}>
                    <p className="CategryTag">{elem}</p>
                    <div className="ItemGroup">
                        {ItemsbyCat[elem].map(item =>(
                            <ItemCard key={"IC"+item.id}ItemInfo={item} addItem = {addItem}/>
                        ))}
                    </div>
                </div>
            )))}
        </div>
     );
}
 
export default ItemMenu;