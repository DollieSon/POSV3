import supabase from "../Supabase";

export const SendOrder = async (OrderList,Total) =>{

    const { data, error } = await supabase
    .from('Orders')
    .insert([
        { Order: OrderList, Total: Total }
    ])
    if(data){
        console.log("Order Sent")
    }
    if(error){
        console.log(error)
    }
}