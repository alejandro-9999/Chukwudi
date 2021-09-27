import Image from "next/image";
import CategorieImage from '../../../assets/icons/701965.svg';




export default function Category(){
       return(
            <div className="category-card">
                <div className="icon-avatar-category">
                    <Image src={CategorieImage}></Image>
                </div>
                <div className="category-name">
                   <h1>All</h1>     
                </div>
            </div>
       );
}