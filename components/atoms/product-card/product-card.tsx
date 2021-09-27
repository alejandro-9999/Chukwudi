import Image from "next/image";
import ProductImage from "../../../assets/images/pexels-photo-675951.jpeg";
import IconStart from "../../../assets/icons/149220.svg";


export default function ProductCard() {
  return (
    <div className="product-card">
      <div className="product-card-header">
        <Image
          objectFit={"fill"}
          width={"260px"}
          height={"130px"}
          className="product-card-image"
          src={ProductImage}
        />
        <div className="product-card-time">
          <h1>
            25-30 <span>min</span>
          </h1>
        </div>
      </div>
      <div className="product-card-data mt-5">
        <h1>Bagel Story</h1>
        <div className="product-card-info">
          <div className="product-container-info">
            
            <div className="mr-1">
                <Image src={IconStart} width={"10px"} height={"10px"}/>
            </div>
              <span className="text-black">4.94</span>
            
            <div className="text-base font-normal mx-2">·</div>
            <div>Collingwood, Ontario</div>
          </div>
        </div>
      </div>
    </div>
  );
}
