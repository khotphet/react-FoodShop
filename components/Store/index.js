import React,{Component} from "react";


export default class Store extends Component{
  render(){
    const {id,name,img,detail,address}=this.props.shop;
    const {removeShop}=this.props;
    console.log(this.props.shop)
    return(
      <div className="shop">
      <div className="img-container">
        <img src={img}/>
        <span className="close-btn" onClick={()=>removeShop(id)}>
        <i className="fas fa-window-close"></i>
        </span>
        </div>
        <div className="shop-info">
          <h2>{name}</h2>
          <p>{detail}</p>
          <p>{address}</p>
        </div>
      </div>
    )
  }
}