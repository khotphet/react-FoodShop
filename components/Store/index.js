import React,{Component} from "react";


export default class Store extends Component{
  state={
    showInfo:false
  };
  handleInfo=()=>{
    this.setState({
      showInfo:!this.state.showInfo
    })
  }


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
          <h6>ตั้งอยู่ที่ {""}
           <span onClick={this.handleInfo}>
                          <i className="fas fa-caret-square-down"></i>
                      </span>
          </h6>
          {this.state.showInfo && <p>{address}</p>}
        </div>
      </div>
    )
  }
}