import Image from "next/image";
import BurguerIcon from '../../../assets/icons/1046784.svg';
import DropdownDelivery from "../../atoms/dropdown-delivery/dropdown-delivery";
import CategoryItem from "../../atoms/category-item/category-item";
import ProductCard from "../../atoms/product-card/product-card";
import { connect, useSelector } from "react-redux";
import React from "react";
import { ArrayTypeProduct,TypeProduct} from "../../../redux/types";
import { getCategoriesSelector } from "../../../store/slices/categories.slice";
import { getProductsSelector } from "../../../store/slices/products.slice";


export default function CategoriesSection() {
    
    const categories =  useSelector(getCategoriesSelector);
    const products = useSelector(getProductsSelector);
    
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
                {
                    categories.map(Element=>(
                        <CategoryItem item = {Element}/>
                    ))
                }
            </div>
            <div className="products-slider">
                {
                    products.map(Element=>(
                        <ProductCard/>
                    ))
                }
            </div>
        </div>
    );
}