import Image from "next/image";
import ProductImage from "../../../assets/images/pexels-photo-675951.jpeg";
import IconStart from "../../../assets/icons/149220.svg";
import { Product } from "../../../store/slices/products.slice";




interface ProductCardProps{
  item:Product
}


export default function ProductCard(props:ProductCardProps) {
  return (
    <div className="product-card">
      <div className="product-card-header">
        <article>
          <img
            className="product-card-image"
            src={props.item.image}
          />
        </article>
        <div className="product-card-time">
          <h1>
            {props.item.time}
          </h1>
        </div>
      </div>
      <div className="product-card-data mt-5">
        <h1>{props.item.name}</h1>
        <div className="product-card-info">
          <div className="product-container-info">
            
            <div className="mr-1">
                <Image src={IconStart} width={"10px"} height={"10px"}/>
            </div>
              <span className="text-black">{props.item.qualification}</span>
            
            <div className="text-base font-normal mx-2">·</div>
          </div>
        </div>
      </div>
    </div>
  );
}
