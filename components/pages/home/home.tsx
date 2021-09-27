import ShopingCart from "../../organisms/shoging-cart/shoping-cart"
import ProductsPanel from "../../organisms/products-panel/products-panel"
import React from "react";

export default function HomePage() {
   
   const loadCate = async ()=>{
      const response:any =  await fetch('/api/categories');
      console.log(await response.json());
   };

   React.useEffect(()=>{
      loadCate();
   });

   return <div className="home-page">
      <ProductsPanel/>
      <ShopingCart/>
   </div> 
}