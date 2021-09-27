import Image from "next/image";
import AddImage from '../../../assets/images/headerimage.png';
import TitleImage from '../../../assets/images/d.png';



export default function AddCard(){
       return(
            <div className="add-card">
                <div className="add-image-container">
                    <div className="add-image">
                        <Image  src={AddImage} alt="Header Image"/>
                    </div>
                </div>
                <div className="add-content">
                    <div className="add-message">
                        <h1>$0 delivery for 30 days! <Image className="add-title-image" width={"30px"} height={"30px"} src={TitleImage}/></h1>
                        <span>$0 delivery fee for orders over $10 for 30 days</span>
                    </div>
                </div>
                <div className="link-content">
                    <a href="">Learn more -- </a>
                </div>                 
            </div>
       );
}