import React from 'react';
class CartItem extends React.Component {
    constructor(){
        super();
        this.state={
            price: 999,
            title: 'Mobile Phone',
            qty: 1,
            img:''
        }
        // this.increaseQuantity=this.increaseQuantity.bind(this);
        this.testing();
    }
    testing(){
        const promise=new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve('done');
            },5000);
        })
    
    promise.then(()=>{
        // setState acts like a synchronous call
        this.setState({qty:this.state.qty+100});
    });
    }

    increaseQuantity=()=>{
        //this.state.qty +=1;
        // console.log('test',this.state);
        // setState form 1
        // this.setState({
        //     qty:  this.state.qty+1
        // });

        // setState form 2
        this.setState((prevState)=>{
            return {
                qty: prevState.qty+1
            }
        },()=>{
            console.log('this.state',this.state);
        });
    }

    decreaseQuantity=()=>{
        // this.setState({
        //     qty: this.state.qty-1
        // });
        const { qty }=this.state;
        if(qty===0){
            return;
        }

        this.setState((prevState)=>{
            return {
                qty: prevState.qty-1
            }
        });
    }
    render() {
        const {price,title,qty}=this.state;
        return(
            <div className="cart-item">
            <div className="left-block">
            <img alt="" style={styles.image}/>
            </div>
            <div className="right-block">
            <div style={ { fontSize: 25 } }>{title}</div>
            <div style={ { color:'#777' } }>Price: {price}</div>
            <div style={ { color:'#777' } }>Qty: {qty}</div>
            <div className="cart-item-actions">
                {/* Buttons */}

                <img alt="increase" className="action-icons" src="https://t4.ftcdn.net/jpg/01/26/10/59/240_F_126105961_6vHCTRX2cPOnQTBvx9OSAwRUapYTEmYA.jpg" onClick={this.increaseQuantity}></img>
                <img alt="decrease" className="action-icons" src="https://t3.ftcdn.net/jpg/03/73/49/86/240_F_373498649_nBxauQ0ipBSVrVcMpWWVmTpXu3BLvRyY.jpg" onClick={this.decreaseQuantity}></img>
                <img alt="delete" className="action-icons" src="https://cdn-icons-png.flaticon.com/128/6861/6861362.png"></img>

            </div>
            </div>
            </div>
            
        );
    }
}

const styles={
    image: {
      height: 110,
      width: 110,
      borderRadius: 4,
      background: '#ccc'
    }
  }

export default CartItem;