import ShopingCart from "../../organisms/shoging-cart/shoping-cart"
import ProductsPanel from "../../organisms/products-panel/products-panel"
import React from "react";

export default function HomePage() {
   

   return <div className="home-page">
      <ProductsPanel/>
      <ShopingCart/>
   </div> 
}