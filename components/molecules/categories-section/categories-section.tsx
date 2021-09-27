import Image from "next/image";
import BurguerIcon from '../../../assets/icons/1046784.svg';
import DropdownDelivery from "../../atoms/dropdown-delivery/dropdown-delivery";
import Category from "../../atoms/category/category";
import ProductCard from "../../atoms/product-card/product-card";


export default function CategoriesSection() {
    return (
        <div className="categories-section">
            <div className="title-categories-secion">
                <div className="title-categories">
                    <div className="title-image-categories">
                        <h1>Products</h1>
                        <Image src={BurguerIcon} width={"30px"} height={"30px"}></Image>
                    </div>
                </div>
                <div className="dropdow-categories">
                    <DropdownDelivery/>
                </div>
            </div>
            <div className="categories-slider">
                <Category/>
                <Category/>
                <Category/>
                <Category/>
            </div>
            <div className="products-slider">
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </div>
        </div>
    );
}

