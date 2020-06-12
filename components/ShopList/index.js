import React,{Component} from "react";
import Store from "../Store"
import {shopdata} from "../../data.js"
export default class Shoplist extends Component{
  state={
    shops:shopdata
  }
  removeShop=(id)=>{
    const {shop}=this.state;
    const sortedshop=shops.filter(shop=>shop.id!==id)
    this.setState({
      shop:sortedshop
    })
  }
  render(){

    const {shops}=this.state;
  
    return(
      <div className="shopList">
        {shops.map(shop=>(
          <Store key={shop.id} shop={shop} removeShop={this.removeShop}/>
        ))}
      </div>
    )
  }
}