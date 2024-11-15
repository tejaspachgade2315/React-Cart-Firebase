import React from "react";
// import CartItem from "./CartItem";
import Cart from "./Cart";
import Navbar from "./Navbar";
import * as firebase from "firebase";

class App extends React.Component {
  constructor(){
    super();
    this.state={
        products: [],
        loading: true

    };
}

componentDidMount(){
  firebase
  .firestore()
  .collection("products")
  .get()
  .then(snapshot=>{
    const products=snapshot.docs.map(doc=>{
      const data=doc.data();
      data["id"]=doc.id;
      return data;
    });
    this.setState({products: products,loading:false});

  });
}
handleIncreaseQuantity=(product)=>{
    console.log('Heyy please increase int the quantity of',product);
    const {products}=this.state;
    const index=products.indexOf(product);
    products[index].qty+=1;
    this.setState({
        products:products
    })
}
handleDecreaseQuantity=(product)=>{
    console.log('Heyy please decrease int the quantity of',product);
    const {products}=this.state;
    const index=products.indexOf(product);
    if(products[index].qty===0){
        return;
    }
    products[index].qty-=1;
    this.setState({
        products:products
    });
};
handleDeleteProduct=(id)=>{
    const {products}=this.state;
    const items=products.filter(product=>product.id!==id);
    this.setState({
        products: items
    });
};
getcountOfCartItems=()=>{
  const{products}=this.state;
  let count=0;
  products.forEach((product)=>{
    count+=product.qty;
  });
  return count;
};

  getCartTotal=()=>{
    const{products}=this.state;
    let cartTotal=0;
    products.map((product)=>{
      if(product.qty>0){
      cartTotal=cartTotal+product.qty*product.price;
      }
    return "";
  });

    return cartTotal;
  };

  render(){
    const {products,loading}=this.state
  return (
    <div className="App">
      <Navbar count={this.getCartCount()}/>
      <Cart
      onIncreaseQuantity={this.handleIncreaseQuantity}
      onDecreaseQuantity={this.handleDecreaseQuantity}
      onDeleteProduct={this.handleDeleteProduct}
      products={products}
      />
      {loading && <h1>Loading Products...</h1>}
      <div style={{padding:10,fontSize:20}}>
        TOTAL: {this.getCartTotal()}
        </div>
    </div>
  );
  }
}


export default App;

// Tejas Pachgade
//  {
//   price: 99,
//   title: 'Watch',
//   qty: 1,
//   img: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2F0Y2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
//   id: 1
// },
// {
//   price: 999,
//   title: 'Mobile Phone',
//   qty: 10,
//   img: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9iaWxlJTIwcGhvbmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
//   id: 2
// },
// {
//   price: 99999,
//   title: 'Laptop',
//   qty: 1,
//   img: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
//   id: 3
// },