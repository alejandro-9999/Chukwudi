import Image from "next/image";
import CategorieImage from '../../../assets/icons/701965.svg';
import { Category } from "../../../store/slices/categories.slice";



interface CategoryItemProps{
    item:Category;
}


export default function CategoryItem(props:CategoryItemProps){
       return(
            <div className="category-card">
                <div className="icon-avatar-category">
                    <img src={props.item.icon}/>
                </div>
                <div className="category-name">
                   <h1>{props.item.name}</h1>     
                </div>
            </div>
       );
}