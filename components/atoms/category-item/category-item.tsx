import Image from "next/image";
import CategorieImage from '../../../assets/icons/701965.svg';
import { Category } from "../../../store/slices/categories.slice";




export default function CategoryItem(category:Category){
       return(
            <div className="category-card">
                <div className="icon-avatar-category">
                    <img src={category.icon}/>
                </div>
                <div className="category-name">
                   <h1>{category.name}</h1>     
                </div>
            </div>
       );
}