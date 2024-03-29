import ItemMenu from './components/ItemMenu'
import './App.css'
import NavBar from './components/NavBar'
import OrderTab from './components/OrderTab'
import { useEffect, useState, createContext } from 'react'
import supabase from './Supabase'

export const BasicNeedsContext = createContext();

//
function App() {
  const [ItemsbyCat, setItemsbyCat] = useState(null)
  const [Error, setError] = useState(null)
  const [IsLoading, setIsLoading] = useState(true)
  const [OrderList, setOrderList] = useState({})
  const [Total, setTotal] = useState({Total:0})
  const [ItemsbyID, setItemsbyID] = useState({})
  //  Fetchs The Items
  useEffect(()=>{
      const FetchAllItems = async ()=> {        
          const { data, error } = await supabase
          .from('ItemMenu')
          .select('*')
          if(data){
              let TempItems = {}
              let TempIds = {}
              data.forEach(elem =>{
                  TempItems[elem.category] = [];
              });
              data.forEach(elem =>{
                  TempItems[elem.category].push(elem);
                  TempIds[elem.id] = elem;
                });
              setItemsbyID(TempIds);
              setItemsbyCat(TempItems);
              setError(null);
          }   
          if(error){
              console.log(error);
              setError("Error on Fetching Items")
              setItemsbyCat(null)
              setItemsbyID({})
          }
          setIsLoading(false)
      }
      FetchAllItems();
  },[]);
  
  
  const addItemById = (Id, type) =>{
    type == null ? (type = "Normal") : (null)
    console.log("Added " ,ItemsbyID[Id].Name ," " , type);
    let TempOL = OrderList;
    if(TempOL[Id] == undefined){
      TempOL[Id] = {
          count:{}
        }
    }
    if(TempOL[Id]['count'][type] == undefined){
      TempOL[Id]['count'][type] = 0;
    }
    TempOL[Id]['count'][type] += 1;  
    setOrderList({...TempOL});
    //CalculateForPrice();
  }
  const decreaseItembyId = (Id, type) =>{
    let TempOL = OrderList;
    TempOL[Id]['count'][type] -=1;
    if (TempOL[Id]['count'][type] <= 0){
      delete TempOL[Id]['count'][type]
      delete OrderList[Id]
    }
    setOrderList({...TempOL});
  }
  const CalculateForPrice = ()=>{
    let TempTotal = {Total:0};
    //TempTotal['Total'] = 0;
    Object.entries(OrderList).forEach(([ind,Elem])=>{
      TempTotal[ind] = 0;
      let price = ItemsbyID[ind].Price;
      //TempTotal[ind] = 0
      Object.values(Elem['count']).forEach((elem)=>{
        //console.log("Elem",elem);
        //console.log("ind",ItemsbyID[ind].Name)
        let RealPrice = price * elem;
        TempTotal[ind] += RealPrice;  
        TempTotal['Total'] += RealPrice
      })
    })
    //console.log(TempTotal);
    setTotal({...TempTotal});
  }

  const removeItembyId = (Id)=>{
    let TempOL = OrderList;
    delete TempOL[Id]['count']
    delete OrderList[Id]
    setOrderList({...TempOL});
  }
  
  const SendOrder = ()=>{
    
  }
  
  useEffect(CalculateForPrice,[OrderList]);

  return (
    <>
    <div className="AppMain">
      <NavBar/>
      <div className="MainPage">
        <BasicNeedsContext.Provider value={{OrderList,Total,ItemsbyID}}>
        <ItemMenu ItemsbyCat={ItemsbyCat} FetchError={Error} addItem = {addItemById} />
        <OrderTab ItemListID={ItemsbyID} OrderList={OrderList} Total = {Total} decreaseItem ={decreaseItembyId} removeID={removeItembyId}/>
        <div>  {/* OrderHistory */}</div>
        </BasicNeedsContext.Provider>
      </div>  
    </div>
    </>
  )
}

export default App
